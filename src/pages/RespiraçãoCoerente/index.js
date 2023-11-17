import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import { Video } from 'expo-av';


import { AuthContext } from "../../contexts/auth";

export default function RespiraçãoCoerente(){
   const {handleFirebaseStorage} = useContext(AuthContext);
   const video = React.useRef(null);

   
   return(
      <ScrollView style={styles.containerScroll}>
         <View style={styles.container}>
            
            <Video
            ref={video}
            style={styles.video}
            source={{
               uri: 'https://firebasestorage.googleapis.com/v0/b/calmind-b31b7.appspot.com/o/Video%20Respira%C3%A7%C3%A3o%20coerente.mp4?alt=media&token=569fa7fc-d5b6-4b26-8334-c6cf4d07c1fb',
            }}
            useNativeControls
            resizeMode="cover"
            isLooping
            />

            <Text style={styles.titleDescription}>Descrição:</Text>
            <Text style={styles.description}>
            A respiração coerente, refere-se a um padrão de respiração específico que sincroniza a respiração com a atividade do coração, visando otimizar o funcionamento fisiológico e emocional.
	         Esse tipo de respiração é caracterizado por uma frequência respiratória que induz um ritmo cardíaco equilibrado e coeso. Em termos práticos, significa respirar de maneira suave e rítmica, 
            geralmente em um ciclo de inalação e exalação que dura de cinco a seis segundos cada.
	         Ao adotar esse padrão respiratório, é possível estimular o sistema nervoso parassimpático, que está associado ao relaxamento e à diminuição do estresse. Isso resulta em benefícios para a saúde, 
            incluindo redução da pressão arterial, melhoria da função cognitiva e redução dos níveis de hormônios do estresse. A técnica consiste em respirar por 6 segundo e soltar por 6 segundos.
            </Text>

         </View>
      </ScrollView>
   )
}