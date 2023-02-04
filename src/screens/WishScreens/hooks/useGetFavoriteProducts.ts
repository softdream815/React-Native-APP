import {useGetFavoriteProductList} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetFavoriteProducts() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetFavoriteProductList(
    graphQLClient,
    {},
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
    favProducts: queryInfo.data?.getMstFavouritesProductList?.result ?? [],
  };
}
