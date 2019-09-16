import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    Image,
    Platform,
    Dimensions,
    View,
    TouchableOpacity,
    Modal,
} from 'react-native'

let screen = Dimensions.get('window');
export default class PopUpLogOut extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    showModal = () => {
        this.setModalVisible(true)
    }
    _handleDisablePopUp = () => {
        this.setModalVisible(!this.state.modalVisible);
    }
    _handleLogOut = () => {
        this.props.logout()
    }

    render() {
        const {navigation} = this.props
        return (
            <Modal
                ref={"myModal1"}
                transparent={true}
                visible={this.state.modalVisible}>
                <View style={styles.popUpTransparent}>
                    <View style={styles.containerPopUp}>
                        <View style={styles.topImage}>
                            <Image source={require('../image/see-you.jpg')}
                                   style={styles.popUpImage}/>
                            <Text style={styles.textWelcom}>
                                Bạn có muốn đăng xuất?
                            </Text>
                            <TouchableOpacity
                                style={styles.buttonNext}
                                onPress={this._handleLogOut}>
                                <Text style={styles.textNext}>
                                    Đồng ý
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonSkip}
                                onPress={this._handleDisablePopUp}>
                                <Text style={styles.textSkip}>
                                    Hủy bỏ
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    containerPopUp: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Platform.OS === 'ios' ? 30 : 20,
        shadowRadius: 10,
        width: screen.width - 90,
        height: 500,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 150,
        marginBottom: 150,
        backgroundColor: 'white',
    },
    popUpTransparent: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    popUpImage: {
        width: 120,
        height: 120,
        borderRadius: 45
    },
    topImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonNext: {
        marginTop: 30,
        backgroundColor: '#F65973',
        width: screen.width - 140,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonSkip: {},
    textNext: {
        margin: 10,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    textSkip: {
        margin: 10,
        color: '#F65973',
        fontSize: 24,
        fontWeight: 'bold'
    },
    textWelcom: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 40
    },
    textIntro: {
        fontSize: 20,
        textAlign: 'center',
        padding: 15,
        marginTop: 40,
    }
})