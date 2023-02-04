import {usePurchaseShoppingCart} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function usePurchaseCart() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = usePurchaseShoppingCart(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error purchase product');
      },
      enabled: false,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    purchase: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    purchaseResult: queryInfo.data?.purchaseShoppingCartAsync?.result,
  };
}
