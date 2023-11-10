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
      marginBottom: 20
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
      marginRight: 15,
   },
   containerIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
   }

})
