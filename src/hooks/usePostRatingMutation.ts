import {
  usePostMstRating,
  PostMstRatingVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function usePostRatingMutation() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = usePostMstRating(
    graphQLClient,
    {
      onMutate: (params: PostMstRatingVariables) => {},
      onSuccess: (res: any) => {},
      onError: (error: PostMstRatingVariables) => {
        console.log(error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
