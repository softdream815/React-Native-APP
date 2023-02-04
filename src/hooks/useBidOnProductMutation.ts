import {
  useBidOnProduct,
  BidOnProductVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useBidOnProductMutation() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useBidOnProduct(
    graphQLClient,
    {
      onMutate: (params: BidOnProductVariables) => {},
      onSuccess: (res: any) => {},
      onError: (error: BidOnProductVariables) => {
        console.log(error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
