import React from 'react'
import {animales} from '../data/emojis'
import '../App.css'
const emojiStyle = {
    width:'60px'
  }

  const contentStyle = {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
  }



function Animales({readTime}) {
  function Animal(emojis){
    readTime(emojis)
  }
    return (
      <div style={contentStyle}>{
          animales.map((emoji) =>(
            <div key={emoji.id}>
            <a href="#" onClick={(e)=>{e.preventDefault();Animal(emoji.imagen)}}><img src={emoji.imagen} alt="" style={emojiStyle}/></a>
            </div>
          ))
          }</div>
    )
}

export default Animales
