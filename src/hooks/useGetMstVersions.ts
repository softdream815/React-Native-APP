import {useMstVersions} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';

export function useGetMstVersions(token: string) {
  const {graphQLClient} = useGraphQLClient();
  const authorization = `Bearer ${token}`;

  const queryInfo = useMstVersions(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get mst versions');
      },
      enabled: false,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getMstVersions: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    versions: queryInfo.data?.mstVersions,
  };
}
