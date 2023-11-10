import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import RespiraçãoCoerente from "../pages/RespiraçãoCoerente";
import RespiraçãoQuadrada from "../pages/RespiraçãoQuadrada";

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
      </Stack.Navigator>
   )
}