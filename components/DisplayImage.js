import React from "react";
import { Text, View, Image } from "react-native";

const DisplayImage = props => {
  var player = props.playerImage;
  var comp = props.compImage;
  switch (player || comp) {
    case "paper":
      return (
        <Image
          source={{
            uri:
              "https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png"
          }}
          style={{ left: "25%", width: 170, height: 160, top: "10%" }}
        />
      );

    case "rock":
      return (
        <Image
          source={{
            uri:
              "https://i.ya-webdesign.com/images/boulder-transparent-cartoon-6.png"
          }}
          style={{ left: "25%", width: 170, height: 160 }}
        />
      );
    case "scissors":
      return (
        <Image
          source={{
            uri:
              "https://www.freepngimg.com/thumb/scissor/36749-4-scissors-transparent-background-thumb.png"
          }}
          style={{ left: "25%", width: 170, height: 160, top: "20%" }}
        />
      );

    default:
      break;
  }
  return (
    <View>
      <Text>{player}</Text>
      <Text>{comp}</Text>
    </View>
  );
};

export default DisplayImage;
