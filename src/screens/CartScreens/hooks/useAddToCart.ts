import {useAddToCart, AddToCartVariables} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useAddToCartMutation() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useAddToCart(
    graphQLClient,
    {
      onMutate: (params: AddToCartVariables) => {
        console.log(params);
      },
      onSuccess: () => {},
      onError: (error: AddToCartVariables) => {
        console.log(error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
