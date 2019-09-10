import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Platform,
    Dimensions,
    View,
    TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modalbox';

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
    showAddModal = () => {
        this.refs.myModal.open();
    }

    render() {

        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 20,
                    shadowRadius: 10,
                    width: screen.width - 90,
                    height: 450,

                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                }}

                transparent={false}
                visible={this.state.modalVisible}
            >
                <View style={styles.topImage}>
                    <View style={styles.popUpImageBack1}>
                        <View style={styles.popUpImageBack2}>
                            <Image source={require('../image/popUp.png')}
                                   style={styles.popUpImage}/>
                        </View>
                    </View>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 40
                    }}>
                        Welcom to PayLah!
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        padding: 15,
                        marginTop: 40,
                    }}>
                        Here's a quick overview to get you started
                    </Text>
                    <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <Text style={styles.textNext}>
                            LET'S GO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonSkip}
                    >
                        <Text style={styles.textSkip}>
                            SKIP
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }

}
const styles = StyleSheet.create({
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
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonSkip: {},
    textNext: {
        margin:10,
        color: 'white',
        fontSize: 24,
        fontWeight:'bold'
    },
    textSkip: {
        margin:10,
        color: '#F65973',
        fontSize: 24,
        fontWeight:'bold'
    }
})