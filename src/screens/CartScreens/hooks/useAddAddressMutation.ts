import {useAddAddress, AddAddressVariables} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useAddAddressMutation() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useAddAddress(
    graphQLClient,
    {
      onMutate: (variables: AddAddressVariables) => {},
      onSuccess: () => {},
      onError: (error: any) => {
        console.log(error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
