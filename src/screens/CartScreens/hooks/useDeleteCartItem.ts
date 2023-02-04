import {
  useDeletePrdShoppingCart,
  DeletePrdShoppingCartVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useDeleteCartItem() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useDeletePrdShoppingCart(
    graphQLClient,
    {
      onMutate: ({recordId}: DeletePrdShoppingCartVariables) => {},
      onSuccess: () => {},
      onError: (error: any) => {
        console.log(error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
