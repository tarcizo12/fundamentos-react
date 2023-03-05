import React from 'react'

const FirstComponent = _ =>{
    const title = <h1> No Meio do Caminho </h1> //tem que estar dentro de uma tag != de div

    return (
        <div>
            { title }
            <p className='Poem'>
                No meio do caminho tinha uma pedra
                tinha uma pedra no meio do caminho
                tinha uma pedra
                no meio do caminho tinha uma pedra.

                Nunca me esquecerei desse acontecimento
                na vida de minhas retinas tão fatigadas.
                Nunca me esquecerei que no meio do caminho
                tinha uma pedra
                tinha uma pedra no meio do caminho
                no meio do caminho tinha uma pedra.</p>
        </div>
    )
}

export default FirstComponent
