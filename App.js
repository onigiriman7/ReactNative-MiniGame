import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import {
  Provider as PaperProvider,
  Button as Button2
} from "react-native-paper";
import DisplayImage from "./components/DisplayImage";
import ResultImage from "./components/ResultImage";
import CompButtons from "./components/CompButtons";
import * as Animatable from "react-native-animatable";
import * as Font from "expo-font";

export default function App() {
  return (
    <View style={styles.container}>
      <Selection />
    </View>
  );
}

const Selection = () => {
  const [p1choice, setP1choice] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  const selectables = ["rock", "paper", "scissors"];
  const handleButtonClick = () => {
    setShowAnimation(false);
  };

  const compChoice = selectables[Math.floor(Math.random() * 3)];

  return (
    <ImageBackground
      source={{
        uri:
          "https://lh3.googleusercontent.com/proxy/RpnDwk2TuUPjQhAB0P-GP3qH3U0uO1QrZHyfx1Qy33y854ZSkfQhIuYAh7DGeu3oODM-oVW7_XB9G7GpRPwbLyl91wPHHPSXJfslMPsq7D1ouUjTF7MjEBCl2iYd"
      }}
      style={{ width: "100%", height: "100%", zIndex: -999 }}
    >
      {showAnimation ? (
        <PaperProvider>
          <View
            style={{
              position: "relative"
            }}
          >
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
              easing="ease-out"
              direction="alternate"
            >
              <Button2
                icon={() => (
                  <Image
                    source={require("./images/stone-clip-3.png")}
                    style={{ marginLeft: -48, width: 130, height: 130 }}
                  />
                )}
                style={{
                  width: 130,
                  marginTop: 70,
                  left: "13%",
                  marginLeft: 10
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
              direction="alternate"
            >
              <Button2
                icon={() => (
                  <Image
                    source={{
                      uri:
                        "https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png"
                    }}
                    style={{ marginLeft: -45, width: 130, height: 120 }}
                  />
                )}
                style={{
                  paddingBottom: 20,
                  width: 130,
                  left: "55%",
                  marginTop: 50
                }}
                onPress={() => {
                  handleButtonClick();
                  setP1choice(selectables[1]);
                }}
              ></Button2>
            </Animatable.View>
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
              easing="ease-out"
              direction="alternate"
            >
              <Button2
                icon={() => (
                  <Image
                    source={require("./images/clipart-scissors-cartoon-14.png")}
                    style={{
                      marginLeft: -48,
                      width: 130,
                      height: 120
                    }}
                  />
                )}
                style={{
                  width: 130,

                  left: "13%"
                }}
                onPress={() => {
                  handleButtonClick();
                  setP1choice(selectables[2]);
                }}
              ></Button2>
            </Animatable.View>
          </View>
        </PaperProvider>
      ) : (
        <AnimationScreen
          p1choice={p1choice}
          compChoice={compChoice}
          reset={() => {
            setShowAnimation(true);
          }}
        />
      )}
    </ImageBackground>
  );
};

const AnimationScreen = props => {
  //images for scissors rock & paper

  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      antonFont: require("./assets/fonts/Anton.ttf"),
      "8bit": require("./assets/fonts/PressStart2P-Regular.ttf"),
      geostar: require("./assets/fonts/GeostarFill-Regular.ttf")
    });
  }, []);

  return (
    <PaperProvider>
      {showResult ? (
        <ImageBackground
          source={{
            uri:
              "https://image.freepik.com/free-photo/blue-gradient-blurred-abstract-background_3248-2643.jpg"
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <ResultScreen
            p1choice={props.p1choice}
            compChoice={props.compChoice}
            reset={props.reset}
            goback={() => {
              setShowResult(false);
            }}
          />
        </ImageBackground>
      ) : (
        <Animatable.View animation="fadeIn" easing="ease-in" duration={500}>
          <ImageBackground
            source={require("./images/83461e4c-5dda-47f7-a157-c5f9fc062eff.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <Animatable.View
              animation="fadeInLeft"
              easing="ease-in"
              duration={500}
              delay={500}
            >
              <Image
                source={{
                  uri:
                    "https://thumbs.gfycat.com/UnfinishedDishonestAmericanriverotter-max-1mb.gif"
                }}
                style={{
                  width: 300,
                  height: 300,
                  marginTop: -10,
                  marginLeft: -100
                }}
              />
            </Animatable.View>
            <CompButtons />
            <Animatable.View animation="bounceIn" easing="ease-in" delay={2500}>
              <Button2
                style={{
                  left: "30%",
                  marginTop: -45,
                  width: 140,
                  height: 140,
                  backgroundColor: "red",
                  borderRadius: 100,
                  paddingTop: 55
                }}
                mode="contained"
                onPress={() => {
                  setShowResult(true);
                }}
              >
                <Text style={{ fontSize: 20, fontFamily: "8bit" }}>FIGHT</Text>
              </Button2>
            </Animatable.View>
          </ImageBackground>
        </Animatable.View>
      )}
    </PaperProvider>
  );
};
const ResultScreen = props => {
  var player = props.p1choice;
  var comp = props.compChoice;
  var resultTexts = ["DRAW", "Player wins", "Computer Wins"];

  return (
    <View>
      <Text style={{ fontSize: 30, color: "transparent" }}>Hidden mEssage</Text>
      <Animatable.View animation="fadeInDown" easing="ease-in" duration={500}>
        <DisplayImage playerImage={player} />
      </Animatable.View>
      <Animatable.View
        animation="bounceIn"
        easing="ease-in"
        duration={500}
        delay={1000}
      >
        <ResultImage resText={resultTexts} player={player} comp={comp} />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" easing="ease-in" duration={500}>
        <DisplayImage compImage={comp} />
      </Animatable.View>

      <Button2
        style={{
          left: "29%",
          top: "10%",
          width: 150,
          backgroundColor: "red"
        }}
        mode="contained"
        onPress={() => {
          props.reset();
        }}
      >
        <Text style={{ fontFamily: "antonFont", fontSize: 20 }}>
          {" "}
          Play Again
        </Text>
      </Button2>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
