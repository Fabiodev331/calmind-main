import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import { Video } from 'expo-av';


import { AuthContext } from "../../contexts/auth";

export default function RespiraçãoDiafragmática(){
   const {handleFirebaseStorage} = useContext(AuthContext);
   const video = React.useRef(null);

   
   return(
      <ScrollView style={styles.containerScroll}>
         <View style={styles.container}>
            
            <Video
            ref={video}
            style={styles.video}
            source={{
               uri: 'https://firebasestorage.googleapis.com/v0/b/calmind-b31b7.appspot.com/o/Video%20Respira%C3%A7%C3%A3o%20diafragm%C3%A1tica.mp4?alt=media&token=fc1c945f-9e10-44f7-bf04-33094541687a',
            }}
            useNativeControls
            resizeMode="cover"
            isLooping
            />

            <Text style={styles.titleDescription}>Descrição:</Text>
            <Text style={styles.description}>
            Quando a ansiedade se manifesta, a insônia frequentemente a acompanha. Nesses momentos, a técnica de respiração 
            diafragmática pode ser uma recomendação valiosa. Comece escolhendo um local tranquilo e acolhedor para se sentar 
            ou deitar. Posicione suas mãos suavemente sobre o abdômen. Em seguida, siga para a segunda etapa, inspirando pelo 
            nariz e contando até 4 segundos. O terceiro passo é manter a respiração por 2 segundos e, por fim, soltar o ar lentamente 
            pela boca, contando até 6 segundos. Repita esse ciclo quantas vezes forem necessárias para sentir-se mais tranquilo e relaxado.
	         A técnica de respiração diafragmática ajuda a acalmar o sistema nervoso, reduzindo os níveis de estresse e ansiedade. 
            Quando praticada regularmente, promove uma resposta de relaxamento no corpo, diminuindo a produção de hormônios do estresse, 
            como o cortisol. Isso, por sua vez, pode contribuir para um sono mais tranquilo e reparador, melhorando a qualidade do descanso noturno.
	         Além disso, ao focar na respiração e no ritmo controlado, a técnica de respiração diafragmática pode acalmar a mente, ajudando a desacelerar 
            os pensamentos agitados. Isso pode estimular a atividade do sistema nervoso parassimpático, responsável pelo relaxamento e restauração, 
            promovendo uma sensação de calma e bem-estar no cérebro.
            </Text>

         </View>
      </ScrollView>
   )
}