import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from "../actions";

class DrawerScreen extends Component {
    onLogoutButton = () => {
        this.props.logout(() => {
            this.props.navigation.navigate('auth');
        })
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                {/* <View > */}
                <TouchableOpacity style={styles.menuStyle} onPress={this.onLogoutButton}>
                    <Icon name={'logout'} size={30} type={'material-community'} />
                    <Text style={{ fontSize: 18 }}> Logout </Text>
                </TouchableOpacity>
                {/* </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    menuStyle: {
        width: '100%',
        // height: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'gray'
    }
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(DrawerScreen)