import {useGetUserAddress} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetCheckOutAddress() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetUserAddress(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get all user address');
      },
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getAddress: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    addresses: queryInfo.data?.getUserAddress?.result || [],
  };
}
