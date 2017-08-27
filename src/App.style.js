import styled from 'styled-components'
import { Button,Container } from 'semantic-ui-react'

export const MainContainer = styled(Container)`
    margin:200px auto;
    width:900px !important;
    padding:0 40px 40px;
    text-align:center;
`

export const Keyboard = styled.div`
    display:table;
    border-spacing: 5px;

`

export const Row = styled.div`



`

export const KeyButton = styled.li`
    display:table-cell;
    width:86px;
    height:65px;
    color: #fff;
    font-size: 1.25em;
    font-weight: lighter;
    text-align: center;
    background: gray;
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;

`

export const List = styled.ul`
    list-style:none;
    margin: -5px 0;
    padding: 0;

`