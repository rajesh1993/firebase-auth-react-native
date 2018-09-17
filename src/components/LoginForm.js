import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, FormInput, Spinner } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', signError: '', loading: false };

	onButtonPress() {
		// The firebase methods are a promise so we can use a catch for a failure
		const { email, password } = this.state;
		this.setState({ signError: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(this.onLoginSuccess.bind(this))
		.catch((signInError) => {
			// console.log('Sign in failed. Error: ', signInError.messsage);
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(this.onLoginFail.bind(this));
			/*.catch((signUpError) => {
				// console.log('Sign up failed. Error: ', signUpError.message);
				this.setState({ signError: 'Authentication Failed.' });
			});*/
		});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			signError: ''
		});
	}

	onLoginFail() {
		this.setState({
			signError: 'Authentication Failed.', loading: false
		});
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size='small' />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)} >
				Login
			</Button>
		);
	}

	render() {
		return ( 
			<Card>
				<CardSection>
					<FormInput 
						value={this.state.email} 
						onChangeText={text => this.setState({ email: text })} 
						label='Email'
						placeholder='abc@gmail.com'
					/>
				</CardSection>

				<CardSection>
					<FormInput
						secureTextEntry
						placeholder='password'
						value={this.state.password}
						onChangeText={text => this.setState({ password: text })}
						label='Password'
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{ this.state.signError }
				</Text>
				<CardSection>
					{this.renderButton()}					
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
