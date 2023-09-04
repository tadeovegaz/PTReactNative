import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import userApi from "./Api/api";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Hello from "./pages/Hello";
import Form from "./pages/Form";
import Detalles from "./pages/Detalles";



function HomeScreen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => {navigation.navigate('Hello')}}>
        <Text style={styles.boton}>Clima</Text>
      </TouchableOpacity>
    </View>
  )
}


const Stack = createNativeStackNavigator();

const App = () => {

  const [user, setUser] = useState([]);

  //uso del userApi
  useEffect(() => {
    userApi()
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.list}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Hello" component={Hello} options={{headerShown: false}}/>
          <Stack.Screen name="Form" component={Form} options={{headerShown: false}}/>
          <Stack.Screen name="Detalles" component={Detalles} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
const styles = StyleSheet.create({

  headerContainer: {
    paddingTop: 50,
    paddingLeft: 25,
    paddingBottom: 15
  },

  header: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
  },

  list: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  boton: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',

  },
});

export default App;
