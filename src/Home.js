// /**
//  * @author Tushar K Sarkar
//  * Jan 18, 2018
//  * Root Navigator For App
//  * 
//  */

import React, { Component, PropTypes } from 'react';
import {
  Animated,
  Button,
  Easing, 
  EasingStatic,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  Transitioner,
  SafeAreaView,
  StackRouter,
  createNavigationContainer,
  addNavigationHelpers,
  createNavigator,
} from 'react-navigation';

import {StackNavigator} from 'react-navigation';
import SigninContainer from './components/Signin/SigninContainer';
import LoginContainer from './components/Login/LoginContainer';
class HomeView extends Component {
  render() {
    const { navigation, router } = this.props;

    return (
      <Transitioner
        configureTransition={this._configureTransition}
        navigation={navigation}
        render={this._render}
      />
    );
  }

  _configureTransition(transitionProps, prevTransitionProps) {
    return {
      duration: 500,
     // easing: Easing.out(Easing.ease),
      //easing: Easing.cubic,
      //easing: Easing.bounce,
      easing: Easing.in(Easing.ease),
        // A timing function, default: Animated.timing.
        //timing: Animated.spring,
        // Some parameters relevant to Animated.spring
        //friction: 1,
        //tension: 0.2,

    };
  }

  _render = (transitionProps, prevTransitionProps) => {
    const scenes = transitionProps.scenes.map(scene =>
      this._renderScene(transitionProps, scene)
    );
    return <View style={{ flex: 1 }}>{scenes}</View>;
  };

  _renderScene = (transitionProps, scene) => {
    const { navigation, router } = this.props;
    const { routes } = navigation.state;
    const { position } = transitionProps;
    const { index } = scene;

    const animatedValue = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 1, 0],
    });

    const animation = {
      opacity: animatedValue,
      transform: [{ scale: animatedValue }],
    };

    // The prop `router` is populated when we call `createNavigator`.
    const Scene = router.getComponentForRouteName(scene.route.routeName);
    return (
      <Animated.View key={index} style={[styles.view, animation]}>
        <Scene
          navigation={addNavigationHelpers({
            ...navigation,
            state: routes[index],
          })}
        />
      </Animated.View>
    );
  };
}

const CustomRouter = StackRouter({
    LoginScreen: {screen:LoginContainer, navigationOptions:{header:null}},
	  SignupScreen: {screen:SigninContainer, navigationOptions:{header:null}}
});

const Home = createNavigationContainer(
  createNavigator(CustomRouter)(HomeView)
);

export default Home;

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
