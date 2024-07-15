import React, { Component } from "react";
import { View, Text, Button } from "react-native";


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: "",
     
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(name){
    this.setState({
      name: name
    })
  }

  render(){
    return(
      <View style={{ marginTop: 50 }}>

        <Button title="Entrar" onPress={ ()=> this.entrar('Aldair')}/>
        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center'}}>
           {this.state.name}
           </Text>
      </View>
    );
  }
}