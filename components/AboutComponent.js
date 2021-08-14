import React, { Component } from "react";
import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

export default class About extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Card style={styles.title} title="About US">
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Card>
      </View>
    );
  }
}

// export default class MyProject extends Component {
//   constructor() {
//     super();

//     this.state = {
//       // This is our Default number value
//       NumberHolder: 1,
//     };
//   }

//   GenerateRandomNumber = () => {
//     var RandomNumber = Math.floor(Math.random() * 100) + 1;

//     this.setState({
//       NumberHolder: RandomNumber,
//     });
//   };

//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <Text style={{ marginBottom: 10, fontSize: 20 }}>
//           {this.state.NumberHolder}
//         </Text>

//         <Button
//           title="Generate Random Number"
//           onPress={this.GenerateRandomNumber}
//         />
//       </View>
//     );
//   }
//}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#00c7ff",
  },
});
