import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBK-PfBJGCeoO6bYU86PIbFApDmGREACzs',
			authDomain: 'auth-8921a.firebaseapp.com',
			databaseURL: 'https://auth-8921a.firebaseio.com',
			projectId: 'auth-8921a',
			storageBucket: 'auth-8921a.appspot.com',
			messagingSenderId: '921023830468'
		});
		// console.log('Firebase credentials initalized.');

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out 
						</Button>
					</CardSection>
			);
			case false:
				return (<LoginForm />);
			default:
				return (
					<View style={{ paddingTop: 10 }}>
					<Spinner size='large' />
					</View>
					);
		}
	}

	render() {
		return (
			<View> 
				<Header headerText="Auth" />
				{ this.renderContent() }
			</View>
			);
	}
}

export default App;
