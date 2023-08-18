import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import userApi from "./Api/api";

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
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Lista de usuarios</Text>
      </View>
      <FlatList
        data={user}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  )
}
const styles = StyleSheet.create({

  headerContainer: {
    paddingTop: 50,
    paddingLeft: 25,
    paddingBottom:15
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
});

export default App;
