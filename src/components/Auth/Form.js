import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements';

class Form extends Component {
  state = {
    isLoading: false
  };

  formHasErrors = () => {

    if (this.props.hasError) {
      return (
        this.props.errorMessage === ''
          ?
          (<View>
            <Text style={{ fontSize: 18, color: 'red', textAlign: 'center', marginBottom: 10 }}>
              Please correct your form
          </Text>
          </View>)
          :
          (<View>
            <Text style={{ fontSize: 18, color: 'red', textAlign: 'center', marginBottom: 10 }}>
              {this.props.errorMessage}
            </Text>
          </View>)

      );
    }
  }
  onSubmit = () => {
    // this.setState({ isLoading: true });
    this.props.onSubmit();
    // this.setState({ isLoading: false })
  }

  render() {
    return (
      <View
        style={{ justifyContent: 'center' }}
      >
        <View style={{ margin: 15 }}>
          <Text style={{
            // fontFamily: 'VAGRoundedStd-Black',
            fontSize: 35,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}
          >{
              this.props.authMode === 'login' ? 'Login' : 'Register'}
          </Text>
        </View>

        <Input
          value={this.props.email}
          onChangeText={value => this.props.onInputUpdate('email', value)}
          keyboardType={"email-address"}
          autoCorrect={false}
          placeholder='Insert Email'
          inputStyle={{ marginLeft: 20, color: 'white' }}
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 5,
            padding: 5,
            marginBottom: 10
          }}
          // inputStyle={{alignItems: 'center', justifyContent: 'center'}}
          leftIcon={
            <Icon
              type={'material'}
              name='email'
              size={24}
              color='white'
            />
          }
        />

        <Input
          value={this.props.password}
          onChangeText={value => this.props.onInputUpdate('password', value)}
          secureTextEntry
          autoCorrect={false}
          placeholder='Insert Password'
          inputStyle={{ marginLeft: 20, color: 'white' }}
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 5,
            padding: 5,
            marginBottom: 10
          }}
          // inputStyle={{alignItems: 'center', justifyContent: 'center'}}
          leftIcon={
            <Icon
              type={'material-community'}
              name='onepassword'
              size={24}
              color='white'
            />
          }
        />

        {this.props.authMode === 'register' ?
          <Input
            value={this.props.confirmPassword}
            onChangeText={value => this.props.onInputUpdate('confirmPassword', value)}
            secureTextEntry
            autoCorrect={false}
            placeholder='Insert Confirm Password'
            inputStyle={{ marginLeft: 20, color: 'white' }}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 5,
              padding: 5,
              marginBottom: 10
            }}
            // inputStyle={{alignItems: 'center', justifyContent: 'center'}}
            leftIcon={
              <Icon
                type={'material-community'}
                name='onepassword'
                size={24}
                color='white'
              />
            }
          />
          : null
        }

        {this.formHasErrors()}

        <View style={{ alignItems: 'center' }}>
          <Button
            title={this.props.authMode === 'login' ? 'Login' : 'Register'}
            containerStyle={{ width: 100 }}
            onPress={this.onSubmit}
          />
          {/* {
            this.state.isLoading ?
              <Button
                title={this.props.authMode === 'login' ? 'Login' : 'Register'}
                containerStyle={{ width: 100 }}
                onPress={this.onSubmit}
                loading
              />
              : 
          } */}
        </View>
      </View>
    )
  }
}

export default Form
