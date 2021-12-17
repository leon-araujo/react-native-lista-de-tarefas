import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, StatusBar, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TaskListg from './src/components/TaskList';

export default function App(){
   return(
    <SafeAreaView style={styles.container}> 
    <StatusBar backgroundColor="#171d31" barStyle="ligth-content"/>

    <View style={styles.content}>
      <Text style={styles.title}>Minhas Tarefas</Text>
    </View>
        
    <FlatList
      showsHorizontalScrollIndicator={false} // desativa barra de scroll
      data={task}                                // contem todos itens da lista
      keyExtractor={(item) => String(item.key)}  // cada item tem uma chave
      renderItem={({item}) => <TaskList data={item}/>} // rederiza (mostra) os itens
    />

    <TouchableOpacity style={styles.fab}>
      <Ionicons name="ios-add" size={35} color="#fff"></Ionicons>
    </TouchableOpacity>
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