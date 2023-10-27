import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#020E17",
   },
   top: {
      display: 'flex',
      flexDirection:"row",
      justifyContent: 'space-between',
      marginLeft: 15,
      marginRight: 15,
      marginTop: 15,
      marginBottom: 25
   },
   text: {
      fontSize: 22,
      fontWeight: 'bold',
      color: "#3B5368",
      marginTop: 5,
      textAlign: 'center',
      marginBottom: 10
   },
   containerButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   buttonProfile: {
      width: 75,
      height: 40,
      backgroundColor: "#3B5368",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginLeft: 15
   },
   buttonText: {
      color: "#ddd",
      fontSize: 20,
      fontWeight: 'bold'
   },
   containerIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
   }

})
