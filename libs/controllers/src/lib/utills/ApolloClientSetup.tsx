import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { errorLink } from './onErrorHandler';
import { useAuthState } from '@mastech/shared-state';

const httpLink = createHttpLink({
  uri: '',
});

export const useApolloClient = () => {
  const token = useAuthState((state) => state.token);
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ` : '',
      },
    };
  });

  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
  });
  return { client };
};
export default useApolloClient;
