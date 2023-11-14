import React from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";

import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";


export default function ContainerList(){
   const navigation = useNavigation();

   return(
      <ScrollView>
      <TouchableOpacity 
      style={styles.btn} 
      onPress={() => navigation.navigate('Aterramento')}
      >
         <LinearGradient 
         style={styles.container}
         colors={["#3B5368", "#020E17"]}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1.5}}
         >
            <Text style={styles.aviso}>Comece aqui</Text>
            <Text style={styles.nome}>
               Aterramento
            </Text>
            <FontAwesome name="brain" color="#ddd" size={45} />
            
         </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.btn}
      onPress={() => navigation.navigate('RespiraçãoDiafragmática')}
      >
         <LinearGradient 
         style={styles.container}
         colors={["#3B5368", "#020E17"]}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1.5}}
         >
            <Text style={styles.nome}>
               Respiração diafragmática
            </Text>
            <FontAwesome name="lungs" color="#ddd" size={45} />
            
         </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.btn}
      onPress={() => navigation.navigate('RespiraçãoQuadrada')}
      >
         <LinearGradient 
         style={styles.container}
         colors={["#3B5368", "#020E17"]}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1.5}}
         >
            <Text style={styles.nome}>
               Respiração quadrada
            </Text>
            <FontAwesome name="heartbeat" color="#ddd" size={45} />
            
         </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.btn} 
      onPress={() => navigation.navigate('RespiraçãoCoerente')}
      >
         <LinearGradient 
         style={styles.container}
         colors={["#3B5368", "#020E17"]}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1.5}}
         >
            <Text style={styles.nome}>
               Respiração coerente
            </Text>
            <FontAwesome name="wind" color="#ddd" size={45} />
            
         </LinearGradient>
      </TouchableOpacity>



      <TouchableOpacity 
      style={styles.btn}
      onPress={() => navigation.navigate('Respiração478')}
      >
         <LinearGradient 
         style={styles.container}
         colors={["#3B5368", "#020E17"]}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1.5}}
         >
            <Text style={styles.nome}>
               Respiração 4-7-8
            </Text>
            <FontAwesome name="stethoscope" color="#ddd" size={45} />
            
         </LinearGradient>
      </TouchableOpacity>
      
      </ScrollView>
   )
} 
