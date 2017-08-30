import React, { Component } from 'react';
import {MainContainer,Keyboard,KeyButton,Row,List,DisplayResult,Title} from './App.style'
import {Icon , Button ,Segment} from 'semantic-ui-react'

export default class App extends Component {
  constructor(props){
    super(props)  
    this.state = {value:""}
  }

   handleClick(char)  {
     if(char === 'clear'){
       this.setState({
         value:""
       })
     } else if (char !== 'del'){
      this.setState({
        value:  this.state.value += char
      })}
      else{
        this.setState({
          value:this.state.value.slice(0,-1)
        })
      }
      
    }
    handleChange(e){
      this.setState({value:e.target.value})
    }


  render() {

    const keys =  [[1,2,3,4,5,6,7,8,9,0],
                  ['q','w','e','r','t','y','u','i','o','p'],
                  ['a','s','d','f','g','h','j','k','l'],
                  ['z','x','c','v','b','n','m','_']]

    const firstRow = keys[0].map((char,index)=>
            <KeyButton key={index} onClick={this.handleClick.bind(this,char)}>{char}</KeyButton>)

    const secondRow = keys[1].map((char,index)=>
            <KeyButton key={index} onClick={this.handleClick.bind(this,char)}>{char}</KeyButton>)

    const thirdRow = keys[2].map((char,index)=>
            <KeyButton key={index} onClick={this.handleClick.bind(this,char)}>{char}</KeyButton>)

    const fourthRow = keys[3].map((char,index)=>
            <KeyButton key={index} onClick={this.handleClick.bind(this,char)}>{char}</KeyButton>)

    return (
      <div>
        
        <MainContainer fluid>
         
        <Segment raised>
         <Title>Virtual Keyboard</Title>
                <DisplayResult onChange={this.handleChange.bind(this)} value={this.state.value} 
                      iconPosition='left'>
                      <Icon name='at' />
                      <input />
                </DisplayResult>
          
             <Keyboard>
                <Row>
                  <List>
                   {firstRow}
                   <KeyButton onClick={this.handleClick.bind(this,'del')}>del</KeyButton>
                  </List>
                </Row>

                <Row>
                <List>
                {secondRow}
                  </List>
                </Row>

                <Row>
                <List>
                   {thirdRow}
                  </List>
                </Row>

                <Row>
                <List>
                   {fourthRow}
                   <KeyButton onClick={this.handleClick.bind(this,'clear')}>clear</KeyButton>
                  </List>
                </Row>


             </Keyboard>

             <a href="https://github.com/vchrpng/Virtual-Keyboard"><Button basic content="Source Code" icon='github'/></a>
            
            </Segment>
        </MainContainer> 
      </div>
    );
  }
}
