import React from "react";
import { Text, View, Image } from "react-native";

const ResultImage = props => {
  var resultstext = props.resText;
  var player = props.player;
  var comp = props.comp;

  var result = () => {
    if (player === comp) {
      return 0;
    } else {
      switch (player) {
        case "paper":
          return comp === "rock" ? 1 : 2;

        case "rock":
          return comp === "scissors" ? 1 : 2;

        case "scissors":
          return comp === "paper" ? 1 : 2;
      }
    }
  };

  switch (resultstext[result()]) {
    case "Player wins":
      return (
        <Image
          source={{
            uri:
              "https://steamuserimages-a.akamaihd.net/ugc/919166841051319654/3ECB7F32D14B5BDC99E97BAAEDF69E370E0843B8/"
          }}
          style={{ width: 130, height: 80, left: "30%", top: "20%" }}
        />
      );
    case "Computer Wins":
      return (
        <Image
          source={{
            uri:
              "https://lh3.googleusercontent.com/proxy/CN1keLMhcAddaT4gSL72PgK4p62ApbL4RQTVnVdahWIWKrNZqMnLQ0w4ZXDQMc2qbQ3YL-X5vQdoo-f7Bfos3r9bBgjw60jmHPd3lz50mZY1sojAjsdJ"
          }}
          style={{ width: 150, height: 100, left: "28%", top: "28%" }}
        />
      );
    case "DRAW":
      return (
        <Text
          style={{
            fontSize: 50,
            top: "35%",
            textAlign: "center",
            color: "white",
            fontFamily: "8bit"
          }}
        >
          DRAW
        </Text>
      );

    default:
      break;
  }
  return (
    <View>
      <Text
        style={{
          left: "30%",
          top: "40%"
        }}
      >
        {resultstext[result()]}
      </Text>
    </View>
  );
};

export default ResultImage;
