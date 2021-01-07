import React from 'react'

export const SignupController = props => {
    <div style={{
        margin: '1rem 0'
    }}>
        <h3 style={{
            fontFamily: 'monospace'
        }} />
        <pre
            style={{
                background: '#f6f8fa',
                fontSize: '.65rem',
                padding: '.5rem',
            }}>

            <strong>props</strong> = {JSON.stringify(props, null, 2)}

            <DisplayFormikState {...props} />
        </pre>

    </div>
}