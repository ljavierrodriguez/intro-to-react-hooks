import React, { useReducer } from 'react'

const initialState = {
    text: "",
    isUpperCase: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            }
        case "UPPERCASE":
            return {
                ...state,
                text: state.text.toUpperCase()
            }
        case "LOWERCASE":
            return {
                ...state,
                text: state.text.toLowerCase()
            }
    }
}

const UsingReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = event => {
        dispatch({ type: 'SET_TEXT', text: event.target.value })
    }

    const handleToggleUpperCase = (event) => {
        dispatch({ type: 'UPPERCASE', text: event.target.value })
    }

    const handleToggleLowerCase = (event) => {
        dispatch({ type: 'LOWERCASE', text: event.target.value })
    }

    return (
        <>
            <div>Using useReducer</div>
            <div className='input-group w-50 my-2'>
                <input type="text" value={state.text} onChange={handleChange} className='form-control' />
                <div className="btn-group">
                    <button className='btn btn-primary btn-sm' onClick={handleToggleUpperCase}>aA</button>
                    <button className='btn btn-primary btn-sm' onClick={handleToggleLowerCase}>Aa</button>
                </div>
            </div>
            <p>{state.text}</p>
        </>
    )
}

export default UsingReducer