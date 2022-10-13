import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsCardHalf from './NewsCardHalf';
import NewsCard from './NewsCard';
import RandomImageGenerator from './RandomImageGenerator';
import TopNav from './TopNav';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <RandomImageGenerator /> */}
      <TopNav />
      <NewsCard />
      <NewsCardHalf />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
});
