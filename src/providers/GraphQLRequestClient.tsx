import {GraphQLClient} from 'graphql-request';
import React from 'react';

type Props = {
  children: React.ReactNode;
  defaultState?: GraphQLClientState;
};

export type GraphQLClientState = {
  graphQLClient: GraphQLClient;
};

export type GraphQLClientProviderState = GraphQLClientState | null;

export const GraphQLClientContext =
  React.createContext<GraphQLClientProviderState>(null);

const requestHeaders = {
  authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIiLCJqdGkiOiJhMmY3Yzk0ZC1kNjY1LTQ1NzUtOGFmYS03YThmMjAxYmJmN2EiLCJJZCI6IjIiLCJjb21wYW55SWQiOiIyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiTWFpbiBCdXNpbmVzcyBVc2VyIiwiZXhwIjoxNjUzNjQxMTg0LCJpc3MiOiJ3d3cuRXp5RmluZC5jby56YSIsImF1ZCI6Ind3dy5FenlGaW5kLmNvLnphIn0.Jyh2fddx5S83Bt-uxMInTojf_XL0NpidVIwYYjFYPRQ',
};

const initialState: GraphQLClientState = {
  graphQLClient: new GraphQLClient(
    'https://mobileapiv2.ezyfind.co.za/graphql',
    {
      headers: requestHeaders,
    },
  ),
};

export function GraphQLRequestClient({children}: Props) {
  return (
    <GraphQLClientContext.Provider value={initialState}>
      {children}
    </GraphQLClientContext.Provider>
  );
}
