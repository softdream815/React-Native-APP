import {
  useCreateFavourites,
  CreateFavouritesVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';
import {RootStateType} from '@app/types';

export function useAddFavoriteProduct() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: RootStateType) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useCreateFavourites(
    graphQLClient,
    {
      onMutate: (variables: CreateFavouritesVariables) => {},
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
