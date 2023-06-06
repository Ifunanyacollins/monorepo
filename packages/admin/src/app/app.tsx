import { AppLayout, RequireAuth } from '@mastech/shared-ui';
import { ApolloProvider } from '@apollo/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { menuItems } from './sideBarMenus';
import Login from '../pages/auth/login';

import { useApolloClient } from '@mastech/controllers';
import '../styles.css';
export function App() {
  const { client } = useApolloClient();
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <AppLayout menu={menuItems} />
              </RequireAuth>
            }
          >
            <Route index element={<h1>hello</h1>} />
          </Route>
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
