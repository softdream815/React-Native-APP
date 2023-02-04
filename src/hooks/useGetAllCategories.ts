import {useGetAllCategroies} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';

export function useGetCategories(token: string, enable = false) {
  const {graphQLClient} = useGraphQLClient();
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetAllCategroies(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {},
      enabled: enable,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getCategories: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    categories: queryInfo.data?.mstCategorys,
  };
}
