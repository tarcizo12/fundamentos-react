import React from 'react'

const ComParametro = (props) =>{
    //Os parametros de props podem ser usados para comparação
    //Ex: const status = props.nota >= ? 'Aprovado' : 'Recuperacao'
    return (
        <div>
            <h1>
                { props.title }
            </h1>
            <p className='Poem'>
                { props.text }
            </p> 
        </div>
    )
}


export default ComParametro