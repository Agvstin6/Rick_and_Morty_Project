import { useState } from "react"
const Form = ()=>{
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        username:'',
        password:''
    })
    const handleOnChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }
    return(
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={userData.username} onChange={handleOnChange}/>

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleOnChange}/>
            <button>LOGIN</button>
        </form>
    )

}

export default Form