// import { StatusBar } from 'react-native';
import { StatusBar, StyleSheet, Dimensions, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import TopNav from './components/TopNav';
import ListingGro from './components/ListingGro';
import SingleListing from './components/SingleListing';
import { app, common } from './components/styles';

export default function App() {
  return (
    <SafeAreaView style={app.container}>

      <ListingGro />
      {/* <SingleListing /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



