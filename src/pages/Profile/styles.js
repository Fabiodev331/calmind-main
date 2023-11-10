import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#020E17",
   },
   imageButton: {
      backgroundColor: '#fff',
      width: 165,
      height: 165,
      borderRadius: 90,
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 8
   },
   imageText: {
      fontSize: 45,
      position: 'absolute',
      color: "#3B5368",
      opacity: 0.5,
      zIndex: 99
   },
   image: {
      width: 163,
      height: 163,
      borderRadius: 90
   },
   TextName: {
      color: "#ddd",
      fontSize: 35,
      marginBottom: 15
   },
   TextEmail: {
      color: "#ddd",
      fontSize: 16,
      marginBottom: 20
   },
   button: {
      width: '80%',
      height: 50,
      backgroundColor: "#3B5368",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 25,
   },
   buttonText: {
      color: "#ddd",
      fontSize: 20,
      fontWeight: 'bold'
   },
   buttonOut: {
      width: '80%',
      height: 50,
      backgroundColor: "#ddd",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
   },
   buttonTextOut: {
      color: "#000",
      fontSize: 20,
      fontWeight: 'bold'
   },
   modalContainer: {
      width: "100%",
      height: "50%",
      backgroundColor: "#3B5368",
      position: "absolute",
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
   },
   buttonBack: {
      position: 'absolute',
      top: 15,
      right: 25
   },
   input: {
      width: '80%',
      height: 50,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#020E17",
      marginBottom: 15,
      fontSize: 20,
      textAlign: 'center',
      color: '#fff'
   },
   buttonUpdate: {
      width: '80%',
      height: 50,
      backgroundColor: "#020E17",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 15,
   },

})