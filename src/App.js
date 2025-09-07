import './App.css';
import { Article } from './components/Article/Article';
import { GoproList } from './components/GoproList/GoproList';

function App() {
  return (
   <>
   <h1>This is list of all GoPro cameras.</h1>
   <Article/>
   <GoproList/>
   </>
  );
}

export default App;
