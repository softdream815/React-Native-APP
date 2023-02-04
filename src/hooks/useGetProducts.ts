import {
  useGetPrdProductList,
  GetPrdProductListVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetProducts({
  page,
  size,
  catgoryId,
  domainCategoryIds,
  salesTypeId,
  productName,
  latitude,
  longitude,
}: GetPrdProductListVariables) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetPrdProductList(
    graphQLClient,
    {
      page,
      size,
      catgoryId,
      domainCategoryIds,
      salesTypeId,
      productName,
      latitude,
      longitude,
    },
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: error => {
        console.log('Error Fetching products:', error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return {
    refetch: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    data: queryInfo.data?.getPrdProductList,
  };
}
