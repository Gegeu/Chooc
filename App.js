import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ListView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Repository from './Repository';

export default function App() {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#7159c1', '#9B49c1']} style={styles.container} >
      {/* <View>
        
      </View> */}
        {/* <Text>Open up App.js to start working on your app!</Text> */}
      <SafeAreaView >
        <Text style={styles.title}> Pedidos </Text>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Adiconar pedido" 
          autoCapitalize="none" autoCorrect={false} >
          </TextInput>
            <TouchableOpacity onPress={() => {} } style={styles.submit}>
              <Ionicons name="ios-add" size={22} color="#FFF"/>
            </TouchableOpacity> 
        </View>
        <FlatList  contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            data={[
              {
                id: 1,
                name: "hfajksdfh",
                descripton: "teste",
                stars: 1234,
                forks: 133
              }
            ]}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Repository data={item}/>
            )}
          />
      </SafeAreaView>


    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: "bold",
    paddingTop: 20

  },

  form: {
    flexDirection: 'row',
    marginTop: 10,
    padding: 10
  },

  input: {
    flex: 1,
    padding: 12,
    borderRadius: 4,
    color: '#333',
    backgroundColor: "#FFF"
  },

  submit: {
    backgroundColor: "#6bd4c1",
    marginLeft: 10,
    justifyContent: "center",
    borderRadius: 4,
    padding: 18
  },

  list: {
    marginTop: 10,
    paddingHorizontal: 10
  }
});
