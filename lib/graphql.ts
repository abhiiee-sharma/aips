import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  process.env.WP_GRAPHQL_URL as string
);
