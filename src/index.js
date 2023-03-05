import ReactDOM from 'react-dom'
import React from 'react'
import './styles/index.css'
import FirstComponent from './components/basicos/Primeiro.jsx'
import WitParameter from './components/basicos/ComParametro.jsx' 

const element = document.getElementById('root')

/* Hospedado em*/
/* http://localhost:3000/ */

ReactDOM.render(
    <div>
        <FirstComponent/>
        <WitParameter 
            title = "Livros e flores"
            text = "Teus olhos são meus livros. Que livro há aí melhor, Em que melhor se leia A página do amor? Flores me são teus lábios. Onde há mais bela flor, Em que melhor se beba O bálsamo do amor?"        
        />
    </div>,
    element
)