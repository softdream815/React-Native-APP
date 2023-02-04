import {useGetSuburb} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';

export function useGetAllSuburbs(token: string, enabled: boolean = false) {
  const {graphQLClient} = useGraphQLClient();
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetSuburb(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get all suburbs');
      },
      enabled: enabled,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getSuburbs: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    suburbs: queryInfo.data?.getSuburb?.result,
  };
}
