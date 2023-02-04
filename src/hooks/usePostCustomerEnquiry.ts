import {
  usePostMstCustomerEnquiry,
  PostMstCustomerEnquiryVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function usePostCustomerEnquiry() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = usePostMstCustomerEnquiry(
    graphQLClient,
    {
      onMutate: (params: PostMstCustomerEnquiryVariables) => {},
      onSuccess: (res: any) => {},
      onError: (error: PostMstCustomerEnquiryVariables) => {
        console.log(error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
