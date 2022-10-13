import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsCardHalf from './NewsCardHalf';
import NewsCard from './NewsCard';
import RandomImageGenerator from './RandomImageGenerator';
import TopNav from './TopNav';
import NewsCardRow from './NewsCardRow';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <RandomImageGenerator /> */}
      <TopNav />
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <NewsCard />
        <NewsCardHalf />
        <NewsCardRow />
        <NewsCardRow />
        <NewsCardRow />
        <NewsCardRow />
        <NewsCardRow />
        <NewsCardRow />
        <NewsCardRow />
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  }
});
