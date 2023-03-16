import {emojis_animales,emojis_automoviles, emojis_expresiones, emojis_tiempo,emojis_love} from'./emojiList'

export let animales = []

for(let i = 0;i < emojis_animales.length;i++){
    animales[i] = {
        id:animales.length,
        imagen:'https://emojiapi.dev/api/v1/'+emojis_animales[i]+'.svg'
    } 
}

export let automoviles = []

for(let i = 0;i < emojis_automoviles.length;i++){
    automoviles[i] = {
        id:automoviles.length,
        imagen:'https://emojiapi.dev/api/v1/'+emojis_automoviles[i]+'.svg'
    } 
}

export let tiempo = []

for(let i = 0;i < emojis_tiempo.length;i++){
    tiempo[i] = {
        id:tiempo.length,
        imagen:'https://emojiapi.dev/api/v1/'+emojis_tiempo[i]+'.svg'
    } 
}

export let expresiones = []

for(let i = 0;i < emojis_expresiones.length;i++){
    expresiones[i] = {
        id:expresiones.length,
        imagen:'https://emojiapi.dev/api/v1/'+emojis_expresiones[i]+'.svg'
    } 
}

export let love = []

for(let i = 0;i < emojis_love.length;i++){
    love[i] = {
        id:love.length,
        imagen:'https://emojiapi.dev/api/v1/'+emojis_love[i]+'.svg'
    } 
}

