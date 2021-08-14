import React, { Component } from "react";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Feedback from "./FeedbackComponent";
import { View, StyleSheet, Text, ScrollView, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import SafeAreaView from "react-native-safe-area-view";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation-tabs";

class HomeScreen extends Component {
  render() {
    return (
      <View style={StyleSheet.screens}>
        <Text>Home</Text>
        <Button
          color="#00c7ff"
          title="Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

class AboutScreen extends Component {
  render() {
    return (
      <View style={StyleSheet.screens}>
        <Text>About</Text>
        <Button
          title="About"
          color="#00c7ff"
          onPress={() => this.props.navigation.navigate("About")}
        />
      </View>
    );
  }
}

class FeedbackScreen extends Component {
  render() {
    return (
      <View style={StyleSheet.screens}>
        <Text>Feedback</Text>
        <Button
          title="Feedback"
          color="#00c7ff"
          onPress={() => this.props.navigation.navigate("Feedback")}
        />
      </View>
    );
  }
}

const TabNav = createBottomTabNavigator(
  {
    Home: { screen: Home },
    About: { screen: About },
    Feedback: { screen: Feedback },
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "#00c7ff",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 16,
        marginBottom: 10,
      },
      // style: {
      //   backgroundColor: "blue",
      // },
    },
  }
);

const styles = StyleSheet.create({
  screens: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default createAppContainer(TabNav);
