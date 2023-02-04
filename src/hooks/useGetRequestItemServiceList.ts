import {
  useGetItemRequestServiceList,
  GetItemRequestServiceListVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetRequestItemServiceList({
  domainCategoryIds,
  category,
  subCategoryId,
  page,
  size,
}: GetItemRequestServiceListVariables) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetItemRequestServiceList(
    graphQLClient,
    {
      page,
      size,
      category,
      domainCategoryIds,
      subCategoryId,
    },
    {
      suspense: false,
      useErrorBoundary: true,
      onSuccess: () => {},
      onError: error => {
        console.log('Error Fetching request services:', error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return {
    refetch: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    requestServiceItems:
      queryInfo.data?.getItemRequestServiceList?.result || [],
  };
}
