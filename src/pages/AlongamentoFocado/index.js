import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import { Video } from 'expo-av';


import { AuthContext } from "../../contexts/auth";

export default function AlongamentoFocado(){
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

            <Text style={styles.titleDescription}>Descrição:</Text>
            <Text style={styles.description}>
            A combinação de movimento, respiração e atenção plena pode aumentar a consciência corporal e mental, 
            promovendo um estado de relaxamento e equilíbrio. Ao se concentrar na respiração durante o alongamento, 
            você direciona a atenção para o presente, auxiliando na redução do estresse e na promoção do relaxamento. 
            Isso não só melhora a eficácia do alongamento, mas também pode proporcionar benefícios mentais, 
            como maior clareza mental e redução da ansiedade.
	         Ao manter o foco no movimento e na respiração, você pode criar uma prática mais consciente 
            e aumentar a conexão entre corpo e mente.
            </Text>

         </View>
      </ScrollView>
   )
}