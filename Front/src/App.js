import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Error404 from './components/Error/Error'

function App() {

  const location = useLocation();
  const navigate = useNavigate()

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)

  const username = 'agustin.g.ojeda@gmail.com'
  const password = 'river912'

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')


    }
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (characters.find(element => element.id === data.id)) {
          return window.alert('Ese personaje ya está en pantalla')
        }
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  const randomSearch = () => {
    const min = Math.ceil(1);
    const max = Math.floor(826);
    const randomId = Math.floor(Math.random() * (max - min + 1) + min)
    fetch(`http://localhost:3001/rickandmorty/character/${randomId}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          const exist = characters.some(element => element.id === data.id)
          if (!exist) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        }
      })
  }

  return (
    <div className='App'>
      {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} randomSearch={randomSearch} />}      
      <Routes>
        <Route path='home' element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path='about' element={<About />}/>
        <Route path='detail/:detailId' element={<Detail />}/>
        <Route path='favorites' element={<Favorites />}/>
      </Routes>
    </div>
  )
}

export default App
