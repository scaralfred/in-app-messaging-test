import React from 'react';
import {
  SafeAreaView, Text, View,
  
} from 'react-native';



export default App = () => {
  return (
    <SafeAreaView>
      <View style={{padding: 30}}>
        <Text style={{color: "#000", fontWeight: "bold", fontSize: 20}}>
          In-app-message content:
        </Text>
        <Text style={{color: "#000", marginVertical: 10}}>
          Here we should display the message content (JSON data is fine).
        </Text>
      </View>
    </SafeAreaView>
  );
}


