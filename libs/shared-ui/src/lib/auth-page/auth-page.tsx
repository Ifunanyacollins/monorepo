import {
  Form,
  Input,
  Typography,
  Checkbox,
  Divider,
  Button,
  notification,
} from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { FacebookFilled, GoogleFilled } from '@mastech/svgs-icon';
import { useEffect } from 'react';
import { useAuthState } from '@mastech/shared-state';

const { Title, Text } = Typography;
/* eslint-disable-next-line */
export enum SignType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}
export interface AuthFormType {
  inputs: {
    label: string;
    name: string;
    require: boolean;
    placeholder: string;
  }[];
  social?: ['google', 'facebook'];
  type: 'signIn' | 'signUp' | 'forgotPassword';
  title: string;
  subTitle: string;
  from: 'admin' | 'merchant';
}
export interface AuthPageProps {
  authForm: AuthFormType;
  onSubmit: (value: any) => void;
  loading: boolean;
}

export function AuthPage(props: AuthPageProps) {
  const [api, contextHolder] = notification.useNotification();
  const { authForm, onSubmit, loading } = props;
  const errorMessage = useAuthState((state) => state.errorMessage);
  const { pathname } = useLocation();
  useEffect(() => {
    if (errorMessage) {
      api.error({
        message: 'Error',
        duration: 10,
        placement: 'topLeft',
        description: errorMessage,
      });
    }
  }, [errorMessage]);

  useEffect(() => {
    if (errorMessage) {
      api.destroy();
    }
  }, [pathname]);
  return (
    <div>
      {contextHolder}
      <Title style={{ color: '#2B3674' }} level={2}>
        {authForm.title}
      </Title>
      <Text className="text-[#A3AED0] text-[16px] bg-red-400">
        {authForm.subTitle}
      </Text>

      <Form layout="vertical" className="my-6" onFinish={onSubmit}>
        {authForm.inputs.map((input) => (
          <Form.Item
            key={input.name}
            name={input.name}
            label={input.label}
            rules={[
              {
                required: input.require,
                message: `Please input your ${input.label}`,
              },
            ]}
          >
            <Input size="large" placeholder={input.placeholder} />
          </Form.Item>
        ))}

        {authForm.type === SignType.SignIn && (
          <div className="flex justify-between">
            <Form.Item name="remember" valuePropName="checked" className="">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <div>
              <Link to="/auth/forgotpassword">Forgot password</Link>
            </div>
          </div>
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={loading}
          >
            Submit
          </Button>
        </Form.Item>

        {!!authForm.social?.length && <Divider plain>or</Divider>}

        {!!authForm.social?.length && (
          <div className=" w-full m-auto">
            {authForm.social?.includes('google') && (
              <Button
                icon={<GoogleFilled />}
                size="large"
                block
                className="flex items-center justify-center my-5 font-medium text-[#2B3674]"
              >
                {`${
                  authForm.type === SignType.SignIn ? 'Sign in' : 'Sign up'
                } with Google`}
              </Button>
            )}

            {authForm.social?.includes('facebook') && (
              <Button
                icon={<FacebookFilled />}
                size="large"
                block
                className="flex items-center justify-center my-5  font-medium text-[#2B3674]"
              >
                {`${
                  authForm.type === SignType.SignIn ? 'Sign in' : 'Sign up'
                }  with Facebook`}
              </Button>
            )}
          </div>
        )}
        {authForm.from === 'merchant' && (
          <>
            {authForm.type === SignType.SignIn ? (
              <p>
                Not registered yet?{' '}
                <Link to="/auth/register" className="text-primary">
                  Create an Account
                </Link>
              </p>
            ) : (
              <p className="text-center">
                Have an account?{' '}
                <Link to="/auth/login" className="text-red-500">
                  Sign In
                </Link>
              </p>
            )}
          </>
        )}
      </Form>
    </div>
  );
}

export default AuthPage;
