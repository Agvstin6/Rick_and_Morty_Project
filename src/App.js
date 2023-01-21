import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
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
    fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
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
      <Nav onSearch={onSearch} randomSearch={randomSearch} />
      <Routes>
        <Route path='home' element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path='about' element={<About />}/>
        <Route path='detail/:detailId' element={<Detail />}/>
      </Routes>
    </div>
  )
}

export default App
