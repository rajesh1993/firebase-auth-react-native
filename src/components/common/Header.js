// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// This is an example of a functional component
// i.e. it is a component made from a function and is for static data
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
		);
};

// Style the header
const styles = {
	textStyle: {
		fontSize: 20
	},
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	}
};
 
// Make the component available to other parts of app
// export default Header;
// We use the following as we are using an export * in the index.js in this folder
export { Header };
