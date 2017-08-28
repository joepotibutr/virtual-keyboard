import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

export const MainContainer = styled(Container)`
    margin:200px auto;
    width:900px !important;
    padding:0 40px 40px;
    text-align:center;
`

export const Keyboard = styled.div`
    display:table;
    border-spacing: 3px;

`

export const Row = styled.div`



`

export const KeyButton = styled.li`
    display:table-cell;
    width:86px;
    height:65px;
    color: #fff;
    font-size: 1em;
    font-weight: lighter;
    text-align: center;
    background-color: dimgray;
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;
    transition:.3s;
    
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
    color:lightslategray;
`