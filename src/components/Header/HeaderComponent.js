import React, { Component } from 'react';
import {
	View,
	TextInput,
	ScrollView,
	Keyboard,
	Alert,
	NetInfo,
	Platform,
	NativeModules,
	SafeAreaView,
	TouchableOpacity,
	Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import Orientation from 'react-native-orientation';
import showToast from '../../utils/Toast';
import Validators from '../../utils/Validator';
import { getCorrectFontSizeForScreen } from '../../utils/mutiResolution';

export default class HeaderComponent extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<View style={{alignSelf:'stretch',alignItems:'center',padding:20,height:getCorrectFontSizeForScreen(56),backgroundColor:'#3B5998'}}>
			<Text style={styles.text}>{this.props.title}</Text>
			</View>
		);
	}
}


HeaderComponent.propTypes = {
	title: PropTypes.string
};