import React from 'react'
import UsingReducer from './components/UsingReducer'
import UsingCallback from './components/UsingCallback'
import UsingRef from './components/UsingRef'
import UsingState from './components/UsingState'
import UsingContext from './components/UsingContext'
import UsingEffect from './components/UsingEffect'

const App = () => {
    return (
        <>
            <h2>APP</h2>
            <UsingReducer />
            <hr />
            <UsingCallback />
            <hr />
            <UsingState />
            <hr />
            <UsingRef />
            <hr />
            <UsingContext />
            <hr />
            <UsingEffect />
            <hr />
            {/* useMemo */}
        </>
    )
}

export default App