import React,{useState} from "react";
import { View,TextInput,Text } from "react-native";



export default function (){

    const [Texto,setTexto] = useState("")
    const mudarTexto = ()=>{}
    return  (
        <View>
     <Text> {Texto} </Text>
    <Text></Text>
    <Text></Text>
    <Text> Qual vaga na area de desenvolvimento de software você tem para me?!</Text>
      <TextInput  style={{borderWidth : 2, width : 300}}
      value = {Texto}
      onChangeText={text=>setTexto(text)}
      />
        </View>
    )

}