import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';

import {
  Text, StyleSheet, View, FlatList, Platform,
  StatusBar
} from 'react-native'
import { ListItem } from 'react-native-elements';

class DeckScreen extends Component {
  static defaultProps = {
    jobs: null
  }

  keyExtractor = (item, index) => item.id;

  renderListJobs = ({ item }) => (
    <ListItem
      title={item.title}
      subtitle={item.type}
      leftAvatar={{
        source: { uri: item.company_logo }
      }}
      onPress={() => alert(item.id)}
    />
  )

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.jobs}
          renderItem={this.renderListJobs}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})

const mapStateToProps = state => {
  return {
    jobs: state.jobs.jobs
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps)(DeckScreen);