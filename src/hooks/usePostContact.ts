import {
  useCreateContactRequest,
  CreateContactRequestVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function usePostContact() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useCreateContactRequest(
    graphQLClient,
    {
      onMutate: (params: CreateContactRequestVariables) => {},
      onSuccess: (res: any) => {},
      onError: (error: CreateContactRequestVariables) => {
        console.log(error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
