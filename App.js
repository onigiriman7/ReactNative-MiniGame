import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RNRestart from 'react-native-restart';
export default function App() {
  return (
    <View style={styles.container}>
      <Selection/>
    </View>
  );
}

const Selection = () => {
  //const [showP2, setShowP2] = useState(false);
  const [p1choice, setP1choice] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  const selectables = [
    "paper",
    "rock",
    "scissors"
  ]
  const handleButtonClick = () => {
     setShowAnimation(false)
     }
  const choices = selectables.map(choice => (
    <Button title={choice} onPress={() => {handleButtonClick();setP1choice(choice)}}/>
  ))
  const compChoice = selectables[Math.floor(Math.random() * 3)];
  
    return(
      <View>
        {showAnimation?
        <View>
          <Text>Select your choice!</Text>
          {choices}
        </View>: <AnimationScreen p1choice={p1choice} compChoice={compChoice}/>}
      </View>
    )
}

const AnimationScreen = (props) => {
  //images for scissors rock & paper
  console.log(props);
  const [showResult, setShowResult] = useState(false);
  return(
    <View>
      {showResult?<ResultScreen p1choice={props.p1choice} compChoice={props.compChoice}/>:<Button title="Check Result" onPress={()=>{setShowResult(true)}}/>}
    </View>
  )
}

const ResultScreen = ({p1choice, compChoice}) => {
  console.log(p1choice);
  return(
    <View>
    <Text>{p1choice}</Text> 
    <Button onPress={()=>{RNRestart.Restart();}} title="Play Again"/>
    </View>
  )
}
// selection screen // animation audio screen // results screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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