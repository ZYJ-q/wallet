import { useContext } from 'react';

// auth provider
import AuthContext from 'contexts/Auth0Context';

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useAuth;
