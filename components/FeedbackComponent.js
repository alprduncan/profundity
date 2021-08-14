import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as MailComposer from "expo-mail-composer";

class Contact extends Component {
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
      <ScrollView>
        <Card title="Send Us Your Feedback" wrapperStyle={{ margin: 20 }}>
          <Text>We'd love to hear from you</Text>
          <Text>Email: campsites@nucamp.co</Text>
          <Button
            title="Send Email"
            buttonStyle={{ backgroundColor: "#fff", margin: 40 }}
            onPress={() => this.sendMail()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
