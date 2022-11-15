import React, { useState } from 'react'
import { auth ,  updateProfile } from './firebase'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css"
import { useDispatch } from 'react-redux';
import { login } from './feature/userSlice';

function Login() {

    const [ email , SetEmail] = useState("")
    const [ password , SetPassword] = useState("")
    const [ name , SetName] = useState("")
    const [ profilePic , SetProfilePic] = useState("")
    // const dispatch = useDispatch()
   
   
    const LoginToApp = (e) => {
        e.preventDefault()
        // auth
    }

    const register = () => {
        if (!name ){
            return alert("please enter a full name")
        }

       createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            userCredential.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            })
        // .then(()=> {
        //     dispatch(login({
        //         email:userCredential.user.email,
        //         uid:userCredential.user.uid,
        //         displayName:name,
        //         photoUrl:profilePic
        //     }))
        // })
        })
        // .catch((error) => alert(error.message))

    }

    return (
    <div className="login">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=''/>
        <form>
            <input value = {name}
                    onChange={e=> SetName(e.target.value)}
                    type="text" 
                    placeholder='Full name ( required when registering )'
            />
            
            <input 
                    value={profilePic}
                    onChange={e=> SetProfilePic(e.target.value)}
                    type="text"
                    placeholder='Profile picture URL ( optional )'
                />

            <input 
                value = {email} 
                onChange={e=> SetEmail(e.target.value)}
                type="email" 
                placeholder='Email'
            />

            <input 
                value = {password} 
                onChange={e=> SetPassword(e.target.value)} 
                type="password" 
                placeholder='Password'
            />

            <button type='submit' onClick={LoginToApp}>Sign In</button>
        </form>

        <p>Not a memeber ? <span className='login__regsiter' onClick={register}>Regsiter Now</span></p>
    </div>
  )
}

export default Login