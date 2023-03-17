import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import {useState, useEffect} from 'react'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form/Form'

function App () {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAcces] = useState(false);
  

  const username = 'ernesto_vegaa@hotmail.com';
  const password = '1234567';
  const navigate = useNavigate();

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAcces(true);
      navigate('/home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  
  const onSearch = (character)=> {
    const URL_BASE="https://be-a-rym.up.railway.app/api";
    const API_KEY="da6b639bc8d6.40c7353e21d954d238e3";
    if (characters.find((char) => char.id === character)) {
      return alert("Personaje repetido");
    }
    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  };

  return (
    <div className='App' >
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
        </Routes>
    </div>
  )
}

export default App
