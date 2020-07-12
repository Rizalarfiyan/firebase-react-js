import React, { useState } from 'react'
import {toastr} from 'react-redux-toastr'
import firebase from './firebase'
import AuthAnimation from './animation'
import logo from '../assets/img/logo.png'
import img_login from '../assets/img/login.png'

function Login(props) {
    const CheckLogin = firebase.getCurrentUsername()
	const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loader, setLoader] = useState('')
    const [button, setButton] = useState(false)
    
    if (CheckLogin) {
        toastr.success('Berhasil', 'Anda telah login!')
        props.history.replace('/dashboard');
    }

	return (
        <React.Fragment>
            <AuthAnimation />
            <div className="wrapper login">
                <div className="authwrap">
                    <div className="kanan">
                        <div onClick={() => props.history.push('/')} className="logo">
                            <img src={logo} alt="Arfiyan Design" />
                            <span className="text">Arfiyan Design</span>
                        </div>
                        <img src={img_login} alt="Login" />
                    </div>
                    <div className="kiri">
                        <form onSubmit={e => e.preventDefault() && false}>
                            <h1>Login</h1>
                            <div className="form-group">
                                <div className="icon">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="input-field">
                                    <input className="validate" id="email" name="email" required type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="icon">
                                    <i className="fa fa-lock"></i>
                                </div>
                                <div className="input-field">
                                    <input className="validate" id="password" name="password" required type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button className="btn btn-anim" type="submit" onClick={login} disabled={button}>Login</button>
                                <svg class={`spinner ${loader}`} width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="circle" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                                </svg>
                            </div>
                            <a href onClick={() => props.history.push('/register')} rel="noopener noreferrer"><i className="fa fa-users-plus"></i>Register</a>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
	)

	async function login() {
		try {
            setLoader('block')
            setButton(true)
            await firebase.login(email, password)
            toastr.success('Berhasil!', 'Berhasil Masuk!')
            setTimeout(() => {
                setLoader('')
                setButton(false)
                props.history.replace('/dashboard')
            }, 1000)
		} catch(error) {
            setLoader('')
            setButton(false)
			toastr.error('Gagal!', error.message)
		}
	}
}

export default Login;