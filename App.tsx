import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { useState } from 'react';
import 
  { SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    Pressable,
    View,
    Modal,
    Image
  } from 'react-native';
import { Card } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './components/log-in.component';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const pizzas = [
  {
    name: "Pizza 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis enim doloremque ipsum tenetur rem itaque tempore, neque explicabo a fugit mollitia fuga natus ut! Sint ullam ducimus magni error."
  },
  {
    name: "Pizza 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis enim doloremque ipsum tenetur rem itaque tempore, neque explicabo a fugit mollitia fuga natus ut! Sint ullam ducimus magni error."
  },
  {
    name: "Pizza 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis enim doloremque ipsum tenetur rem itaque tempore, neque explicabo a fugit mollitia fuga natus ut! Sint ullam ducimus magni error."
  },
  {
    name: "Pizza 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis enim doloremque ipsum tenetur rem itaque tempore, neque explicabo a fugit mollitia fuga natus ut! Sint ullam ducimus magni error."
  },
  {
    name: "Pizza 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis enim doloremque ipsum tenetur rem itaque tempore, neque explicabo a fugit mollitia fuga natus ut! Sint ullam ducimus magni error."
  },
  {
    name: "Pizza 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis enim doloremque ipsum tenetur rem itaque tempore, neque explicabo a fugit mollitia fuga natus ut! Sint ullam ducimus magni error."
  },
]

export default function App() {
  const Stack = createStackNavigator();
  const [modalVisible, setModalVisible] = useState(-1);


  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Homescreen}/>
            <Stack.Screen name="LogIn" component={LogIn}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}

function Homescreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(-1);
  return(
  <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text >Pizza Menu !</Text>
          <Pressable onPress={() => navigation.navigate("LogIn")}>
            <Text>LogIn</Text>
          </Pressable>
        </View>
        <ScrollView>
        {pizzas.map((p, i) => {
          return (
            <View key={i}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible == i ? true:false}
                onRequestClose={() => {
                  setModalVisible(-1);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Image style={styles.modalImage}source={{uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'}}/>
                    <Text style={styles.modalText}>{p.name}</Text>
                    <Text style={styles.modalDesc}>{p.description}</Text>
                    <Pressable
                      style={[styles.buttonClose]}
                      onPress={() => setModalVisible(-1)}>
                      <Text style={styles.buttonText}>Close</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Card>
                <Card.Title>{p.name}</Card.Title>
                <Card.Divider/>
                <Text style={{marginBottom: 10}}>
                  {p.description}
                </Text>
                <Pressable style={[styles.button, styles.buttonPrimary]} onPress={() => setModalVisible(i)}>
                  <Text style={styles.buttonText}>Learn more</Text>
                </Pressable>
              </Card>
            </View>
            
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 5,
    borderRadius: 3,
    width: 'auto'
  },
  buttonPrimary: {
    backgroundColor: "rgb(242, 68, 56)"
  },
  buttonClose: {
    padding: 5,
    backgroundColor: 'rgb(209, 23, 10)',
    borderRadius: 3,
    width: 'auto'
  },
  buttonText: {
    color: 'white'
  },
  header: {
    padding: 10,
    fontSize: 20,
    fontWeight: 400,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgb(242, 68, 56)"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalDesc: {
    fontSize: 10,
    marginBottom: 20
  },
  modalImage: {
    width: '100%',
    height: 50
  }
});
