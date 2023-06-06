import { useAuthState } from '@mastech/shared-state';
import { AuthPage, AuthFormType } from '@mastech/shared-ui';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@mastech/controllers';

const AuthForms: AuthFormType = {
  inputs: [
    {
      label: 'Email',
      name: 'email',
      require: true,
      placeholder: 'mail@example.com',
    },
    {
      label: 'Password',
      name: 'password',
      require: true,
      placeholder: 'password',
    },
  ],

  type: 'signIn',
  title: 'Sign In',
  subTitle: 'Enter your email and password to sign in!',
  from: 'admin',
};

export function Login() {
  const { handleLogin, isAuthenticated } = useAuth();
  const loading = useAuthState((state) => state.isProcessingLogin);
  const location = useLocation();
  if (isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <section className="flex h-screen">
      <div className="flex-1 flex items-center justify-center bg-white relative">
        <div className="w-2/4">
          <AuthPage
            authForm={AuthForms}
            loading={loading}
            onSubmit={handleLogin}
          />
        </div>

        <p className="mt-4 text-center text-gray-500 text-sm absolute bottom-0">
          &copy; 2023. All Rights Reserved.
        </p>
      </div>
      <div className="flex-1 bg-gray-300">
        <img
          src="mechanic.jpeg"
          alt="Mechanic"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}

export default Login;
