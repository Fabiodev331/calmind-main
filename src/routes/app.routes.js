import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Aterramento from "../pages/Aterramento";
import AlongamentoFocado from "../pages/AlongamentoFocado";
import RespiraçãoCoerente from "../pages/RespiraçãoCoerente";
import RespiraçãoQuadrada from "../pages/RespiraçãoQuadrada";
import RespiraçãoDiafragmática from "../pages/RespiraçãoDiafragmática";
import Respiração478 from "../pages/Respiração478";


const Stack = createNativeStackNavigator();

export default function AppRoutes(){
   return(
      <Stack.Navigator>
         <Stack.Screen 
         name="Home" 
         component={Home} 
         options={{headerShown: false}}
         />

         <Stack.Screen 
         name="Profile" 
         component={Profile} 
         options={{title: 'Perfil',
         headerStyle: {
            backgroundColor: "#3B5368"
         },
         headerTitleStyle: {
            color: "#020E17",
            fontSize: 25
         },
         }}
         />
         
         <Stack.Screen 
         name="Aterramento" 
         component={Aterramento} 
         options={{title: 'Aterramento',
         headerStyle: {
            backgroundColor: "#3B5368"
         },
         headerTitleStyle: {
            color: "#020E17",
            fontSize: 25
         },
         }}
         />

         <Stack.Screen 
         name="AlongamentoFocado" 
         component={AlongamentoFocado} 
         options={{title: 'Alongamento Focado',
         headerStyle: {
            backgroundColor: "#3B5368"
         },
         headerTitleStyle: {
            color: "#020E17",
            fontSize: 25
         },
         }}
         />

         <Stack.Screen 
         name="RespiraçãoDiafragmática" 
         component={RespiraçãoDiafragmática} 
         options={{title: 'Respiração Diafragmática',
         headerStyle: {
            backgroundColor: "#3B5368"
         },
         headerTitleStyle: {
            color: "#020E17",
            fontSize: 25
         },
         }}
         />

         <Stack.Screen 
         name="RespiraçãoQuadrada" 
         component={RespiraçãoQuadrada} 
         options={{title: 'Respiração Quadrada',
         headerStyle: {
            backgroundColor: "#3B5368"
         },
         headerTitleStyle: {
            color: "#020E17",
            fontSize: 25
         },
         }}
         />

         <Stack.Screen 
         name="RespiraçãoCoerente" 
         component={RespiraçãoCoerente} 
         options={{title: 'Respiração Coerente',
         headerStyle: {
            backgroundColor: "#3B5368"
         },
         headerTitleStyle: {
            color: "#020E17",
            fontSize: 25
         },
         }}
         />

         <Stack.Screen 
         name="Respiração478" 
         component={Respiração478} 
         options={{title: 'Respiração 4-7-8',
         headerStyle: {
            backgroundColor: "#3B5368"
         },
         headerTitleStyle: {
            color: "#020E17",
            fontSize: 25
         },
         }}
         />

         
      </Stack.Navigator>
   )
}