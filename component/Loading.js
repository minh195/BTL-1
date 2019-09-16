import React, {Component} from 'react'
import {
    View,
    ActivityIndicator,
    Image,
    StyleSheet
} from 'react-native'
export default class Loading extends Component {
    render() {
        return (
            <View style={styles.item1}>
                <Image
                    style={styles.avatarUser1}
                    source={require('../image/avatar-user.png')}/>
                <View style={styles.textMessage1}>
                    <ActivityIndicator animating={true}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    avatarUser1: {
        width: 50,
        height: 50,
        overflow: 'hidden',
        borderRadius: 40,
    },
    textMessage1: {
        margin: 2,
        padding: 10,
        color: 'black',
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        fontSize: 16,
        width: 200
    },
    timeMessage1: {
        fontSize: 14,
        color: '#D7D7D7'
    },
    item1: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderRadius: 10,
        justifyContent: 'flex-start'
    },
})