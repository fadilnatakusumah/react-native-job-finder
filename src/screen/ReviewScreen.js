import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import _ from 'lodash';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Saved Jobs',
      headerRight: (
        <Button
          type={'clear'}
          icon={{ name: 'gear', type: 'font-awesome', color: '#4b0556' }}
          onPress={() => { navigation.navigate('setting') }}
        />
      )
    }
  }
  static defaultProps = {
    savedJobsList: []
  }
  viewDetail = (item) => {
    // console.log('item', item)
    this.props.navigation.navigate('detailJob', { item });
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

  renderSavedJobs = () => {
    const { savedJobsList } = this.props;
    console.log('savedJobsList', savedJobsList);
    if (savedJobsList.length > 0) {
      // return savedJobsList.map(job => {
      //   return <Text>{job.title}</Text>
      // })
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={savedJobsList}
          renderItem={this.renderListJobs}
        />
      )
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25 }}>There's no saved job</Text>
      </View>
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
