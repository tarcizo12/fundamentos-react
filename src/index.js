import ReactDOM from 'react-dom'
import React from 'react'
import './styles/index.css'
import FirstComponent from './components/basicos/First.jsx'
import WitParameter from './components/basicos/WithParameter.jsx' 
import Fragment from './components/basicos/Fragment'


const element = document.getElementById('root')

/* Hospedado em*/
/* http://localhost:3000/ */

ReactDOM.render(
    <div>
        <FirstComponent/>
        <WitParameter 
            title="Livros e flores"
            text="Teus olhos são meus livros. Que livro há aí melhor, Em que melhor se leia A página do amor? Flores me são teus lábios. Onde há mais bela flor, Em que melhor se beba O bálsamo do amor?"        
        />
        <Fragment
            title="Albert Einsten"
            text="
                Pode ser que um dia nos afastemos...
                Mas, se formos amigos de verdade,
                A amizade nos reaproximará."
        
        />
    </div>,
    element
)