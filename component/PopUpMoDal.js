import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Platform,
    Dimensions,
    View,
    TouchableOpacity,
    Modal
} from 'react-native';

let screen = Dimensions.get('window');
export default class PopUpModal extends Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <Modal
                ref={"myModal"}
                transparent={false}
                visible={this.state.modalVisible}
                presentationStyle={"formSheet"}>
                <View
                    style={styles.containerPopUp}>
                    <View style={styles.topImage}>
                        <View style={styles.popUpImageBack1}>
                            <View style={styles.popUpImageBack2}>
                                <Image source={require('../image/popUp.png')}
                                       style={styles.popUpImage}/>
                            </View>
                        </View>
                        <Text style={styles.textWelcom}>
                            Welcom to PayLah!
                        </Text>
                        <Text style={styles.textIntro}>
                            Here's a quick overview to get you started
                        </Text>
                        <TouchableOpacity
                            style={styles.buttonNext}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text style={styles.textNext}>
                                LET'S GO
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonSkip}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text style={styles.textSkip}>
                                SKIP
                            </Text>
                        </TouchableOpacity>
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
        height: 450,
    },
    popUpImage: {
        width: 120,
        height: 120
    },
    topImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    popUpImageBack1: {
        backgroundColor: '#F8F8F7',
        width: 120,
        height: 120,
        borderRadius: 45,
    },
    popUpImageBack2: {
        backgroundColor: '#EBEAEA',
        width: 80,
        height: 80,
        borderRadius: 45,
        alignItems: 'center'
    },
    buttonNext: {
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
        fontWeight: 'bold',
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