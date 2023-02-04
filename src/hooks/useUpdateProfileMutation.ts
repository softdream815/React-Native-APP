import {
  useUpdateMstUser,
  UpdateMstUserVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useUpdateProfileMutation() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useUpdateMstUser(
    graphQLClient,
    {
      onMutate: (params: UpdateMstUserVariables) => {},
      onSuccess: (res: any) => {},
      onError: (error: UpdateMstUserVariables) => {
        console.log(error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
