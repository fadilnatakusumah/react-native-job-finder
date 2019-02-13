import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Linking, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Card, Button, Image } from 'react-native-elements';

class DetailScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Detail Job',
    }
    state = {
        isSaved: false
    }

    onSaveHandler = (item) => {
        // alert(item);
        this.props.saveJob(item, (message) => {
            alert(message)
            ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                ToastAndroid.CENTER,
                150,
            )
        });
    }

    renderCardDetail = () => {
        const { item } = this.props.navigation.state.params;
        return (
            // <ScrollView>
            <Card
                title={item.title}
                containerStyle={{ height: '100%' }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                    <Image
                        source={{ uri: item.company_logo }}
                        style={{ width: 100, height: 100 }}
                        resizeMode={'center'}
                    />
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                            {item.company}
                        </Text>
                        <Text>
                            Created: {item.created_at}
                        </Text>
                        <Text>
                            Location: {item.location}
                        </Text>
                        <Text>
                            type: {item.type}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 10, justifyContent: 'center' }}>
                    <Button
                        title={'Apply'}
                        containerStyle={{ marginRight: 10 }}
                        onPress={() => {
                            let url = item.how_to_apply.split(/href="(.*?)"/)[1];
                            Linking.openURL(url);
                        }}
                    />
                    <Button
                        disabled={this.state.isSaved ? true : null}
                        buttonStyle={{ backgroundColor: 'orange' }}
                        title={'Save'}
                        onPress={() => this.onSaveHandler(item)}
                    />
                </View>
                {/* <WebView
                    style={{ width: '100%' }}
                    ref={(ref) => { this.webview = ref }}
                    source={{ html: item.description }}
                    startInLoadingState
                    scrollEnabled
                    onNavigationStateChange={() => {
                        this.webview.stopLoading();
                    }}
                /> */}
                <ScrollView>
                    <Text>{item.description.replace(/\<[\s\S]*?\>/g, '')}</Text>
                </ScrollView>
            </Card>
        );
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderCardDetail()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center'
    }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(DetailScreen);