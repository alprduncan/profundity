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
      </View>
    );
  }
}

class AboutScreen extends Component {
  render() {
    return (
      <View style={StyleSheet.screens}>
        <Text>About</Text>
      </View>
    );
  }
}

class FeedbackScreen extends Component {
  render() {
    return (
      <View style={StyleSheet.screens}>
        <Text>Feedback</Text>
      </View>
    );
  }
}

const TabNav = createBottomTabNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Feedback: FeedbackScreen,
  },
  {
    initialRouteName: "Home",
    drawerBackgroundColor: "#000",
  }
);

const styles = StyleSheet.create({
  screens: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default createAppContainer(TabNav);
