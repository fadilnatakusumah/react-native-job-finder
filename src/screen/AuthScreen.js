import React, { Component } from 'react'
import {
  Text, StyleSheet, View, StatusBar, Platform,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  AsyncStorage,
  ActivityIndicator
} from 'react-native'
import { Icon, Image } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

// import component
import Form from '../components/Auth/Form';

import imageLogo from '../../assets/logoApp2.png';
import validationForm from '../utils/form/validationRules';

class AuthScreen extends Component {
  state = {
    isLoading: true,
    errorMessage: '',
    authMode: 'login',
    hasError: false,
    form: {
      email: {
        value: '',
        valid: false,
        type: 'textInput',
        validationRules: {
          isEmail: true,
          isRequired: true
        }
      },
      password: {
        value: '',
        valid: false,
        type: 'textInput',
        validationRules: {
          isRequired: true,
          minLength: 6,
        }
      },
      confirmPassword: {
        value: '',
        valid: false,
        type: 'textInput',
        validationRules: {
          equalTo: 'password'
        }
      },
    }
  }

  // handling the input update and validation
  onInputUpdate = (type, value) => {
    this.setState({ hasError: false });

    // make copy so we don't directly mutate the state
    let formCopy = this.state.form;
    formCopy[type].value = value;

    // validate according to rules
    let rules = formCopy[type].validationRules;
    let valid = validationForm(value, rules, formCopy);
    console.log(type, valid);
    formCopy[type].valid = valid;
    this.setState({ form: formCopy });

  }

  async componentWillMount() {
    this.setState({ isLoading: true })
    await AsyncStorage.getItem('token').then(token => {
      this.props.navigation.navigate('main');
    }).catch(() => {
      console.log(`user hasn't login yet`)
    })
    this.setState({ isLoading: false })

    // if(AsyncStorage.getItem('token'))
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.token) {
      this.props.navigation.navigate('main');
    }

    if (nextProps.errorMessage) {
      return this.setState({ errorMessage: nextProps.errorMessage })
    }
    this.onAuthComplete(nextProps);
  }

  openLoginFacebookModal = () => {
    this.props.onFacebookLogin();
  }

  onSubmit = () => {
    this.setState({ hasError: false, errorMessage: '' });

    const { email, password, confirmPassword } = this.state.form;
    if (this.state.authMode === 'register') {
      if (email.valid && password.valid && confirmPassword.valid) {
        return this.props.onFirebaseRegister(email.value, password.value);
      }
    } else {
      if (email.valid && password.valid) {
        return this.props.onFirebaseLogin(email.value, password.value)
      }
    }

    this.setState({ hasError: true });
  }

  onAuthComplete = (props) => {
    if (props.token) {
      this.props.navigation.navigate('main');
    } else if (props.token === null) {
      console.log('Make toast message')
      ToastAndroid.showWithGravityAndOffset(
        'Facebook auth failed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        ToastAndroid.CENTER,
        50,
      )
    }
  }

  onSwitchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'register' ? 'login' : 'register'
      }
    });
  }


  renderAuthComponent = () => {
    return <Form
      authMode={this.state.authMode}
      hasError={this.state.hasError}
      onInputUpdate={this.onInputUpdate}
      email={this.state.form.email.value}
      password={this.state.form.password.value}
      confirmPassword={this.state.form.confirmPassword.value}
      onSubmit={this.onSubmit}
      errorMessage={this.state.errorMessage}
    />
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <ScrollView>
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={0} enabled>
            <View style={styles.containerStyle}>
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={imageLogo}
                  style={{ width: 120, height: 120 }}
                  resizeMode={'contain'}
                />
              </View>

              {this.renderAuthComponent()}

              <View>
                <TouchableOpacity
                  onPress={this.onSwitchAuthModeHandler}
                >
                  <Text style={{ fontSize: 20, color: 'orange', textAlign: 'center', margin: 8 }}>
                    {this.state.authMode === 'register' ? 'Login here' : 'Register here'}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: 'center', margin: 15 }}>
                <Text style={{ color: 'orange', textAlign: 'center', margin: 10 }}>Or you can login/register via facebook</Text>
                <TouchableOpacity
                  onPress={this.openLoginFacebookModal}
                >
                  <Icon
                    name={'facebook'}
                    type={'entypo'}
                    size={70}
                    color={'white'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      )
    } else {
      return (
        <View style={styles.containerStyle}>
          <ActivityIndicator />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    justifyContent: 'center',
    minHeight: Dimensions.get('window').height - StatusBar.currentHeight,
    // alignContent: 'center',
    backgroundColor: '#4b0556'
  }
})

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    errorMessage: state.auth.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);