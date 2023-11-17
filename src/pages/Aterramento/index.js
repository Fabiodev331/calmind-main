import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import { Video } from 'expo-av';


import { AuthContext } from "../../contexts/auth";

export default function Aterramento(){
   const {handleFirebaseStorage} = useContext(AuthContext);
   const video = React.useRef(null);

   
   return(
      <ScrollView style={styles.containerScroll}>
         <View style={styles.container}>
            
            <Video
            ref={video}
            style={styles.video}
            source={{
               uri: 'https://firebasestorage.googleapis.com/v0/b/calmind-b31b7.appspot.com/o/Video%20aterramento.mp4?alt=media&token=97ac8926-5f76-4b1e-bcdf-c29670963720',
            }}
            useNativeControls
            resizeMode="cover"
            isLooping
            />

            <Text style={styles.titleDescription}>Descrição:</Text>
            <Text style={styles.description}>
            O termo "aterramento" ou "ancoragem" se refere a técnicas ou estratégias utilizadas 
            para ajudar uma pessoa a se conectar com o momento presente, o ambiente ao seu redor 
            ou com sensações físicas específicas.
	         Além disso, o aterramento pode incluir práticas que envolvem os cinco sentidos, 
            como observar objetos ao redor, tocar em algo com textura específica, descrever cores, 
            aromas ou sabores presentes no ambiente. O objetivo é trazer a consciência de volta para 
            o momento presente, ajudando a pessoa a se sentir mais segura, calma e conectada com a realidade imediata.
            </Text>

         </View>
      </ScrollView>
   )
}