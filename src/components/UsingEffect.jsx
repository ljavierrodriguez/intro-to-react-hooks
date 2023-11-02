import React, { useEffect, useState } from 'react'
import withSearch from '../hooks/withSearch'

const UsingEffect = ({ search }) => {

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
                        users
                        .filter((user) => user?.name?.toLowerCase().includes(search?.toLowerCase()))
                        .map((user) => {
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

export default withSearch(UsingEffect)