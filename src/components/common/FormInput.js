import React from 'react';
import { View, Text, TextInput } from 'react-native';

const FormInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { containerStyle, labelStyle, inputStyle } = styles;
	return (
		<View style={containerStyle} >
			<Text style={labelStyle}>{ label }</Text>
			<TextInput 
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				style={inputStyle} 
				autoCorrect={false}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

const styles = {
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		align: 'center'
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
		justifyContent: 'center'
	},
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	}
};

export { FormInput };
