import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import { Video } from 'expo-av';


import { AuthContext } from "../../contexts/auth";

export default function Respiração478(){
   const {handleFirebaseStorage} = useContext(AuthContext);
   const video = React.useRef(null);

   
   return(
      <ScrollView style={styles.containerScroll}>
         <View style={styles.container}>
            
            <Video
            ref={video}
            style={styles.video}
            source={{
               uri: 'https://firebasestorage.googleapis.com/v0/b/calmind-b31b7.appspot.com/o/Video%20Respira%C3%A7%C3%A3o%204-7-8.mp4?alt=media&token=f1d68fbb-b022-49fb-a07f-005ae5449998',
            }}
            useNativeControls
            resizeMode="cover"
            isLooping
            />

            <Text style={styles.titleDescription}>Descrição:</Text>
            <Text style={styles.description}>
            A técnica de respiração 4-7-8, desenvolvida pelo Dr. Andrew Weil, é baseada em práticas de respiração usadas em tradições orientais, 
            como o pranayama, uma técnica de controle de respiração no yoga.
            A ideia por trás da respiração 4-7-8 é que ao prolongar a expiração, você pode acalmar o sistema nervoso simpático 
            (responsável pela resposta de "luta ou fuga") e ativar o sistema nervoso parassimpático, levando a uma sensação de relaxamento.
            Além de ser uma técnica simples, a respiração 4-7-8 pode ser usada em diversas situações, como para aliviar o estresse no dia a dia, 
            para ajudar a conciliar o sono ou para lidar com momentos de ansiedade.
            A prática regular dessa técnica de respiração pode contribuir para um estado de relaxamento geral, redução do estresse e melhoria da qualidade do sono. 
            A técnica consiste em inspirar por 4 segundos, segurar a respiração por 7 segundos e soltar a respiração por 8 segundos.
            </Text>

         </View>
      </ScrollView>
   )
}