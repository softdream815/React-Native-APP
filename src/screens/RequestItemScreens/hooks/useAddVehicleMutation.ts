import {useMstVehicle, MstVehicleVariables} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';

export function useAddVehicleMutation() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useMstVehicle(
    graphQLClient,
    {
      onMutate: (variables: MstVehicleVariables) => {},
      onSuccess: () => {},
      onError: (error: any) => {
        Alert.alert('Sorry, Something went wrong!');
        console.log(error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
