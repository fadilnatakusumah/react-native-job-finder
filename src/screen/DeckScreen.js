import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Text, StyleSheet, View, FlatList,
} from 'react-native'
import { ListItem, Button } from 'react-native-elements';
import { DrawerActions} from "react-navigation";

class DeckScreen extends Component {
  static defaultProps = {
    jobs: []
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Job Results',
      headerLeft: (
        <Button
          icon={{name: 'menu', size: 30, type:'material-community', color: '#4b0556'}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          type={'clear'}
          
        />
      )
    }
  }

  viewDetail = (item) => {
    // console.log('item', item)
    this.props.navigation.navigate('DetailJob', { item });
  }

  keyExtractor = (item, index) => item.id;

  renderListJobs = ({ item }) => (
    <ListItem
      title={item.title}
      subtitle={item.type}
      leftAvatar={{
        source: { uri: item.company_logo }
      }}
      onPress={() => this.viewDetail(item)}
    />
  )

  render() {
    return (
      <View style={styles.containerStyle}>
        {
          this.props.jobs.length === 0
            ? (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }}>There's no job</Text>
              </View>
            )
            : <FlatList
              keyExtractor={this.keyExtractor}
              data={this.props.jobs}
              renderItem={this.renderListJobs}
            />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
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