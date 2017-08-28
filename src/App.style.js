import styled from 'styled-components'
import { Container,Input } from 'semantic-ui-react'

export const DisplayResult = styled(Input)`
 
`

export const MainContainer = styled(Container)`
    margin:150px auto;
    width:800px !important;
    padding:0 40px 40px;
    text-align:center;
`

export const Keyboard = styled.div`
    display:table;
    border-spacing: 3px;
    margin-top:25px;

`

export const Row = styled.div`
`

export const KeyButton = styled.li`
    display:table-cell;
    width:60px;
    height:40px;
    color: #fff;
    font-size: 1em;
    font-weight: lighter;
    text-align: center;
    background-color: #424949 ;
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;
    transition:.3s;
    border-radius:.25em;
    
    &:hover {
        background-color:black;
        
    }
`

export const List = styled.ul`
    list-style:none;
    margin: -5px 0;
    padding: 0;
`

export const Title = styled.h1`
    color:  #424949 ;
    font-size:1.25em;
`

export const Spacer = styled.li`


`