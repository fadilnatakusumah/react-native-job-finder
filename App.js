import React from 'react';
import { SplashScreen } from 'expo';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';
import * as firebase from 'firebase';

import { Provider } from 'react-redux';
import store from './src/store';

import WelcomeScreen from './src/screen/WelcomeScreen';
import AuthScreen from './src/screen/AuthScreen';
import SearchScreen from './src/screen/SearchScreen';
import DeckScreen from './src/screen/DeckScreen';
import SettingScreen from './src/screen/SettingScreen';
import ReviewScreen from './src/screen/ReviewScreen';

export default class App extends React.Component {
  componentWillMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    // firebase setup
    const config = {
      apiKey: "AIzaSyA4hlJzBW4W2Fu52xRok5-a1Beymajfj08",
      authDomain: "jobfinder-firebase.firebaseapp.com",
      databaseURL: "https://jobfinder-firebase.firebaseio.com",
      projectId: "jobfinder-firebase",
      storageBucket: "jobfinder-firebase.appspot.com",
      messagingSenderId: "44436384345"
    };
    firebase.initializeApp(config);
    // firebase

  }

  render() {
    const TabNavigation = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          Search: { screen: SearchScreen },
          Deck: { screen: DeckScreen },
          Review: {
            screen: createStackNavigator({
              review: { screen: ReviewScreen },
              setting: { screen: SettingScreen }
            }, {
                headerLayoutPreset: 'center'
              })
          }
        }, {
            // activeTintColor: '#F44336',
            // barStyle: {
            //   backgroundColor: '#4b0556'
            // },
            tabBarOptions: {
              tabStyle: {
                backgroundColor: '#4b0556'
              },
              activeTintColor: '#F44336',
              labelStyle: {
                fontSize: 13
              },
            },
            defaultNavigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Search') {
                  iconName = 'search';
                } else if (routeName === 'Deck') {
                  iconName = 'description';
                } else {
                  iconName = 'favorite';
                }

                return <Icon name={iconName} size={30} color={tintColor} />
              },
            })
          })
      }
    }, {
        initialRouteName: 'auth',
        tabBarOptions: {
          tabStyle: { backgroundColor: '#4b0556' },
        },
        // style: { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarVisible: false
        })
      })

    const AppContainer = createAppContainer(TabNavigation);


    return (
      <Provider store={store}>
          <AppContainer />
      </Provider>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 24,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
