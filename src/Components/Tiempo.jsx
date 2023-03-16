import React from 'react'
import {tiempo} from '../data/emojis'

const emojiStyle = {
    width:'60px'
}

const contentStyle = {
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap'
}

function Tiempo({readTime}) {
  function Time(emojis){
      readTime(emojis)
  }
  return (
    <div style={contentStyle}>{
        tiempo.map((emoji) =>(
          <div key={emoji.id}>
          <a href="#" onClick={(e)=>{e.preventDefault();Time(emoji.imagen)}}><img src={emoji.imagen} alt="" style={emojiStyle}/></a>
          </div>
        ))
        }</div>
  )
}

export default Tiempo
