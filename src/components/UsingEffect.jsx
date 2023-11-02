import React, { useEffect, useState } from 'react'

const UsingEffect = () => {

    const [users, setUsers] = useState(null)

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    useEffect(() => {

        getUsers()

    }, [])

    return (
        <>
            <div>Using useEffect</div>
            <ul>

                {
                    !!users ?
                        users.map((user) => {
                            return <li key={user.id}>{user.name}</li>
                        })
                        : (
                            <li>{"Loading"}</li>
                        )
                }
            </ul>
        </>
    )
}

export default UsingEffect