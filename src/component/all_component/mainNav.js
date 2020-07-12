import React, { Component } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import firebase from '../../auth/firebase'
import {toastr} from 'react-redux-toastr'

function Menu() {
    const CheckLogin = firebase.getCurrentUsername()
    if (CheckLogin) {
        return <MenuHasLogin />
    } else {
        return <MenuLogin />
    }
}

function MenuHasLogin() {
    const history = useHistory()
    return (
        <>
            <li>
                <a onClick={() => history.push('/dashboard')} className="btn btn-anim btn-color" rel="noopener noreferrer">Dashboard</a>
            </li>
            <li>
                <a onClick={logout} className="btn btn-anim btn-color" rel="noopener noreferrer">logout</a>
            </li>
        </>
    )

    async function logout() {
        await firebase.logout();
        toastr.success('Berhasil!', 'Berhasil Logout!')
        history.push('/login');
    }
}

function MenuLogin() {
    const history = useHistory()
    return (
        <>
            <li>
                <a onClick={() => history.push('/login')} className="btn btn-anim btn-color" rel="noopener noreferrer">Login</a>
            </li>
            <li>
                <a onClick={() => history.push('/register')} className="btn btn-anim btn-color" rel="noopener noreferrer">Register</a>
            </li>
        </>
    )
}

class mainNav extends Component {

    render() {
        return (
            <nav className="mainav">
                <nav className="wrapper">
                    <div className="logo" id="mainavlogo">
                        <img src={logo} alt="Arfiyan Design" />
                        <span>Arfiyan Design</span>
                    </div>
                    <div className="menu">
                        <div className="menu-toggle" id="mobile-menu">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <ul>
                            <Menu /> 
                        </ul>
                    </div>
                </nav>
            </nav>
        )
    }
}

export default withRouter(mainNav)