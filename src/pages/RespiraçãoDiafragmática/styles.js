import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
   containerScroll: {
      flex: 1,
      backgroundColor: "#020E17",
      display: 'flex',
   },
   container: {
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
   },
   video: {
      width: 355,
      height: 220,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 5
   },
   titleDescription: {
      textAlign: 'center',
      marginTop: 15,
      color: "#3B5368",
      fontSize: 20
   },
   description: {
      color: "#3B5368",
      fontSize: 17,
      textAlign: 'center',
      margin: 10,
      paddingBottom: 10
   }
})   