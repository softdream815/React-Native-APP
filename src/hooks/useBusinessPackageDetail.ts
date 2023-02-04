import {useGetMstPackageDetailList} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useBusinessPackageDetail(id: number | null) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetMstPackageDetailList(
    graphQLClient,
    {
      id: id,
    },
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {},
      enabled: true,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getPackagesDetail: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    packageDetail: queryInfo.data?.getMstPackageDetailList?.result,
  };
}
