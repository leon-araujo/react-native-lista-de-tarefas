import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, StatusBar, FlatList, Modal} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TaskList from './src/components/TaskList';
import * as Animatable from 'react-native-animatable';

const AnimateBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App(){
    const [task, setTask] = useState([
      {key: 1, task: 'Comprar pao'},
      {key: 2, task: 'Estudar Rect native'},
      {key: 3, task: 'Ir na academia hoje a noite'},
      {key: 4, task: 'Comprar chocolate e coca cola'},
      {key: 5, task: 'Assistir o 1 video'}
    ]);
  const [open, setOpen] = useState(false);
  
   return(
    <SafeAreaView style={styles.container}> 
    <StatusBar backgroundColor="#171d31" barStyle="ligth-content"/>

    <View style={styles.content}>
      <Text style={styles.title}>Minhas Tarefas</Text>
    </View>
        
    <FlatList
      marginHorinzotal={10}
      showsHorizontalScrollIndicator={false} // desativa barra de scroll
      data={task}                                // contem todos itens da lista
      keyExtractor={(item) => String(item.key)}  // cada item tem uma chave
      renderItem={({item}) => <TaskList data={item}/>} // rederiza (mostra) os itens
    />

    <Modal animationType="slide" transparent={false} visible={open}>
      <SafeAreaView>
        <Text> Modal 123 </Text>
      </SafeAreaView>
    </Modal>
    
    <AnimateBtn
    style={styles.fab}
    useNativeDriver
    animation="bounceInUp"
    durantion={1500}
    onPress={() => setOpen(true)} // chama a função open e manda a true
    >
      <Ionicons name="ios-add" size={35} color="#fff"></Ionicons>
    </AnimateBtn>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171d31'
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  content: {

  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    right: 25,
    bottom: 25,
    elevation: 2, // Efeito de Elevar o Icone
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    }
  }
})