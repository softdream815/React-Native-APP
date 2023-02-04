import {
  useUpdateMstUserLocation,
  UpdateMstUserLocationVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useUpdateUserLocation() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const mutation = useUpdateMstUserLocation(
    graphQLClient,
    {
      onMutate: (params: UpdateMstUserLocationVariables) => {},
      onSuccess: (res: any) => {},
      onError: (error: UpdateMstUserLocationVariables) => {
        console.log(error);
      },
    },
    {
      Authorization: authorization,
    },
  );

  return mutation;
}
