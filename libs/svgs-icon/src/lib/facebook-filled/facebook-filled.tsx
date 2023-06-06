import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const SvgFacebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1.5em"
    fill="none"
  >
    <path
      fill="#1877F2"
      d="M9.887 3.831c-1.488 0-1.918.66-1.918 2.116V8.36h3.969l-.398 3.9H7.97V24.1H3.209V12.26H0v-3.9h3.208V6.013C3.208 2.078 4.795 0 9.221 0c.928-.002 1.854.053 2.775.165v3.67l-2.109-.004Z"
    />
  </svg>
);

export function FacebookFilled(props: Partial<CustomIconComponentProps>) {
  return <Icon rev="" component={SvgFacebook} {...props} />;
}

export default FacebookFilled;
