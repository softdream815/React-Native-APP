import {useGetMstCategoryMain} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetMainCategories() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetMstCategoryMain(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get all categories');
      },
      enabled: !!token,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getMainCategories: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    categories: queryInfo.data?.getMstCategoryMain?.result || [],
  };
}
