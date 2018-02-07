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
import {getCorrectFontSizeForScreen} from '../../utils/mutiResolution';
import HeaderContainer from '../Header/HeaderContainer'


export default class SigninComponent extends Component{
	constructor(props) {
		super(props);
		this.state = {
			user: null,      
			email: 'test@test.com',
			password: '1111111',
			isSelected:false
		};
	}
	


	_onSubmit() {
		try {
			Keyboard.dismiss;
			this.props.navigation.goBack();	
			} catch (error) {
				
			}
	}

render(){
		return(
			<View style={styles.container}>
				<HeaderContainer title={'Second Screen'}/>
				<View style={{justifyContent:'center',flex:1}}>
				<SafeAreaView>
						<View style={styles.button_Container}>
							<TouchableOpacity style={styles.button_style} onPress={()=>this._onSubmit()}>
								<Text style={styles.text}>
				                  Previous
								</Text>
							</TouchableOpacity>
						</View>
				</SafeAreaView>
				</View>
			</View>
		);
	}
}


SigninComponent.propTypes = {
	navigation: PropTypes.object,
	onSigninClicked: PropTypes.func,
	message: PropTypes.string
};