import {
  useGetBusinessList,
  GetBusinessListVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetBusiness({
  size,
  categories,
  title,
}: GetBusinessListVariables) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetBusinessList(
    graphQLClient,
    {
      size,
      categories,
      title,
    },
    {
      suspense: false,
      useErrorBoundary: true,
      onSuccess: () => {},
      onError: error => {
        console.log('Error Fetching Business list:', error);
      },
    },
    {
      Authorization: authorization,
    },
  );
  return {
    refetch: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    businesses: queryInfo.data?.getBusinessList,
  };
}
