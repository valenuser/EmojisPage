import React from 'react'
import {automoviles} from '../data/emojis'
const emojiStyle = {
    width:'60px'
  }

const contentStyle = {
  display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
  }



function hola(em){
  console.log(em)
}

function Automoviles({readTime}) {
  function Autos(emojis){
    readTime(emojis)
  }
    return (
      <div style={contentStyle}>{
          automoviles.map((emoji) =>(
            <div key={emoji.id}>
            <a href="#" onClick={(e)=>{e.preventDefault();Autos(emoji.imagen)}}><img src={emoji.imagen} alt="" style={emojiStyle}/></a>
            </div>
          ))
          }</div>
    )
}

export default Automoviles
