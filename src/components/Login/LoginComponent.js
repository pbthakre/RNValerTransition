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
import HeaderContainer from '../Header/HeaderContainer'

export default class LoginComponent extends Component {
	constructor(props) {
		super(props);
	}


	_onSubmit() {
		Keyboard.dismiss;
		this.props.navigation.navigate("SignupScreen");
	}

	render(){
		return(
			<View style={styles.container}>
				<HeaderContainer title={'First Screen'}/>
					<View style={{justifyContent:'center',flex:1}}>
				<SafeAreaView>
						<View style={styles.button_Container}>
							<TouchableOpacity style={styles.button_style} onPress={()=>this._onSubmit()}>
								<Text style={styles.text}>
				                  Next
								</Text>
							</TouchableOpacity>
						</View>
				</SafeAreaView>
				</View>
			</View>
		);
	}
}


LoginComponent.propTypes = {
	navigation: PropTypes.object,
	onSigninClicked: PropTypes.func,
	message: PropTypes.string
};