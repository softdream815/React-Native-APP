import {useGetMstPackageList} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useBusinessPackageList() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetMstPackageList(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {
        console.log('Success get all business packages');
      },
      onError: () => {
        console.log('Error get all business packages');
      },
      enabled: true,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getPackages: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    packages: queryInfo.data?.getMstPackageList?.result || [],
  };
}
