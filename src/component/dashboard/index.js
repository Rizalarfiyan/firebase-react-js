import React, { useEffect, useState } from 'react'
import firebase from '../../auth/firebase'
import {toastr} from 'react-redux-toastr'

function Dashboard(props) {
    const CheckLogin = firebase.getCurrentUsername()
    const [quote, setQuote] = useState('');

    useEffect(() => {
        async function getUserData() {
            return await firebase.getUserData().then(user_data => {
                let { quote } = '-';
                if (typeof Object.keys(user_data) !== 'undefined' && Object.keys(user_data).length > 0) {
                    quote = user_data.quote
                }
                setQuote(quote)
            });
        } 
        if (CheckLogin) {
            getUserData()
        }
    }, [CheckLogin]);

    if (!CheckLogin) {
        toastr.error('Gagal!', 'Anda harus login terlebih dahulu!')
        props.history.replace('/login');
        return null;
    }
    
    return (
        <div>
            <h1>Selamat Datang {firebase.getCurrentUsername()}</h1>
            <h1>ID: {firebase.getCurrentUid()}</h1>
            <h1>Quote: {quote}</h1>
            <div className="buttonGroup">
                <button className="btn btn-ln btn-anim" onClick={logout}>Logout</button>
                <button className="btn btn-ln btn-anim" onClick={beranda}>Beranda</button>
            </div>
        </div>
    )

    async function logout() {
        await firebase.logout();
        toastr.success('Berhasil!', 'Berhasil Logout!')
        props.history.push('/login');
    }

    function beranda() {
        props.history.push('/');
    }
}

export default Dashboard;