import {useGetProvince} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';

export function useGetAllProvinces(token: string, enabled: boolean = false) {
  const {graphQLClient} = useGraphQLClient();
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetProvince(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get all provinces');
      },
      enabled: enabled,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getProvinces: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    provinces: queryInfo.data?.getProvince?.result,
  };
}
