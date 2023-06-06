import './app.css';
import { SharedUi } from '@mastech/shared-ui';
import NxWelcome from './nx-welcome';
import { useAuth } from '@mastech/controllers';

export function App() {
  const { increment, count } = useAuth();
  return (
    <div className="text-red-300">
      Hello world
      <br />
      {count}
      <button onClick={() => increment()}>Increment</button>
      <SharedUi />
    </div>
  );
}

export default App;
