import NavEmojis from './Components/NavChooseEmojis'
import './App.css'
import Animales from './Components/Animales'
import Automoviles from './Components/Automoviles'
import Tiempo from './Components/Tiempo'
import Expresiones from './Components/Expresiones'
import CardEmoji from './Components/CardEmoji'
import Love from './Components/Love'
import { useState } from 'react'


function App() {

  const contentApp = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  }
  
  const [timeEmoji,setTimeEmoji]= useState([])

  function readTime(emojis){
    setTimeEmoji([...timeEmoji,{
      id:timeEmoji.length,
      imagen:emojis}])
  }


  function deleteChooseEmoji(){
    setTimeEmoji([])
  }


  return (
    <div  style={contentApp}>
      <h1>EMOJIS SEARCH</h1>
      <NavEmojis />
      <CardEmoji timeEmoji={timeEmoji} deleteChooseEmoji={deleteChooseEmoji}/>
      <section id='animalesSection' style={contentApp}>
        <p>Animales</p>
        <Animales readTime={readTime}/>
      </section>
      <section id='automovilSection' style={contentApp}>
        <p>Automoviles</p>
        <Automoviles readTime={readTime}/>
      </section>
      <section id='tiempoSection' style={contentApp}>
        <p>Tiempo</p>
        <Tiempo readTime={readTime}/>
      </section>
      <section id='expresionSection' style={contentApp} >
      <p>Expresiones</p>
      <Expresiones readTime={readTime}/>
      </section>
      <section id='loveSection' style={contentApp} >
      <p>Love</p>
      <Love readTime={readTime}/>
      </section>
    </div>

  )
}

export default App



