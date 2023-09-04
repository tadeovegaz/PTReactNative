import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity, SafeAreaView, TextInput, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Hello = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text style={styles.textHeader}>Clientes</Text>
            </View>
            <View style={styles.containerBar}>
                <View style={styles.icon}>
                    <Ionicons name="search" size={25} color="gray" />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Buscar por fecha"
                    keyboardType="default"
                />
                <TouchableOpacity style={styles.filterButton}>
                    <Octicons name="filter" size={30} color="gray" />
                </TouchableOpacity>
            </View>
            <ScrollView>
            <View style={styles.card}>
                <View style={{ marginHorizontal: 10 }}>
                    <Text>Date</Text>
                </View>
                <View style={styles.dataCard}>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} style={{ width: 40, height: 40 }}
                    />
                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <Text>
                            Nombre
                        </Text>
                        <Text>
                            Apellido
                        </Text>
                    </View>
                    <Text>
                        Status
                    </Text>
                    <TouchableOpacity>
                        <MaterialIcons name="message" size={25} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="email" size={25} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="phone" size={25} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="message" size={25} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
            
            </ScrollView>
            <View style={styles.containerButtonPlus}>
                <TouchableOpacity style={styles.ButtonPlus} onPress={() => {navigation.navigate('Detalles')}}>
                    <Octicons name="plus" size={30} color="#3B63FF"/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    textHeader: {
        marginTop: 60,
        color: '#3B63FF',
        fontWeight: '900',
        fontSize: 24,
        textAlign: 'center',
    },
    containerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        marginHorizontal: 20,
        marginTop: 20,
        elevation: 5,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#424242',
    },
    icon: {
        marginHorizontal: 10,
    },
    filterButton: {
        marginLeft: 10, // Ajusted marginLeft
        padding: 10,
    },
    card: {
        height: 100,
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
    dataCard: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    containerButtonPlus: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonPlus: {
        position: 'absolute',
        bottom: 50,
        right: 25,        
        borderWidth:1,
        backgroundColor: 'white',
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        borderRadius:100,
        elevation: 5,
        opacity:0.9
    }
});



export default Hello;