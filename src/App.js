import React, { Component } from 'react';
import {MainContainer,Keyboard,KeyButton,Row,List} from './App.style'
import {Icon , Input , Divider} from 'semantic-ui-react'

export default class App extends Component {
  render() {

    const keys =  [[1,2,3,4,5,6,7,8,9,0],
                  ['q','w','e','r','t','y','u','i','o','p'],
                  ['a','s','d','f','g','h','j','k','l'],
                  ['z','x','c','v','b','n','m','_']]

    const firstRow = keys[0].map((key)=>
            <KeyButton>{key}</KeyButton>)

    const secondRow = keys[1].map((key)=>
            <KeyButton>{key}</KeyButton>)

    const thirdRow = keys[2].map((key)=>
            <KeyButton>{key}</KeyButton>)

    const fourthRow = keys[3].map((key)=>
            <KeyButton>{key}</KeyButton>)

    return (
      <div>
        <MainContainer>
          
            <h1>ENTER YOUR TWITTER HERE</h1>
            <p>Use your mouse (or tap the keyboard)... You'll be glad you did ! </p>
          
                <Input iconPosition='left' placeholder='Email'>
                      <Icon name='at' />
                      <input />
                </Input>

              <Divider />


             <Keyboard>
                <Row>
                  <List>
                   {firstRow}
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
                  </List>
                </Row>


             </Keyboard>
        </MainContainer>
      </div>
    );
  }
}
