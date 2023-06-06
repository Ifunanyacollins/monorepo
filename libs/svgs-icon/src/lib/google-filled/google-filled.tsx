import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const SvgGoogle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.3em"
    fill="none"
  >
    <g clipPath="url(#a)">
      <path
        fill="#4285F4"
        d="M19.787 10.225c0-.658-.058-1.283-.158-1.891h-9.417v3.758h5.392c-.242 1.233-.95 2.275-2 2.983v2.5h3.217c1.883-1.741 2.966-4.308 2.966-7.35Z"
      />
      <path
        fill="#34A853"
        d="M10.213 20c2.7 0 4.958-.9 6.608-2.425l-3.217-2.5c-.9.6-2.041.966-3.391.966-2.609 0-4.817-1.758-5.609-4.133H1.288v2.575C2.929 17.75 6.304 20 10.213 20Z"
      />
      <path
        fill="#FBBC05"
        d="M4.604 11.908A5.803 5.803 0 0 1 4.287 10c0-.667.117-1.308.317-1.908V5.517H1.287a9.884 9.884 0 0 0 0 8.966l3.317-2.575Z"
      />
      <path
        fill="#EA4335"
        d="M10.213 3.958c1.475 0 2.791.509 3.833 1.5l2.85-2.85C15.17.992 12.913 0 10.213 0 6.304 0 2.929 2.25 1.288 5.517l3.316 2.575c.792-2.375 3-4.134 5.609-4.134Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export function GoogleFilled(props: Partial<CustomIconComponentProps>) {
  return <Icon rev="" component={SvgGoogle} {...props} />;
}

export default GoogleFilled;
