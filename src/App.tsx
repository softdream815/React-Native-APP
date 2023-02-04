import React, {Suspense} from 'react';
import {ActivityIndicator} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {queryClient} from './services/queryClient';
import {GraphQLRequestClient} from './providers/GraphQLRequestClient';
import {NetworkStatusProvider} from './providers/NetworkStatusProvider';
import {Store} from './redux/store';
import AppNavigator from './navigation/AppNavigator';
import Geocoder from 'react-native-geocoding';
import {GOOGLE_MAP_API_KEY} from '@env';
import {RootSiblingParent} from 'react-native-root-siblings';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  Geocoder.init(GOOGLE_MAP_API_KEY);
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <GraphQLRequestClient>
        <QueryClientProvider client={queryClient}>
          <NetworkStatusProvider>
            <Provider store={Store}>
              <RootSiblingParent>
                <AppNavigator />
              </RootSiblingParent>
            </Provider>
          </NetworkStatusProvider>
        </QueryClientProvider>
      </GraphQLRequestClient>
    </Suspense>
  );
};

export default App;
