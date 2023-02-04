import {useGetShopingCart} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetShoppingCart() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetShopingCart(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: true,
      onSuccess: () => {},
      onError: error => {
        console.log('Error Fetching shoping carts:', error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return {
    refetch: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    data: queryInfo.data?.getPrdShoppingCart,
  };
}
