import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// We pass the button press function via props so that the Button componenet is reusable
const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;
	return (
		// Button component from react native docs => TouchableOpacity
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children} 
			</Text>
		</TouchableOpacity>
		);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1, //Expand to fill as much content as possible
		alignSelf: 'stretch', //Stretch to fill limits
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

// export default Button;
export { Button };
