import {useGetSpecialProductList} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetSpeicalProducts(
  productName: string | null,
  domainCategoryIds: string | null,
  companyId: number | null,
  size = 10,
) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetSpecialProductList(
    graphQLClient,
    {
      productName,
      domainCategoryIds,
      companyId,
      size,
    },
    {
      suspense: false,
      useErrorBoundary: true,
      onSuccess: () => {},
      onError: error => {
        console.log('Get special products Error:', error);
      },
      enabled: true,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getSpeicalProducts: queryInfo.refetch,
    products: queryInfo.data?.getPrdProductList?.result ?? [],
    loading: queryInfo.isLoading || queryInfo.isFetching,
    currentPage: queryInfo.data?.getPrdProductList?.currentPage,
    totalPages: queryInfo.data?.getPrdProductList?.totalPages,
  };
}
