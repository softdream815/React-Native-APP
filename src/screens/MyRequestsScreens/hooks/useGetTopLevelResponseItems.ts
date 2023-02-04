import {useGetTopLevelResponseItems} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetTopLevelResponse(requestId: string) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetTopLevelResponseItems(
    graphQLClient,
    {
      requestId,
    },
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get get top level responses');
      },
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getTopResponses: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    topResponses: queryInfo.data?.getTopLevelResponseItems ?? [],
  };
}
