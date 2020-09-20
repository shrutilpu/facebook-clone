import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth,provider} from '../../Firebase';
import {useStateValue} from '../../StateProvider';
import {actionTypes} from '../../Reducer';
function Login() {

    const [{user},dispatch]=useStateValue();
    const signIn =()=>{
    auth.signInWithPopup(provider).then(
        result=>{
         dispatch({
            type:actionTypes.SET_USER,
            user:result.user, 
         })
        }
    ).catch(error=>alert(error.message));
    }
    return (
        <div className="Login">
            <div className="Login__Logo">
            <img src="https://www.seekpng.com/png/detail/280-2802791_moran-facebook-link-facebook-logo-black.png" 
            alt="Moran Facebook Link - Facebook Logo Black@seekpng.com"/>
            </div>
            <Button type="submit" onClick={signIn}>sign in</Button>
        </div>
    )
}

export default Login
