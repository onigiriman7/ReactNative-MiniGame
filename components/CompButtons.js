import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import { Button as Button2 } from "react-native-paper";
import * as Animatable from "react-native-animatable";

export default function CompButtons() {
  return (
    <View
      style={{
        position: "absolute",

        left: "60%",
        marginLeft: 60,
        zIndex: 999
      }}
    >
      <Animatable.View
        animation="fadeInRight"
        easing="ease-in"
        duration={500}
        delay={1000}
      >
        <Image
          source={{
            uri: "https://media0.giphy.com/media/gSz2mQ7HcTYru/200w.gif"
          }}
          style={{ marginLeft: -20, width: 100, height: 100, marginTop: 350 }}
        />
      </Animatable.View>
    </View>
  );
}
