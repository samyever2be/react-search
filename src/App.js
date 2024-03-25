import './App.css';
import './components/SearchBar.css';
import './components/SearchResultList.css';
import {useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchResultList from './components/SearchResultList';
function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
        <div className="search-bar-container">
           <SearchBar setResults={setResults}/>
           <SearchResultList results={results}/>
        </div>
    </div>
  );
}

export default App;
