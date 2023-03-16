import React from 'react'
import {expresiones} from '../data/emojis'
import '../App.css'
const emojiStyle = {
    width:'60px'
  }

  const contentStyle = {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
  }



function Expresiones({readTime}) {
    function expresion(emojis){
        readTime(emojis)
    }
    return (
      <div style={contentStyle}>{
          expresiones.map((emoji) =>(
            <div key={emoji.id}>
            <a href="#" onClick={(e)=>{e.preventDefault();expresion(emoji.imagen)}}><img src={emoji.imagen} alt="" style={emojiStyle}/></a>
            </div>
          ))
          }</div>
    )
}

export default Expresiones
