import {useGetRating as useGetRatingQuery} from '@app/generated/graphql-types';
import {useGraphQLClient} from '@app/providers/hooks/useGraphQLClient';
import {useSelector} from 'react-redux';

export function useGetRating(id: number, ratingType: number) {
  const {graphQLClient} = useGraphQLClient();
  const {token} = useSelector((state: any) => state.user);
  const authorization = `Bearer ${token}`;

  const queryInfo = useGetRatingQuery(
    graphQLClient,
    {
      id,
      key: ratingType,
    },
    {
      suspense: false,
      useErrorBoundary: true,
      onSuccess: () => {},
      onError: error => {
        console.log('Get special products rating Error:', error);
      },
      enabled: true,
    },
    {
      Authorization: authorization,
    },
  );

  return {
    getRating: queryInfo.refetch,
    ratings: queryInfo.data?.getMstRatingScoreList?.result,
  };
}
