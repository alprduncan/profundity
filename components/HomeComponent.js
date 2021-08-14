import React, { Component } from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { PROMPTS } from "./PromptsArray";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionPrompts: PROMPTS,
      showPrompt: " ",
    };
  }
  generatePrompt = () => {
    const RandomPrompt =
      this.state.questionPrompts[Math.floor(Math.random() * PROMPTS.length)];

    this.setState({
      showPrompt: RandomPrompt,
    });
  };
  //  QuestionOnClick () => {
  //   const randomPrompt = PROMPTS[Math.floor(Math.random() * PROMPTS.length)];
  //   return (
  //     console.log(randomPrompt)
  //     <FlatList
  //       data={props.PROMPTS}
  //       />
  //   );
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.text}>{this.state.showPrompt}</Text>
        <Button
          title="Let's Go Deep."
          style={styles.button}
          color="#00c7ff"
          onPress={this.generatePrompt}
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  // not working correctly need to align on bottom
  button: {
    color: "#00c7ff",
    position: "absolute",
    bottom: 35,
  },
});
