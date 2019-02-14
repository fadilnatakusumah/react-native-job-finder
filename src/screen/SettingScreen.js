import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class SettingScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Setting'
  }

  clearAllSavedJobs = () => {
    this.props.clearSavedJobs();
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Button
          title={'Clear all saved jobs'}
          buttonStyle={{
            backgroundColor: '#4b0556'
          }}
          onPress={this.clearAllSavedJobs}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(SettingScreen)