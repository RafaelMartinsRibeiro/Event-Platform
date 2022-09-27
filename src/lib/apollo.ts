import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8jezuny0pov01ulh2lw2vy0/master",
  cache: new InMemoryCache()
})