import React, { Component } from "react";
import { ViewBase, StyleSheet, Text, ScrollView } from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Let's Go Deep!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#00c7ff",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textShadowColor: "white",
  },
});
