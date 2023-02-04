import {
  useUpdateCartItem,
  UpdateCartItemVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useUpdateCartItems() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useUpdateCartItem(
    graphQLClient,
    {
      onMutate: ({
        pid,
        userid,
        dateCreated,
        fromDate,
        endDate,
        quantity,
      }: UpdateCartItemVariables) => {},
      onSuccess: (res) => {},
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
