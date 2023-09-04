import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity, SafeAreaView, TextInput, Image, ScrollView } from "react-native";
import RNPickerSelect from 'react-native-picker-select';


const Form = () => {

    const [currentDate, setcurrentDate] = useState('');

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
            <Text style={styles.headerText}>Nuevo Cliente</Text>
            <ScrollView style={{}}>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Fecha de creación</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa la fecha"
                        defaultValue={currentDate}
                        editable={false}
                    />
                </View>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa tú nombre"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Referencia</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa la fecha"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Telefono</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa el telefono"
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa el email"
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Dirección</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Direccion"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.containerForm}>

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
})