import './App.css';
import Authors from './Authors';
import { useState } from 'react';
import Books from './Books'


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
      fetch === 'authors' ? (<Authors />) : (<Books />)
    }

  </div>
  )
}

export default App;
