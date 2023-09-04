import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity, SafeAreaView, TextInput, Image, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';


const Detalles = (currentDate) => {

    return (
        <View>
            <Text style={styles.header}>Detalles cliente</Text>
            <ScrollView>
                <View style={styles.card}>
                    <View style={styles.data}>
                        <Text style={styles.label}>Fecha de creación:</Text>
                        <Text style={styles.text}></Text>
                        <Text style={styles.label}>Nombre:</Text>
                        <Text style={styles.text}></Text>
                        <Text style={styles.label}>Referencia:</Text>
                        <Text style={styles.text}></Text>
                        <Text style={styles.label}>Telefono:</Text>
                        <Text style={styles.text}></Text>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.text}></Text>
                        <Text style={styles.label}>Dirección:</Text>
                        <Text style={styles.text}></Text>
                        <Text style={styles.label}>Status:</Text>
                        <Text style={styles.text}></Text>
                        <Text style={styles.label}>Comentarios:</Text>
                        <Text style={styles.text}></Text>
                        <TouchableOpacity style={styles.editButton} onPress={() => { console.log('editButton') }}>
                            <Octicons name="pencil" size={20} color="#0098E1" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.trashButton} onPress={() => { console.log('trashButton') }}>
                            <Octicons name="trash" size={20} color="#E41200" />
                        </TouchableOpacity>
                    </View>
                </View >
                <View style={styles.firstButtons}>
                    <TouchableOpacity style={styles.firstButton }>
                        <Text style={{ fontSize: 11, color:'white' }}>HACER ANALISIS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.firstButton}>
                        <Text style={{ fontSize: 11, color:'white' }}>HACER COTIZACIÓN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.labelCenter}>
                    <Text style={{ fontWeight: '600' }}>Dirigirse a</Text>
                </View>
                <View style={styles.firstButtons}>
                    <TouchableOpacity style={styles.secondButton}>
                        <Text style={{ fontSize: 11, color:'white' }}>MAIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondButton}>
                        <Text style={{fontSize: 11, color:'white'}}>ANALISIS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondButton}>
                        <Text style={{ fontSize: 11, color:'white'}}>COTIZACIÓN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondButton}>
                        <Text style={{ fontSize: 11, color:'white'}}>VENTA</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        color: '#3B63FF',
        fontWeight: '900',
        fontSize: 24,
        textAlign: 'center',
    },
    label: {
        fontWeight: '700',
        marginBottom: 5,
    },
    text: {
        fontWeight: '300',
        marginBottom: 10,
    },
    card: {
        backgroundColor: 'white',
        marginTop: 20,
        marginHorizontal: 20,
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,
    },
    data: {
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 15,

    },
    labelCenter: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    firstButtons: {
        marginTop: 10,
        flexDirection: 'row',
        marginHorizontal: 25,
        justifyContent: 'space-between',
    },
    firstButton: {
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 5,
        backgroundColor: '#3B63FF',
        borderColor: '#F5F5F5',
    },
    secondButton: {
        width: 70,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 5,
        backgroundColor: '#3B63FF',
        borderColor: '#F5F5F5',
    },
    trashButton: {
        position: 'absolute',
        top: 5,
        right: 50,
        width: 40,
        height: 40,
        borderWidth: 1,
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        elevation: 5,
    },
    editButton: {
        position: 'absolute',
        top: 5,
        right: 0,
        width: 40,
        height: 40,
        borderWidth: 1,
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        elevation: 5,
    },
})




export default Detalles;

