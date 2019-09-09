import React, {Component} from 'react'
import {
    Text,
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Keyboard,
    ImageBackground,
} from 'react-native'
import {MainScreen} from "../screenNames";

export default class ChatScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                key: '1', id: 1, label: 'I am ok thanks for asking and you? ' +
                    'It is been a long time since we have seen each other.'
            }],
            text: ''
        }
    }

    addItem(value) {
        let {items} = this.state;
        // Give convert our item to an object then push to our current items (array)
        let item = {
            key: 'aKey',// give it a unique key
            id: items[items.length - 1].id++, // get the last id of our items and increment it(i.e +1)
            label: value
        }

        items.push(item); // add our new item
        // set our items to the state to update it
        Keyboard.dismiss()
        this.submitAndClear()
    }

    submitAndClear = () => {
        this.setState({
            text: ''
        })
    }
    renderItem = ({item, index}) => {
        let {id1, key1, label} = item;
        return (
            <View style={styles.item}>
                <View>
                    <Text style={styles.textMessage}>
                        {label}
                        <Text style={styles.timeMessage}>{"\n"}12:05 PM</Text><Text style={styles.seenIcon}> ✓</Text>
                    </Text>
                </View>
                <Image
                    style={styles.avatarUser}
                    source={require('../image/myAvatar.png')}
                />
            </View>
        )
    }


    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        const {navigation} = this.props
        console.disableYellowBox = true;
        let {items, item, item1} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground source={require('../image/backgroud-headerbar.png')}
                                     style={{width: '100%', height: 60}}
                    >
                        <View style={styles.elementHeader}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate(MainScreen);
                            }}>
                                <Image source={require('../image/go-back.png')}
                                       style={{width: 20, height: 20}}/>
                            </TouchableOpacity>
                            <View style={styles.userName}>
                                <Text style={styles.textName}>
                                    Johny
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.content}>
                    <Text style={styles.dateMassage}>TODAY</Text>
                    <FlatList
                        data={items}
                        keyExtractor={(item, index) => item.key}
                        renderItem={this.renderItem}
                        ref={ref => this.flatList = ref}
                        onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
                        onLayout={() => this.flatList.scrollToEnd({animated: true})}
                    />
                </View>
                <View style={styles.footer}>
                    <View style={styles.reactIcon}>
                        < TouchableOpacity>
                            <Image style={{width: 20, height: 20, margin: 5}}
                                   source={require('../image/add-icon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{width: 25, height: 25, margin: 5}}
                                   source={require('../image/smile-icon.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'Type a massage...'}
                            onChangeText={(text) => this.setState({text, item: text})}
                            value={this.state.text}
                            onSubmitEditing={() => this.addItem(item)}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => this.addItem(item)}>
                            <Image source={require('../image/send-icon.png')}
                                   style={styles.send_icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5F7FB'
    },
    elementHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    dateMassage: {
        textAlign: 'center',
        marginTop: 10
    },
    userName: {},
    textName: {
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
        fontSize: 20,
        padding: 15,
    }
    ,
    content: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-end'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'white'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderRadius: 10,
        justifyContent: 'flex-end'
    }, avatarUser: {
        width: 50,
        height: 50,
        overflow: 'hidden',
        borderRadius: 40,
    }, textMessage: {
        margin: 2,
        padding: 10,
        color: 'white',
        backgroundColor: '#37B8B3',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        overflow: 'hidden',
        fontSize: 16,
        width: 200
    }, seenIcon: {},
    timeMessage: {
        fontSize: 14,
        color: '#D7D7D7'
    },
    reactIcon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }, textInput: {
        height: 50,
        width: 200
    },
    send_icon: {
        width: 100,
        height: 60,
    },
})