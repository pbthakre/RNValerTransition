import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';
import PropTypes from 'prop-types';
import LoginComponent from './LoginComponent';
import showToast from '../../utils/Toast';
import { signinAct } from '../../actions/signinAction';
import { startSpinner, stopSpinner} from '../../actions/commonAction';


class LoginContainer extends Component{

	componentWillReceiveProps(nextProps) {
		if (nextProps.token && nextProps.status) {
			showToast('Login successful. Add next action here.');
		} else if(!nextProps.status && nextProps.message !== ''){
			showToast(nextProps.message);
		}
	}
	

	render(){
		return(
			<LoginComponent {...this.props}/>
		);
	}
} 

function mapStateToProps(state){
	const { signinReducer } = state;
	return {
		token: signinReducer.token,
		status: signinReducer.status,
		message: signinReducer.message,
	};
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSigninClicked: (email, password) => {
			dispatch(signinAct(email, password));
		},		
		startSpin: () => {
			dispatch(startSpinner());
		},
		stopSpin: () => {
			dispatch(stopSpinner());
		}
	};
};

LoginContainer.propTypes = {
	navigation: PropTypes.object,
	token: PropTypes.string,
	status: PropTypes.bool,
	message: PropTypes.string,
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);