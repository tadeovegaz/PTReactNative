import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const transparent = 'rgba(0,0,0,0.5)'


const DeleteClient = ({ modalVisible, setModalVisible }) => {
    return (
        <View>
            <Modal animationType="fade" visible={modalVisible} transparent={true} onRequestClose={() => { setModalVisible(false) }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: transparent,
                    }}>
                    <View style={{
                        backgroundColor: '#E41200',
                        padding: 15,
                        width: '90%',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        alignContent: 'center',
                        alignItems: 'center'
                    }}>
                        <AntDesign name='exclamationcircle' color='white' size={30} />
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Atención</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: 'white',
                            padding: 15,
                            width: '90%',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>¿Estas seguro de realizar esta acción?</Text>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Estas apunto de eliminar tu cliente: </Text>
                        </View>
                        <View style={styles.firstButtons}>
                            <TouchableOpacity style={styles.cancelarButton} onPress={() => setModalVisible(false)}>
                                <Text style={{ color: 'black', fontWeight: 'bold'}}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.aceptarButton}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Aceptar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default DeleteClient;

const styles = StyleSheet.create({
    modalButtons: {
        marginTop: 10,
        marginBottom: 10,
    },
    firstButtons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelarButton: {
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: '#F5F5F5',
        marginHorizontal: 10
    },
    aceptarButton: {
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 5,
        backgroundColor: '#E41200',
        borderColor: '#F5F5F5',
        marginHorizontal: 10
    },
});