import ReactDOM from 'react-dom'
import React from 'react'

const element = document.getElementById('root')
const tag = <strong> Olá React! </strong> //tem que estar dentro de uma tag != de div

ReactDOM.render(
    <div>
       { tag }
    </div>,
    element
)