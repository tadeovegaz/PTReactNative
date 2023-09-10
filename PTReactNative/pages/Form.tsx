import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity, SafeAreaView, TextInput, Image, ScrollView, Modal } from "react-native";
import { Picker } from '@react-native-picker/picker';


const Form = () => {

    const [currentDate, setcurrentDate] = useState('');//Para la fe
    const [isModalVisible, setisModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState();

    useEffect(() => {
        var date = new Date().getDate()
        var month = new Date().getMonth() + 1
        var year = new Date().getFullYear()

        setcurrentDate(
            date + '/' + month + '/' + year
        )
    }, [])

    return (
        <View>
            <ScrollView style={{}}>
                <Text style={styles.headerText}>Nuevo Cliente</Text>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Fecha de creación</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa la fecha"
                        defaultValue={currentDate}
                        editable={false}
                    />
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa tú nombre"
                        keyboardType="default"
                    />
                    <Text style={styles.label}>Referencia</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa la referencia"
                        keyboardType="default"
                    />
                    <Text style={styles.label}>Telefono</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa el telefono"
                        keyboardType="phone-pad"
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa el email"
                        keyboardType="email-address"
                    />
                    <Text style={styles.label}>Dirección</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Direccion"
                        keyboardType="default"
                    />
                    <Text style={styles.label}>Comentarios</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Comentarios"
                        keyboardType="default"
                    />
                    <Text style={styles.label}>Selecciona una opción:</Text>
                    <View>
                        <Picker
                            // selectedValue={selectedOption}
                            onValueChange={(itemValue, itemIndex) => setSelectedOption()} style={{}}
                        >
                            <Picker.Item label="Sin especificar" value="Sin especificar" />
                            <Picker.Item label="Para instalar" value="Para instalar" />
                            <Picker.Item label="En analisis" value="En analisis" />
                            <Picker.Item label="Cancelado" value="Cancelado" />
                            <Picker.Item label="En pagos" value="En pagos" />
                            <Picker.Item label="Cotizado" value="Cotizado" />
                            <Picker.Item label="Completo" value="Completo" />
                        </Picker>
                    </View>
                    <View style={styles.firstButtons}>
                        <TouchableOpacity style={styles.firstButton}>
                            <Text style={{ fontSize: 15, color: 'white' }}>Crear cliente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.firstButton}>
                            <Text style={{ fontSize: 15, color: 'white' }}>Crear cliente y hacer analisis</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Form;

const styles = StyleSheet.create({
    headerText: {
        marginTop: 60,
        color: '#3B63FF',
        fontWeight: '900',
        fontSize: 24,
        textAlign: 'center',
    },
    containerForm: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: 'black',
        fontWeight: '600',
        marginTop: 15,
        fontSize: 20
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
    },
    firstButtons: {
        marginTop: 10,
        marginBottom: 30,
        justifyContent: 'space-between',
    },
    firstButton: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 5,
        backgroundColor: '#3B63FF',
        borderColor: '#F5F5F5',
        marginBottom: 20
    },
})