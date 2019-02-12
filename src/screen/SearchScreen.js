import React, { Component } from 'react';
import { MapView, Location, Permissions } from 'expo';
import {
  Text, StyleSheet, View, StatusBar, Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { Input, Button, Icon, SearchBar } from 'react-native-elements';

class SearchScreen extends Component {
  static defaultProps = {
    propsA: 'INI DEFAULT PROPS'
  }

  state = {
    searchQuery: '',
    location: null,
    region: {
      latitude: -7.718407,
      longitude: 110.407111,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    }
  }

  // maybe for future updates
  // locateMeButton = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== 'granted') {
  //     this.setState({
  //       errorMessage: 'Permission to access location was denied',
  //     });
  //   }
  //   let isGpsActive = await Location.hasServicesEnabledAsync()

  //   if (!isGpsActive) {
  //     return alert('Please activate your GPS')
  //   }
  //   let location = await Location.getCurrentPositionAsync({
  //     accuracy: Location.Accuracy.Balanced,
  //   });
  //   console.log(location)
  //   // this.setState({ location });
  // }

  searchJobHandler = () => {
    const { searchQuery, region } = this.state;
    this.props.searchJob(searchQuery, region, ()=>{
      this.props.navigation.navigate('Deck')
    });
  }

  onRegionChangeComplete = (newRegion) => {
    this.setState({ region: newRegion })
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={{ flex: 1 }}>
          {/* Bar search */}
          <MapView
            initialRegion={this.state.region}
            style={{
              width: '100%',
              height: '100%'
            }}
            onRegionChangeComplete={this.onRegionChangeComplete}
          />
          <SearchBar
            placeholder={'enter job description'}
            containerStyle={{ position: 'absolute', top: 5, left: 5, right: 5 }}
            value={this.state.searchQuery}
            onChangeText={(val) => {
              this.setState({ searchQuery: val })
            }}
            lightTheme
            inputStyle={{ color: 'black' }}
            autoCorrect={false}
          />
          <Button
            title={'Search job'}
            onPress={this.searchJobHandler}
            buttonStyle={{ backgroundColor: '#0c8371' }}
            containerStyle={{ position: 'absolute', bottom: 5, left: 5, right: 5 }}
            titleStyle={{ color: 'white', marginLeft: 15 }}
            raised
            icon={
              <Icon
                type={'antdesign'}
                name="search1"
                size={15}
                color="white"
              />
            }
          />
        </View>
        {/* <View> */}
        {/* </View> */}
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


const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
};

export default connect(null, mapDispatchToProps)(SearchScreen);
