import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function registerUser(e) {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
        const data = await response.json()
        if (data.user) {
            localStorage.setItem('token', data.user)
            alert('Registration successful')
            window.location.href = '/quote'
        } else {
            alert('Please check your username and password')
        }
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input type="submit" value="Register" />
            </form>
            <h2>Already a user?</h2>
            <button onClick={() => window.location.href = "/"}>Login</button>
        </div>
    )
}

export default Register