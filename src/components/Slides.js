import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, StyleSheet, Animated, Easing } from 'react-native'
import { Button, Image } from 'react-native-elements';

// import logo and images
import logoApp from '../../assets/logoApp.png';
import workImage from '../../assets/images/work.png';
import mapImage from '../../assets/images/map.png';

// for styling per slide's width 
const SCREEN_WIDTH = Dimensions.get('window').width;


class Slides extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstSlide: new Animated.Value(0),
            firstSlideText: new Animated.Value(0),
        }
    }
    componentWillMount() {
        Animated.sequence([
            Animated.timing(this.state.firstSlide, {
                toValue: 1,
                duration: 1000,
                easing: Easing.cubic
            }),
            Animated.timing(this.state.firstSlideText, {
                toValue: 1,
                duration: 1000,
                easing: Easing.cubic
            })
        ]).start();

    }

    renderLastSlide = (index) => {
        if (index === this.props.data.length - 1) {
            return (
                <Button
                    title={`Let's do this!`}
                    color={'orange'}
                    type={'clear'}
                    onPress={this.props.onSlidesComplete}
                />
            )
        }
    }
    renderImageSlides = (index) => {
        if (index === 1) {
            return (
                <Image
                    source={workImage}
                    style={{ width: 240, height: 240, marginBottom: 15 }}
                    resizeMode={'contain'}
                />
            );
        } else if (index === 2) {
            return (
                <Image
                    source={mapImage}
                    style={{ width: 240, height: 240, marginBottom: 15 }}
                    resizeMode={'contain'}
                />
            );
        } else {
            return;
        }
    }

    renderSlides = () => {
        return this.props.data.map((message, index) => {
            if (index === 0) {
                return (
                    <Animated.View
                        style={[
                            styles.slideStyle,
                            {
                                backgroundColor: message.color,
                                paddingTop: this.state.firstSlide.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [100, 0]
                                }),
                                opacity: this.state.firstSlide.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1]
                                }),

                            },
                        ]}
                        key={message.text}
                    >
                        {/* <View> */}
                        <Image
                            source={logoApp}
                            style={{ width: 200, height: 250 }}
                            resizeMode={'contain'}
                        />
                        <Animated.View
                            style={[
                                {
                                    paddingTop: this.state.firstSlide.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [100, 50]
                                    }),
                                    opacity: this.state.firstSlide.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 1]
                                    }),
                                },
                            ]}
                        >
                            <Text style={{ color: 'orange', fontSize: 15 }}>Swipe to right --></Text>
                        </Animated.View>
                        {/* </View> */}
                    </Animated.View>
                );
            } else {
                return (
                    <View
                        style={[styles.slideStyle, { backgroundColor: message.color }]}
                        key={message.text}
                    >
                        {this.renderImageSlides(index)}
                        <Text style={styles.textStyle}>{message.text}</Text>
                        {this.renderLastSlide(index)}
                    </View>
                );
            }
        })

    }

    render() {
        return (
            <ScrollView
                pagingEnabled
                horizontal
                style={{ flex: 1 }}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center'
    }
})

export default Slides;