import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
       return <HomeScreen />;
    </View>
  );
}
// Comentário: teste de pull request
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
