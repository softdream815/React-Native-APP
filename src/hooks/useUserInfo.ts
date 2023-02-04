import {useGetUser} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';

export function useUserInfo(token: string) {
  const {graphQLClient} = useGraphQLClient();
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetUser(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: error => {
        console.log('Error Get User:', error);
      },
      enabled: false,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    fetchUser: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    data: queryInfo.data?.getUser,
  };
}
