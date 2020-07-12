import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import login from './auth/login'
import register from './auth/register'
import beranda from './component/beranda'
import dashboard from './component/dashboard'
import firebase from './auth/firebase'
import './assets/css/preloader.css'

function Halaman() {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

    return firebaseInitialized !== false ? (
        <Router>
            <Switch>
                <Route exact path="/" component={beranda}></Route>
                <Route path="/login" component={login}></Route>
                <Route path="/dashboard" component={dashboard}></Route>
                <Route path="/register" component={register}></Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    ) : <Loading />;
}

function NotFound () {
    return (
        <React.Fragment>
            <h2>404 - Halaman Tidak Ditemukan</h2>
            <Route exact path="/" component={beranda}></Route>
        </React.Fragment>
    )
}

function Loading () {
    return (
		<div className="preloader">
			<svg viewBox="25 25 50 50">
				<circle cx="50" cy="50" r="20"></circle>
			</svg>
		</div>
    )
}
export default Halaman;