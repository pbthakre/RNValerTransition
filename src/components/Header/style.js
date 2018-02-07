import {StyleSheet, Platform} from 'react-native';
import screen from '@utils/screen';
import {getCorrectFontSizeForScreen} from '../../utils/mutiResolution';
import scale from '../../utils/scale';
module.exports = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#273443',
		padding:15,
		justifyContent:'center'
	},
	button_Container:{
		height:getCorrectFontSizeForScreen(50),
	},
	button_style:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#ff0000',
	},
	text:{
		color:'white',
		fontSize:getCorrectFontSizeForScreen(18)
	}

});