import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container:{
      flex: 1,
      marginBottom: 15,
      padding: 10,
      borderRadius: 10,
      marginLeft: 15,
      marginRight: 15,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
   },
   btn: {
      height: 105,
   },
   aviso: {
      position: 'absolute',
      top: 8,
      left: 15,
      backgroundColor: "#e00900",
      color: '#ddd',
      paddingBottom: 3,
      paddingTop: 3,
      paddingLeft: 4,
      paddingRight: 4,
      fontWeight: 'bold',
      borderRadius: 5
   },
   nome: {
      color: "#ddd",
      fontSize: 23,
      fontWeight: "bold",
      marginBottom: 5,
      marginLeft: 5
   },
})