import {StyleSheet, Platform} from 'react-native';
import screen from '@utils/screen';
import {getCorrectFontSizeForScreen} from '../../utils/mutiResolution';
import scale from '../../utils/scale';
module.exports = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1EBEA5',

	},
	button_Container:{
		height:getCorrectFontSizeForScreen(50),
		margin:20
	},
	
	button_style:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#551a8b',
		borderRadius:15
	},
	text:{
		color:'white',
		fontSize:getCorrectFontSizeForScreen(18),
	}

});