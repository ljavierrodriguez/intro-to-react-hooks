import React, { useCallback, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const UsingCallback = () => {
    const [counter, setCounter] = useState(0)

    const increment = useCallback(() => {
        setCounter(counter + 1)
    }, [counter])

    const decrement = useCallback(() => {
        setCounter(counter - 1)
    }, [counter])

    return (
        <>
            <div>Using useCallback</div>
            <div className="btn-group">
                <button className="btn btn-primary btn-sm" onClick={decrement}><FaMinus /></button>
                <button className="btn btn-dark btn-sm">{counter}</button>
                <button className="btn btn-primary btn-sm" onClick={increment}><FaPlus /></button>
            </div>
        </>
    )
}

export default UsingCallback