import {
  useGetRequestList,
  GetRequestListVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetMyRequests({size}: GetRequestListVariables) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetRequestList(
    graphQLClient,
    {
      size,
    },
    {
      suspense: false,
      useErrorBoundary: true,
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
    myRequestItems: queryInfo.data?.getItemRequestList,
  };
}
