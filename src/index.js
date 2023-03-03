import ReactDOM from 'react-dom'
import React from 'react'
import './styles/index.css'
import FirstComponent from './components/basicos/Primeiro.js'

const element = document.getElementById('root')


ReactDOM.render(
    <div>
        <FirstComponent></FirstComponent>
    </div>,
    element
)