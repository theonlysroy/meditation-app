import RootNavigator from "@/navigation/RootNavigator";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App: React.FC = () => {
 return (
   <GestureHandlerRootView style={{flex: 1}}>
     <RootNavigator />
     <StatusBar animated={true} backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />
   </GestureHandlerRootView>
 )
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexWrap: "wrap",
//     padding: 10,
//   },
//   text: {
//     fontFamily: "Sora-Regular",
//     fontSize: 50,
//   }
// })
