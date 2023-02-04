import {
  useGetRatingList,
  GetRatingListVariables,
} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

// KeyType
// 1 Business rating
// 2. Special Rating
// 3. eflyerrating
// 4. product

export function useGetRatingUser({key, keyType, size}: GetRatingListVariables) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetRatingList(
    graphQLClient,
    {
      key,
      keyType,
      size,
    },
    {
      suspense: false,
      useErrorBoundary: true,
      onSuccess: () => {},
      onError: error => {
        console.log('Error Fetching product review list:', error);
      },
    },
    {
      Authorization: authorization,
    },
  );
  return {
    refetch: queryInfo.refetch,
    loading: queryInfo.isRefetching || queryInfo.isFetching,
    ratingList: queryInfo.data?.getRatingList?.result ?? [],
  };
}
