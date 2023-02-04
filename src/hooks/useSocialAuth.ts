import {useSocialAuth} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {encode} from 'base-64';

type AuthenticationParamsTypes = {
  username: string;
  password: string;
  jti: string;
};

export function useSocialAuthentication({
  username,
  password,
  jti,
}: AuthenticationParamsTypes) {
  const {graphQLClient} = useGraphQLClient();
  const authorization = `Basic ${encode(
    `${username.trim()}:${password.trim()}`,
  )}`;

  const queryInfo = useSocialAuth(
    graphQLClient,
    {
      jti,
    },
    {
      suspense: false,
      useErrorBoundary: true,
      onSuccess: () => {},
      onError: error => {
        console.log('GetSSOLogin Error:', error);
      },
      enabled: false,
    },
    {
      Authorization: authorization,
    },
  );
  return {
    sociallogin: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    data: queryInfo.data?.oAuth,
  };
}
