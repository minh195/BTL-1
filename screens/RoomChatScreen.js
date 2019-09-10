import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class RoomChatScreen extends Component {
    //RoomChatScreen Component
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{fontSize: 23}}> Room chat here!! </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    },
});