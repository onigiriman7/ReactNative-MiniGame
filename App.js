import React, { useState, useEffect } from "react";
import CountDown from "react-native-countdown-component";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import RNRestart from "react-native-restart";
import {
  Provider as PaperProvider,
  Appbar,
  Card,
  Title,
  Paragraph,
  Avatar,
  Button as Button2
} from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <Selection />
    </View>
  );
}

const Selection = () => {
  //const [showP2, setShowP2] = useState(false);
  const [p1choice, setP1choice] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  const selectables = ["rock", "paper", "scissors"];
  const handleButtonClick = () => {
    setShowAnimation(false);
  };
  // const choices = selectables.map(choice => (
  //   <Button
  //     title={choice}
  //     onPress={() => {
  //       handleButtonClick();
  //       setP1choice(choice);
  //     }}
  //   />
  // ));
  const compChoice = selectables[Math.floor(Math.random() * 3)];

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%", backgroundColor: "lightblue" }}
    >
      {showAnimation ? (
        <PaperProvider>
          <Appbar.Header
            style={{ position: "relative", backgroundColor: "black" }}
          >
            <Appbar.Content
              title="Namaste Khiladi"
              style={{ position: "absolute", left: "26%" }}
            />
          </Appbar.Header>

          <View
            style={{
              position: "absolute",
              top: "38%",
              left: "33%",
              width: "150px"
            }}
          >
            <Button
              title={selectables[0]}
              onPress={() => {
                handleButtonClick();
                setP1choice(selectables[0]);
              }}
            ></Button>
          </View>
          <View
            style={{
              position: "absolute",
              top: "53%",
              left: "33%",
              width: "150px"
            }}
          >
            <Button
              title={selectables[1]}
              onPress={() => {
                handleButtonClick();
                setP1choice(selectables[1]);
              }}
            ></Button>
          </View>
          <View
            style={{
              position: "absolute",
              top: "70%",
              left: "33%",
              width: "150px"
            }}
          >
            <Button
              title={selectables[2]}
              onPress={() => {
                handleButtonClick();
                setP1choice(selectables[2]);
              }}
            ></Button>
          </View>
        </PaperProvider>
      ) : (
        <AnimationScreen p1choice={p1choice} compChoice={compChoice} reset={()=>{
          setShowAnimation(true);
        }}/>
      )}
    </ImageBackground>
  );
};

const AnimationScreen = props => {
  //images for scissors rock & paper
  console.log(props);
  const [showResult, setShowResult] = useState(false);
  const timer = () => {
    setTimeout(() => {
      setShowResult(true);
    }, 3000);
  };
 
  var mottos = [
    "If you want to achieve greatness stop asking for permission.",
    "Things work out best for those who make the best of how things work out.",
    "To live a creative life, we must lose our fear of being wrong.",
    "Trust because you are willing to accept the risk, not because it's safe or certain.",
    "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    "The ones who are crazy enough to think they can change the world, are the ones who do.",
    "The meaning of life is to find your gift. The purpose of life is to give it away."
  ];

  const randomMotto = mottos[Math.floor(Math.random() * mottos.length)];
  return (
    <PaperProvider>
      {showResult ? (
        <ResultScreen p1choice={props.p1choice} compChoice={props.compChoice} reset={props.reset}
        goback={()=>{
          setShowResult(false);
        }}/>
      ) : (
        <View>
          <Appbar.Header
            style={{ position: "relative", backgroundColor: "black" }}
          >
            <Appbar.Content
              title="Waiting Section"
              style={{ position: "absolute", left: "26%" }}
            />
          </Appbar.Header>
          <Card
            style={{
              marginTop: "130px",
              position: "relative",
              width: "100%",
              padding: "10px",
              height: "230px"
            }}
          >
            <Avatar.Image
              style={{ position: "absolute", left: "35%" }}
              size={114}
              source={
                "https://1.bp.blogspot.com/-c6JkYb7CMYk/VCs9OoGlvrI/AAAAAAAAAsY/pk05iUDSc4w/s1600/anzai-sensei.png"
              }
            />
            <Card.Content style={{ position: "absolute", top: "67%" }}>
              <Paragraph style={{ textAlign: "center", fontWeight: "900" }}>
                {randomMotto}
              </Paragraph>
            </Card.Content>
          </Card>
          <Button2
            style={{
              width: "200px",
              position: "absolute",
              left: "26%",
              marginTop: "450px"
            }}
            mode="contained"
            onPress={() => {
              timer();
            }}
          >
            Check Result
          </Button2>
        </View>
      )}
    </PaperProvider>
  );
};
//-----------------------------DONT CHANGE ANYTHING BELOW
//-----------------------------------------------------------------------------------------------------------------------
const ResultScreen = (props) => {
  console.log(props);
  var player = props.p1choice;
  var comp = props.compChoice;
  var resultTexts = ["DRAW","Player wins", "Computer Wins"];
  
  var result = () =>{
    if(player===comp){
      return 0;
    }
    else{
      switch(player){
        case "paper":
          return (comp==="rock"?1:2);
         
        case "rock":
          return (comp==="scissors"?1:2);
          
        case "scissors":
          return (comp==="paper"?1:2);
      }
    }
  };
  return (
    <PaperProvider>
      <Appbar.Header dark={true}>
        <Appbar.Content title="Title" />
      </Appbar.Header>
      <Text>{resultTexts[result()]}</Text>
      <Button
        onPress={() => {
          props.reset();
        }}
        title="Play Again"
      />
      <Text>You selected: {player}</Text>
      <Text>Computer selected: {comp}</Text>
    </PaperProvider>
  );
};
// selection screen // animation audio screen // results screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

/*
const Rps = () =>{
  const selectables = [
    "paper",
    "rock",
    "scissors"
  ]
  const [p1choice, setP1choice] = useState("paper");
  const [p2choice, setP2choice] = useState("paper");
  
  return(
    <View>
  <P1 selectables={selectables} handleChoice={choice => {
      setP1choice(choice);
    }}/>
    <Text>{p1choice}</Text>
    {
      
    }
    <Text>{p2choice}</Text>
    <P2 selectables={selectables} handleChoice={choice => {
      setP2choice(choice);
    }}/>
    </View>
  )
}

const P1 = (props) => {
  const [selected,setSelected] = useState(props.selectables[0]);
  
  return(
    <View style={styles.container}>
      <Button title="paper" onPress={() => {props.handleChoice("paper")}}/><Button title="rock" onPress={() => {props.handleChoice("rock")}}/><Button title="scissors" onPress={() => {props.handleChoice("scissors")}} />
    </View>
  );
}

const P2 = (props) => {
  const [selected,setSelected] = useState(props.selectables[0]);
  return(
    <View style={styles.container}>
      <Button title="paper" onPress={() => {props.handleChoice("paper")}}/><Button title="rock" onPress={() => {props.handleChoice("rock")}} /><Button title="scissors" onPress={() => {props.handleChoice("scissors")}} />
    </View>
  );
}
*/
