import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
export default function App(props) {
  return (

    <View >

      <Text>whast popping buooouuyyuyuy</Text>
      <Ist />
    </View>

  );
}

const Ist = () => {
  const [list, setList] = useState([])
  const [loading, stLoading] = useState(true)
  const url = 'https://restcountries.com/v3.1/all';




  useEffect(() => {
    fetch(url).then((result) => result.json())
      .then((json) => setList(json))
      .catch((error) => alert('Error'))
      .finally(() => stLoading(false))
    console.log(list)
  }, [])

  return (
    <View >
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>{item.name.common}</Text>
            <Text style={styles.text1}>{item.capital}</Text>
          </View>
        )} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  text: {
    color: 'black',
    backgroundColor: 'violet',
    width: 400,
    fontSize:33
  },
  text1:{
    color:'violet',
    backgroundColor:'black',
    fontSize:29,
  
    
  }
});
