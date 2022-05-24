import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, ScrollView, TextInput, ImageBackground, StyleSheet, SafeAreaView, useState,Button,Alert } from 'react-native';
import CT from './Componentes/CaixaDeTexto'

export default function App() {


  const image = { uri: "https://png.pngtree.com/element_our/md/20180424/md_5aded53326819.jpg" };
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text></Text>
        <Text></Text>
        <View style={{}}>
        <Image
          source={{uri:'https://www.seekpng.com/png/detail/8-82751_barbie-png-photo-rosto-barbie-png.png',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2
          }}
        />
      </View>
        <Text></Text>
        <Text></Text>
       <Text style={styles.title}>Gediane Silva do Nascimento </Text>
       <Text></Text>
       <CT/>
      <Text></Text>
       <Button
       title="Mostrar mensagem"
       onPress={()=>Alert.alert('Confirmação','Você digitou sua mensagem')}
       />
      <Text></Text>
      <Text></Text>
      </ImageBackground> 
      <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: +50,
    buttonwidth: 300,
    paddingTop: 50,
  },


 image: {
 flex: 1,
 justifyContent: "center",
 alignItems: 'center',
 }, 

 title: {
  justifyContent: "center",
  fontSize:+20 ,
 },
 
 

});
