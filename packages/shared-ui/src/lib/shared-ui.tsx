import './shared-ui.css';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  return (
    <div>
      <h1 className="text-green-400">Welcome to SharedUi!</h1>
    </div>
  );
}

export default SharedUi;
