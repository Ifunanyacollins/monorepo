import './app.css';
import { SharedUi } from '@mastech/shared-ui';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className="text-red-300">
      Hello world
      <SharedUi />
    </div>
  );
}

export default App;
