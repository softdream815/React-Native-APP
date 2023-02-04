import {useGetPrdOdersByUser} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetMyOrders(
  statusId: number | null,
  fromDate: Date | null,
  toDate: Date | null,
  page: number,
) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetPrdOdersByUser(
    graphQLClient,
    {
      orderStatusTypeId: statusId,
      fromDate,
      toDate,
      page: page.toString(),
    },
    {
      suspense: false,
      onSuccess: () => {},
      onError: error => {
        console.log('Error Fetching My Requet Items:', error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return {
    refetch: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    orders: queryInfo.data?.prdOrdersByUser,
  };
}
