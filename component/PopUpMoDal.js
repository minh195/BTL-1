import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Dimensions,
    View,
    TouchableOpacity,
    Modal,
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
    hideModal = () => {
        this.setModalVisible(!this.state.modalVisible);
    }

    render() {
        return (
            <Modal
                ref={"myModal"}
                transparent={true}
                visible={this.state.modalVisible}
                animated={true}>
                <View style={styles.popUpTransparent}>
                    <View style={styles.containerPopUp}>
                        <View style={styles.topImage}>
                            <View style={styles.popUpImageBack}>
                                <Image source={require('../image/popUp.png')}
                                       style={styles.popUpImage}/>
                            </View>
                            <Text style={styles.textWelcom}>
                                Welcom to PayLah!
                            </Text>
                            <Text style={styles.textIntro}>
                                Here's a quick overview to get you started
                            </Text>
                            <TouchableOpacity
                                style={styles.buttonNext}
                                onPress={this.hideModal}>
                                <Text style={styles.textNext}>
                                    LET'S GO
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonSkip}
                                onPress={this.hideModal}>
                                <Text style={styles.textSkip}>
                                    SKIP
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 100,
        marginBottom: 100,
        backgroundColor: 'white',
        borderRadius: 20,
    }, popUpTransparent: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    }, popUpImage: {
        width: 120,
        height: 120,
    }, topImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, popUpImageBack: {
        backgroundColor: '#F8F8F7',
        width: 120,
        height: 120,
        borderRadius: 45,
    }, buttonNext: {
        backgroundColor: '#F65973',
        width: screen.width - 140,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }, textNext: {
        margin: 10,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }, textSkip: {
        margin: 10,
        color: '#F65973',
        fontSize: 24,
        fontWeight: 'bold'
    }, textWelcom: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40
    }, textIntro: {
        fontSize: 20,
        textAlign: 'center',
        padding: 15,
        marginTop: 40,
    }
})