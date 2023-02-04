import {useGetHierarchyResponseItems} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetHierarchyResponses(requestId: string) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetHierarchyResponseItems(
    graphQLClient,
    {
      requestId,
    },
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get get hierachy responses');
      },
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getResponses: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    responses: queryInfo.data?.getHierarchyResponseItems ?? [],
  };
}
