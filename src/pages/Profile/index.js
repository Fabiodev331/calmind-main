import React, {useState, useContext} from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, Modal, TextInput } from "react-native";
import { styles } from "./styles";

import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as ImagePicker from 'expo-image-picker';


export default function Profile(){
   const {SignOut, user, updateUser, handlePassWord, uploadFileFirebase} = useContext(AuthContext);

   const [name, setName] = useState(user?.name);
   const [email, setEmail] = useState(user?.email);
   const [isEditable, setIsEditable] = useState(false);
   const [url, setUrl] = useState(null);
   const [open, setOpen] = useState(false);

   async function handleSignOut(){
      await SignOut();
   }

   function closeModal(){
      setOpen(false)
      setName(user?.name)
   }

   async function handleUpdate(){
      if(name === user?.name){
         return;
      }else{
         Keyboard.dismiss()
         await updateUser(name, email);
         setOpen(false);
         alert("Atualizado com sucesso!")
      } 
   }
   async function changePass(){
      await handlePassWord();
      setOpen(false);
   }

   async function uploadFile(){
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         quality: 1,
       });
       let response = result.assets[0].uri;
   
       if (!result.canceled) {
         setUrl(response);
         uploadFileFirebase(response)
       }
   }

   return (
      <View style={styles.container}>
         {url ? (
            <TouchableOpacity 
            style={styles.imageButton}
            onPress={uploadFile}
            >
               <Text style={styles.imageText}>+</Text>
               <Image 
                  style={styles.image}
                  source={{uri: url}}
               />
            </TouchableOpacity>
         ) : (
            <TouchableOpacity 
            style={styles.imageButton}
            onPress={uploadFile}
            >
               <Text style={styles.imageText}>+</Text>
               
            </TouchableOpacity>
         )}
         <Text style={styles.TextName}>{user?.name}</Text>
         <Text style={styles.TextEmail}>{user?.email}</Text>

         <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
            <Text style={styles.buttonText}>Alterar dados</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttonOut} onPress={handleSignOut}>
            <Text style={styles.buttonTextOut}>Sair</Text>
         </TouchableOpacity>

         <Modal visible={open} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
               <TouchableOpacity 
               style={styles.buttonBack}
               onPress={closeModal}
               >
                  <FontAwesome5 name="times" size={20} color="#000" />
               </TouchableOpacity>

               <TextInput
               style={styles.input}
                  placeholder={user?.name}
                  value={name}
                  onChangeText={(text) => setName(text)}
               />
   
               <TouchableOpacity 
               style={styles.buttonUpdate}
               onPress={handleUpdate}
               >
                  <Text style={styles.buttonText}>Atualizar</Text>
               </TouchableOpacity>
               
               <TouchableOpacity 
               style={styles.buttonOut}
               onPress={changePass}
               >
                  <Text style={styles.buttonTextOut}>Alterar senha</Text>
               </TouchableOpacity>
            </View>
         </Modal>
         
      </View>
   )
}