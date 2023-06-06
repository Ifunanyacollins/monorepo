import { useAuth } from '@mastech/controllers';
import './shared-ui.css';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  const { count } = useAuth();
  return (
    <div>
      <h1 className="text-green-400">Welcome to SharedUi! {count}</h1>
    </div>
  );
}

export default SharedUi;
