import './App.css';
import Authors from './Authors';
import { useState } from 'react';


const App = ()=> {
  const [fetch, setFetch] = useState('authors')

  return(
    <div>
    <button onClick={()=>setFetch('authors')}>
      authors
    </button>
    <button onClick={()=>setFetch('books')}>
      books
    </button>
    {
      fetch === 'authors' ? (<Authors />) : (<h2>books</h2>)
    }

  </div>
  )
}

export default App;
