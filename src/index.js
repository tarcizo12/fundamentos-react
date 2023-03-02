import ReactDOM from 'react-dom'
import React from 'react'
import './styles/index.css'
import FirstComponent from './components/basicos/Primeiro.js'

const element = document.getElementById('root')
const tag = <strong> Iniciando meu estudo com React ! </strong> //tem que estar dentro de uma tag != de div

ReactDOM.render(
    <div>
        { tag }
        <br/>
        <FirstComponent></FirstComponent>
    </div>,
    element
)