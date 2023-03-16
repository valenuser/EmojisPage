import React from 'react'
import {love} from '../data/emojis'
import '../App.css'
const emojiStyle = {
    width:'60px'
  }

  const contentStyle = {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
  }



function Love({readTime}) {
  function Animal(emojis){
    readTime(emojis)
  }
    return (
      <div style={contentStyle}>{
          love.map((emoji) =>(
            <div key={emoji.id}>
            <a href="#" onClick={(e)=>{e.preventDefault();Animal(emoji.imagen)}}><img src={emoji.imagen} alt="" style={emojiStyle}/></a>
            </div>
          ))
          }</div>
    )
}

export default Love
