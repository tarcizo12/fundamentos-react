import React from 'react'

const FirstComponent = _ =>{
    const tag = <h1> Iniciando meu estudo com React ! </h1> //tem que estar dentro de uma tag != de div

    return (
        <div>
            { tag }
            <h2>E esse é o meu primeiro componente</h2>
        </div>
    )
}

export default FirstComponent
