import React, { Component } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Let's Go Deep</Text>
        <Button
          title="Let's Go Deep."
          style={styles.button}
          onPress={() => {}}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#00c7ff",
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    color: "blue",
    alignItems: "baseline",
  },
});
