import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-database'
import { isset } from '../helper'

const config = {
    apiKey: "AIzaSyAOo4HqLgVKUiycCefrzwgp2xOIpR-WTdA",
    authDomain: "arfiyanreactsanbercode.firebaseapp.com",
    databaseURL: "https://arfiyanreactsanbercode.firebaseio.com",
    projectId: "arfiyanreactsanbercode",
    storageBucket: "arfiyanreactsanbercode.appspot.com",
    messagingSenderId: "104025724734",
    appId: "1:104025724734:web:7889bfe956b8761ed2be6f",
    measurementId: "G-9T4FWZD3NB"
}

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
		this.rdb = app.database()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	check_login() {
		this.auth.onAuthStateChanged(function(user) {
			if (user) {
				return true
			} else {
				return false
			}
		});
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	getCurrentUid() {
		return this.auth.currentUser && this.auth.currentUser.uid
	}


	addQuote(quote) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`data_users/${this.auth.currentUser.uid}`).set({
			quote
		})
	}

	getUserData() {
		const data_users = this.db.collection("data_users").doc(this.auth.currentUser.uid)
		return data_users.get().then(function(doc) {
			if (!isset(doc.data())) {
				return doc.data();
			} else {
				return false
			}
		});
	}

	getPostingan() {
		return this.rdb.ref('postingan');
	}

	setPostingan(array) {
		let postDB = this.rdb.ref('postingan')
		return postDB.push().set(array)
	}

	async getAllPost() {
		await this.rdb.ref('postingan').limitToLast(2).on('value', function(snapshot) {
            var row = []
            snapshot.forEach((child) => {
                let data = child.val()
                row.push(data)
            })
            return row
        })
	}
}

export default new Firebase()