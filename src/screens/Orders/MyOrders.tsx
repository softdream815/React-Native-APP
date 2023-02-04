import React, {useState, useEffect, useMemo} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import {
  Container,
  Text,
  Header,
  RawBottomSheet,
} from '@app/components/templates';
import colors from '@app/contants/colors';
import {useDispatch} from 'react-redux';
import {set_order_params} from '@app/redux/actions/actions';
import moment from 'moment';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import BottomBar2 from '@app/assets/svgs/BottomBar2';
import Mix from '@app/assets/svgs/Mix';
import ActiveOrders from './ActiveOrders';
import History from './History';

const TopTab = createMaterialTopTabNavigator();

const tabBarStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: colors.appBackgroundColor,
    paddingBottom: 20,
    marginLeft: -20,
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
  },
  title: {
    backgroundColor: colors.appBackgroundColor,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  activeBottomBar: {
    marginBottom: -10,
    marginTop: 10,
  },
});

function MyTabBar({state, descriptors, navigation}: MaterialTopTabBarProps) {
  return (
    <View style={tabBarStyles.container}>
      <View style={tabBarStyles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={tabBarStyles.title}
              key={route.key}>
              <Text
                color={isFocused ? 'active' : 'primary'}
                weight="semibold"
                align="center"
                uppercase>
                {label}
              </Text>
              {isFocused && (
                <View style={tabBarStyles.activeBottomBar}>
                  <BottomBar2 />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const MyOrdersStack = ({onPressSetting}: any) => {
  return (
    <TopTab.Navigator
      tabBar={props => (
        <Container
          pr={10}
          dir="row"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="transparent">
          <MyTabBar {...props} />
          <TouchableOpacity onPress={onPressSetting}>
            <Mix />
          </TouchableOpacity>
        </Container>
      )}>
      <TopTab.Screen
        name="ActiveOrders"
        component={ActiveOrders}
        options={{title: 'Active Orders'}}
      />
      <TopTab.Screen
        name="History"
        component={History}
        options={{title: 'History'}}
      />
    </TopTab.Navigator>
  );
};

const filterItems = [
  {label: 'All Items', value: 0},
  {label: 'Last 3 months', value: 3},
  {label: 'Last 6 months', value: 6},
];

const MyOrders = () => {
  const dispatch = useDispatch();
  const [filterOption, setFilterOption] = useState(1);
  const toDate = useMemo(() => new Date(), []);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const onChangeFilter = (e: any) => {
    const index = filterItems.findIndex(f => f.value === e.value);
    setFilterOption(index + 1);
    if (e.value === 0) {
      dispatch(set_order_params(null, toDate));
    } else if (e.value === 3) {
      const _fromDate = moment().subtract(3, 'months').toDate();
      dispatch(set_order_params(_fromDate, toDate));
    } else if (e.value === 6) {
      const _fromDate = moment().subtract(6, 'months').toDate();
      dispatch(set_order_params(_fromDate, toDate));
    }
  };
  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Header title="My Orders" />
      <MyOrdersStack onPressSetting={() => setShowFilterOptions(true)} />
      <RawBottomSheet
        show={showFilterOptions}
        onClose={() => setShowFilterOptions(false)}>
        <Container style={{height: 100}}>
          <RadioButtonRN
            data={filterItems}
            selectedBtn={onChangeFilter}
            initial={filterOption}
          />
        </Container>
      </RawBottomSheet>
    </Container>
  );
};

export default MyOrders;
