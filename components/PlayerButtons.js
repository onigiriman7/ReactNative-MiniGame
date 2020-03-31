import React, { useState } from "react";
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

const PlayerButtons = props => {
  const [p1choice, setP1choice] = useState(props);
  const [showAnimation, setShowAnimation] = useState(true);
  const selectables = props.selectables;
  const handleButtonClick = () => {
    setShowAnimation(false);
  };
  return (
    <View
      style={{
        position: "absolute",

        left: "3%",

        zIndex: 999
      }}
    >
      <Animatable.View
        animation="pulse"
        iterationCount="infinite"
        easing="ease-out"
      >
        <Button2
          icon={() => (
            <Image
              source={require("../images/law-transparent-cartoon-14.png")}
              style={{ marginLeft: -35, width: 100, height: 90 }}
            />
          )}
          style={{
            paddingBottom: 20,
            width: 100,
            zIndex: 999
          }}
          onPress={() => {
            handleButtonClick();
            setP1choice(selectables[0]);
          }}
        ></Button2>
      </Animatable.View>
      <Animatable.View
        animation="pulse"
        iterationCount="infinite"
        easing="ease-out"
      >
        <Button2
          icon={() => (
            <Image
              source={require("../images/clipart-scissors-cartoon-14.png")}
              style={{ marginLeft: -35, width: 100, height: 90 }}
            />
          )}
          style={{
            paddingBottom: 20,
            width: 100,
            zIndex: 999
          }}
        ></Button2>
      </Animatable.View>
      <Animatable.View
        animation="pulse"
        iterationCount="infinite"
        easing="ease-out"
      >
        <Button2
          icon={() => (
            <Image
              source={require("../images/stone-clip-3.png")}
              style={{ marginLeft: -35, width: 100, height: 100 }}
            />
          )}
          style={{
            width: 100,
            zIndex: 999
          }}
        ></Button2>
      </Animatable.View>
      <Animatable.View
        animation="fadeInRight"
        easing="ease-in"
        duration={500}
        delay={500}
      >
        <Image
          source={{
            uri: "https://media0.giphy.com/media/gSz2mQ7HcTYru/200w.gif"
          }}
          style={{ marginLeft: -40, width: 150, height: 150, marginTop: 120 }}
        />
      </Animatable.View>
    </View>
  );
};

export default PlayerButtons;
