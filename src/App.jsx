import styled from 'styled-components'
import './App.css'
import  {MovieForm}  from './components/MovieForm'
import { MovieList } from './components/MovieList'


function App() {
  return (
  <>
    <MovieList/>
    <MovieForm/>
  </>
  )
}

export default App

// const StyledContainer = styled.div`
  
// `