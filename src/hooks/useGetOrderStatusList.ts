import {useGetOrderStatusTypes} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetOrderStatusList() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetOrderStatusTypes(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get get order status list');
      },
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getOrderStatusList: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    orderStatusList: queryInfo.data?.prdOrderStatusTypes?.data ?? [],
  };
}
