import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import { Video } from 'expo-av';


import { AuthContext } from "../../contexts/auth";
import { SafeAreaView } from "react-native-safe-area-context";

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
               Maravilhoso mesmo é: ter paz na alma, sossego na mente, consciência tranquila 
               e calma no coração. O ser humano precisa de tão pouco pra ser feliz. Mas, 
               quando decide procurar felicidade fora de si, se depara com mares de 
               dificuldades e conflitos
            </Text>

         </View>
      </ScrollView>
   )
}