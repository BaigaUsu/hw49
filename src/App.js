import './App.css';
import { Link } from 'react-router-dom'; // 3й пункт переходы между страницами
import { AutoClicker } from './AutoClicker'; // Дополнительное задание

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AutoClicker></AutoClicker> {/* дополнительное задание */}
        <Link to='new'>Go to new page</Link> {/*3й пункт переходы между страницами*/}
      </header>
    </div>
  );
}

export default App;
