import {useGetSsoLogin} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {encode} from 'base-64';

type AuthenticationParamsTypes = {
  username: string;
  password: string;
  jti: string;
};

export function useSSOLogin({
  username,
  password,
  jti,
}: AuthenticationParamsTypes) {
  const {graphQLClient} = useGraphQLClient();
  const authorization = `Basic ${encode(
    `${username.trim()}:${password.trim()}`,
  )}`;

  const queryInfo = useGetSsoLogin(
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
    login: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    data: queryInfo.data?.sSOLogin,
  };
}
