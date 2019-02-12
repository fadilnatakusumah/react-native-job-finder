import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import _ from "lodash";

// import component slides
import Slides from '../components/Slides';

const pages = [
    { text: 'Job Finder, find your job here', color: '#4b0556' },
    { text: 'Find your dream job here', color: '#6a0505' },
    { text: 'Just set your location, and choose your job', color: '#05126a' },
]

class WelcomeScreen extends Component {
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }
    render() {
        return (
            <Slides data={pages} onSlidesComplete={this.onSlidesComplete} />
        )
    }
}

const styles = StyleSheet.create({})

export default WelcomeScreen;

