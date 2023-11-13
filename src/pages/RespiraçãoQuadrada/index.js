import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import { Video } from 'expo-av';


import { AuthContext } from "../../contexts/auth";

export default function RespiraçãoQuadrada(){
   const {handleFirebaseStorage} = useContext(AuthContext);
   const video = React.useRef(null);

   
   return(
      <ScrollView style={styles.containerScroll}>
         <View style={styles.container}>
            
            <Video
            ref={video}
            style={styles.video}
            source={{
               uri: 'https://firebasestorage.googleapis.com/v0/b/calmind-b31b7.appspot.com/o/Paisagens%20em%20movimento.mp4?alt=media&token=1ba7331e-4f64-4ddd-aa0e-a44fd5059d69',
            }}
            useNativeControls
            resizeMode="cover"
            isLooping
            />
            <Text style={styles.imageTitle}>Imagina essa imagem</Text>
            <Image
            style={styles.image}
            
            source={require('../../../assets/RespiraçãoQuadrada.png')}
            />

            <Text style={styles.titleDescription}>Descrição:</Text>
            <Text style={styles.description}>
            A respiração quadrada, uma técnica de respiração ritmada, é uma prática comum para reduzir o estresse e promover a calma. Para começar, encontre um lugar tranquilo e confortável para se sentar ou deitar. Mantenha uma postura relaxada e confortável.
	         Inspiração (4 segundos): Inicie inspirando pelo nariz, contando lentamente até 4 segundos. Deixe o ar encher seus pulmões, preenchendo o abdômen e o peito. 
            Retenção (4 segundos): Em seguida, segure a respiração por 4 segundos, mantendo o ar nos pulmões. Durante esse período, mantenha-se relaxado e não force a retenção do ar.
	         Expiração (4 segundos): Suavemente, expire o ar pela boca ou pelo nariz, contando até 4 segundos. Deixe o ar sair naturalmente, esvaziando completamente os pulmões.
	         Repouso (4 segundos): Após expirar, mantenha-se em um estado de repouso por mais 4 segundos antes de iniciar o próximo ciclo de respiração. 
	         Pode repetir esse ciclo de respiração quadrada várias vezes, ajustando o ritmo para o que for mais confortável para você. Essa prática pode acalmar a mente, regular o sistema nervoso e induzir um estado de relaxamento, promovendo a sensação de equilíbrio e bem-estar. Ao manter um padrão de respiração quadrada, você está criando uma rotina que acalma tanto o corpo quanto a mente.
            </Text>

         </View>
      </ScrollView>
   )
}