import React from 'react'
import '../App.css'


function NavChooseEmojis() {
    const contentStyle= {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',    
        border:'1px solid',
        borderRadius:'10px',
        background:'lightyellow',
        height:'28px',
        width:'1200px'
    }

    const contentEmoji = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        cursor:'pointer'
    }

    const emojisStyle = {
        display:'flex',
        width:'25px',
        marginLeft:'10px'
    }
    let showSectionExpresion = true
    let showSectionAnimal = true
    let showSectionTime = true
    let showSectionAutomovil = true
    let showSectionLove = true
    function showNav(e){
        if(showSectionExpresion == true & e == 'expresion'){
            console.log(e)
            document.getElementById('expresionSection').style.display='flex' 
            document.getElementById('animalesSection').style.display='none'   
            document.getElementById('automovilSection').style.display='none'   
            document.getElementById('tiempoSection').style.display='none'
            document.getElementById('loveSection').style.display='none'
          
            showSectionExpresion=false
        }else if(showSectionExpresion == false & e == 'expresion'){
            document.getElementById('animalesSection').style.display='flex'   
            document.getElementById('automovilSection').style.display='flex'   
            document.getElementById('tiempoSection').style.display='flex' 
            document.getElementById('loveSection').style.display='flex'
            showSectionExpresion=true           
        }

        if(showSectionAnimal == true & e == 'animales'){
            console.log(e)
            document.getElementById('animalesSection').style.display='flex' 
            document.getElementById('expresionSection').style.display='none'   
            document.getElementById('automovilSection').style.display='none'   
            document.getElementById('tiempoSection').style.display='none'
            document.getElementById('loveSection').style.display='none'
          
            showSectionAnimal=false
        }else if(showSectionAnimal == false & e == 'animales'){
            document.getElementById('expresionSection').style.display='flex'   
            document.getElementById('automovilSection').style.display='flex'   
            document.getElementById('tiempoSection').style.display='flex' 
            document.getElementById('loveSection').style.display='flex'
            showSectionAnimal=true           
        }

        if(showSectionTime == true & e == 'vehiculos'){
            console.log(e)
            document.getElementById('automovilSection').style.display='flex' 
            document.getElementById('animalesSection').style.display='none'   
            document.getElementById('expresionSection').style.display='none'   
            document.getElementById('tiempoSection').style.display='none'
            document.getElementById('loveSection').style.display='none'
          
            showSectionTime=false
        }else if(showSectionTime == false & e == 'vehiculos'){
            document.getElementById('animalesSection').style.display='flex'   
            document.getElementById('expresionSection').style.display='flex'   
            document.getElementById('tiempoSection').style.display='flex'
            document.getElementById('loveSection').style.display='flex' 
            showSectionTime=true           
        }

        if(showSectionAutomovil == true & e == 'tiempo'){
            console.log(e)
            document.getElementById('tiempoSection').style.display='flex'   
            document.getElementById('animalesSection').style.display='none'   
            document.getElementById('automovilSection').style.display='none'   
            document.getElementById('expresionSection').style.display='none'
            document.getElementById('loveSection').style.display='none'
          
            showSectionAutomovil=false
        }else if(showSectionAutomovil == false & e == 'tiempo'){
            document.getElementById('animalesSection').style.display='flex'   
            document.getElementById('automovilSection').style.display='flex'   
            document.getElementById('expresionSection').style.display='flex' 
            document.getElementById('loveSection').style.display='flex'
            showSectionAutomovil=true           
        }
        if(showSectionLove == true & e == 'love'){
            console.log(e)
            document.getElementById('loveSection').style.display='flex'
            document.getElementById('tiempoSection').style.display='none'   
            document.getElementById('animalesSection').style.display='none'   
            document.getElementById('automovilSection').style.display='none'   
            document.getElementById('expresionSection').style.display='none'
          
            showSectionLove=false
        }else if(showSectionLove == false & e == 'love'){
            document.getElementById('animalesSection').style.display='flex'   
            document.getElementById('automovilSection').style.display='flex'   
            document.getElementById('expresionSection').style.display='flex' 
            document.getElementById('tiempoSection').style.display='flex' 
            showSectionLove=true           
        }


     
    }
    return (
        <div style={contentStyle}>
            <div style={contentEmoji} onClick={(e)=>{e.preventDefault(); showNav('expresion')}}>
                <p>Expresiones</p>
                <img src="https://emojiapi.dev/api/v1/grinning_face.svg" alt="" style={emojisStyle}/>
            </div>
            <div style={contentEmoji} onClick={(e)=>{e.preventDefault(); showNav('animales')}}>
                <p>Animales</p>
                <img src="https://emojiapi.dev/api/v1/monkey_face.svg" alt="" style={emojisStyle}/>
            </div>
            <div style={contentEmoji} onClick={(e)=>{e.preventDefault(); showNav('vehiculos')}}>
                <p>Vehiculos</p>
                <img src="https://emojiapi.dev/api/v1/sport_utility_vehicle.svg" alt="" style={emojisStyle}/>
            </div>
            <div style={contentEmoji} onClick={(e)=>{e.preventDefault(); showNav('tiempo')}}>
                <p>Tiempo</p>
                <img src="https://emojiapi.dev/api/v1/two_oclock.svg" alt="" style={emojisStyle}/>
            </div>
            <div style={contentEmoji} onClick={(e)=>{e.preventDefault(); showNav('love')}}>
                <p>Love</p>
                <img src="https://emojiapi.dev/api/v1/red_heart.svg" alt="" style={emojisStyle}/>
            </div>
        </div>
  )
}

export default NavChooseEmojis
