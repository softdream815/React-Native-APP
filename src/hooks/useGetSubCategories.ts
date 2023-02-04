import {useGetMstCategoryByParentId} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';

export function useGetSubCategories(token: string, categoryId: number) {
  const {graphQLClient} = useGraphQLClient();
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetMstCategoryByParentId(
    graphQLClient,
    {
      id: categoryId,
    },
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get sub categories');
      },
      enabled: !!token,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getSubCategories: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    categories: queryInfo.data?.getMstCategoryByParentId?.result || [],
  };
}
