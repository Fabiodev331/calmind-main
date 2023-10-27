import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";

import Header from "../../components/Header";
import ContainerList from "../../components/ContainerList";

import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Notifications from 'expo-notifications';

export default function Home(){
   const [visible, setVisible] = useState('');
   const {user} = useContext(AuthContext);
   const navigation = useNavigation();


   useEffect (() => {
      async function checkStatusBell(){
         const status = await AsyncStorage.getItem('@statusbell');

         if(status){
         setVisible(JSON.parse(status));
         
         }

      }
      checkStatusBell();

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
      setVisible('')
      console.log('desativado')
      await Notifications.cancelAllScheduledNotificationsAsync();
   }
   async function handleOn(){
      setVisible('ativado')
      await AsyncStorage.setItem('@statusbell', JSON.stringify(visible));
      console.log('ativado')
      handleNotify();
   }
   async function handleNotify(){
      await Notifications.scheduleNotificationAsync({
         content: {
            title: 'Notificação calmind',
            body: `Olá ${user.name}, volte aqui!`
         },
         trigger: {
            seconds: 10, repeats: true 
         }
      })
   };

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
