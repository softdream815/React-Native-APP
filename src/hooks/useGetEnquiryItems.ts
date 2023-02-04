import {
  useGetCustomerEnquiryList,
  GetCustomerEnquiryListVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetEnquiryItems({size}: GetCustomerEnquiryListVariables) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetCustomerEnquiryList(
    graphQLClient,
    {
      size,
    },
    {
      suspense: false,
      useErrorBoundary: true,
      onSuccess: () => {},
      onError: error => {
        console.log('Error Fetching My Requet Items:', error);
      },
      enabled: false,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    refetch: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    enquiryItems: queryInfo.data?.getCustomerEnquiryList?.result ?? [],
    total: queryInfo.data?.getCustomerEnquiryList?.count ?? 0,
  };
}
