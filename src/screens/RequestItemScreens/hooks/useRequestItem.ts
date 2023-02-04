import {
  useMstItemRequest,
  MstItemRequestVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';

export function useRequestItem() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useMstItemRequest(
    graphQLClient,
    {
      onMutate: (variables: MstItemRequestVariables) => {
        console.log(variables);
      },
      onSuccess: () => {},
      onError: (error: any) => {
        console.log("ERROR:: ==== ", error)
        Alert.alert('Sorry, Something went wrong!');
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
