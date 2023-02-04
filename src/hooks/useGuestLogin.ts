import {useGetGuestLogin} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';

export function useGuestLogin() {
  const {graphQLClient} = useGraphQLClient();

  const queryInfo = useGetGuestLogin(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error Guest Login');
      },
      enabled: false,
    },
  );

  return {
    guestLogin: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    data: queryInfo.data?.guestLogin,
  };
}
