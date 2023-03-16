import React from 'react'
import '../App.css'


const styleEmojiCard = {
    width:'40px'
}

const contentCard = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    marginTop:'10px'
}

const cardImage = {
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    width:'300px',
    marginRight:'80px'
}

const cardGeneral = {
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center'
}

const buttonStyle = {
    width:'100px',
    background:'red',
    border:'none',
    borderRadius:'10px'
}

function CardEmoji({timeEmoji,deleteChooseEmoji}) {
    if(timeEmoji.length == 0){
        return(
            <p>Elige el emoji que deseas</p>
        )
    }else{
        return(
            <div style={cardGeneral}>
                <div style={contentCard}>{
                    timeEmoji.map((time)=>(
                        <div key={time.id} style={cardImage}>
                            <img src={time.imagen} alt="" style={styleEmojiCard}/>
                            <p>{time.imagen}</p>
                        </div>
                    ))
                }
                </div>
                <button style={buttonStyle} onClick={()=>deleteChooseEmoji()}>Delete</button>
            </div>
        )
    }
}

export default CardEmoji
