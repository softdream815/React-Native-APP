import {useGetAllVehicleDetails} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetVehicles() {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetAllVehicleDetails(
    graphQLClient,
    {},
    {
      suspense: false,
      useErrorBoundary: false,
      onSuccess: () => {},
      onError: () => {
        console.log('Error get get vehicles');
      },
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getVehicles: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    vehicles: queryInfo.data?.getVehicles?.result ?? [],
  };
}
