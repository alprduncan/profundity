import React, { Component } from "react";
import { Text, ScrollView, StyleSheet, View, TextInput } from "react-native";
import { Card, Button, Icon, Input, CheckBox } from "react-native-elements";
import * as MailComposer from "expo-mail-composer";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remember: false,
      name: "",
      email: "",
      text: "",
    };
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  sendMail() {
    MailComposer.composeAsync({
      recipients: ["mail@profundity.com"],
      subject: "Feedback",
      body: "To whom it may concern:",
    });
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 20 }}>
        <Card style={styles.MainContainer} title="Send Us Your Feedback">
          <Text>We'd love to hear from you</Text>
          <Text>Email: mail@profundity.com</Text>
        </Card>
        <Card>
          <View style={styles.container}>
            <Input
              placeholder="Your Name"
              leftIcon={{ type: "font-awesome", name: "user-o" }}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.name}
            />
            <Input
              placeholder="Your Email"
              leftIcon={{ type: "font-awesome", name: "envelope" }}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.name}
            />
            <TextInput
              style={styles.input}
              placeholder="Feedback"
              leftIcon={{ type: "font-awesome", name: "envelope" }}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.text}
            />
            <CheckBox title="New User" center checked={this.state.remember} />
            <CheckBox
              title="Current User"
              center
              checked={this.state.remember}
            />

            <View style={styles.MainContainer}>
              <Button onPress={() => this.sendMail} title="Send" type="clear" />
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  input: {
    height: 40,
  },
});

export default Contact;
