import React, { useEffect } from 'react'

const Dashboard = () => {

    const isUser = () => {
        let user = localStorage.getItem('token')
        if (!user) window.location.href = '/'
    }

    function logOut() {
        localStorage.removeItem('token')
        window.location.href = '/'
    }

    useEffect(() => {
        isUser();
    }, [])

    return (
        <div>
            Hello World
            <br />
            <button onClick={logOut}>LogOut</button>
        </div>
    )
}

export default Dashboard