import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";

const transparent = 'rgba(0,0,0,0.5)'


const ModalClients = ({ modalVisible, setModalVisible }) => {
    return (
        <View>
            <Modal animationType="fade" visible={modalVisible} transparent={true} onRequestClose={() => {setModalVisible(false)}}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: transparent,
                    }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            padding: 15,
                            width: '90%',
                            borderRadius: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Selecciona con que dato se filtrara la informacion</Text>
                        <View style={{ marginHorizontal: 10 }}>
                            <TouchableOpacity style={styles.modalButtons}>
                                <Text>Filtrar por fecha</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButtons}>
                                <Text>Filtrar por nombre</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButtons}>
                                <Text>Filtrar por estatus</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButtons}>
                                <Text>Sortear por fecha de menor a mayor</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButtons}>
                                <Text>Sortear por fecha de mayor a menor</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalClients;

const styles = StyleSheet.create({
    modalButtons: {
        marginTop: 10,
        marginBottom: 10,
    },
});
