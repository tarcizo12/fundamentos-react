import React from 'react'

const Fragment = (props) => {
    return(
        <React.Fragment>
            <h1>
                { props.title }
                <p className='Poem' >
                    { props.text}
                </p>
            </h1>
        </React.Fragment>
    )
}

export default Fragment