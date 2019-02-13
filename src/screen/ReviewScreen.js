import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux';
import _ from 'lodash';

class ReviewScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Saved Jobs'
  }
  static defaultProps = {
    savedJobsList: []
  }

  renderSavedJobs = () => {
    console.log('thisprops', this.props);
    const { savedJobsList } = this.props;
    if (savedJobsList.length > 0) {
      return savedJobsList.map(item => {
        return (
          <Text key={item.id}>{item.title}</Text>
        )
      })
    }
    return (
      <Text>There's no job is saved</Text>
    )
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.renderSavedJobs()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
})

const mapStateToProps = state => {
  console.log(state)
  return {
    savedJobsList: state.savedJobs
  }
}

export default connect(mapStateToProps)(ReviewScreen);
