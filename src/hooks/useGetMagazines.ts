import {
  useGetMagazinesList,
  GetMagazinesListVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetMagazines({companyId}: GetMagazinesListVariables) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetMagazinesList(
    graphQLClient,
    {
      companyId,
    },
    {
      suspense: false,
      useErrorBoundary: true,
      onSuccess: () => {},
      onError: error => {
        console.log('Error Fetching magazine list:', error);
      },
    },
    {
      Authorization: authorization,
    },
  );
  return {
    refetch: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    magazines: queryInfo.data?.getMagazinesList?.result ?? [],
  };
}
