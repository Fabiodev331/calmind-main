import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";

import Header from "../../components/Header";
import ContainerList from "../../components/ContainerList";

import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Home(){
   const {user, bellOn, bellOff, visible} = useContext(AuthContext);
   const navigation = useNavigation();


   useEffect (() => {
      return () => {}
   }, [])

   const [posts, setPosts] = useState ([
      {id: 1, name: "Mente"},
      {id: 2, name: "Acalmar"},
      {id: 3, name: "Relaxar"},
      {id: 4, name: "Respire"},
      {id: 5, name: "Silêncio"},
   ])

   async function handleOff(){
      bellOff();
   }
   async function handleOn(){
      bellOn();
   }

   return(
      <View style={styles.container}>
         <Header/>
         <View style={styles.top}>
            <Text style={styles.text}>Olá {user?.name} </Text>
            
            <View style={styles.containerButton}>
               {visible ? 
               <TouchableOpacity 
               style={styles.containerIcon}
               onPress={handleOff}
               >
                  <FontAwesome name="bell" color="#3B5368" size={30} />
               </TouchableOpacity>
               : <TouchableOpacity 
               style={styles.containerIcon}
               onPress={handleOn}
               >
                  <FontAwesome name="bell-o" color="#3B5368" size={30} />
               </TouchableOpacity>
               }
               
               <TouchableOpacity style={styles.buttonProfile} onPress={() => navigation.navigate('Profile')}>
                  <Text style={styles.buttonText}>Perfil</Text>
               </TouchableOpacity>
            </View>
         </View>
        
         <ContainerList/>
      </View>
   )
}
