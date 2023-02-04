import {useGetCity} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';

export function useGetAllCities(token: string, enabled: boolean = false) {
  const {graphQLClient} = useGraphQLClient();
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetCity(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get all cities');
      },
      enabled: enabled,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getCities: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    cities: queryInfo.data?.getCity?.result,
  };
}
