import React from 'react'

import styled from 'styled-components'
import HighlightText from '../../components/HighlightText';

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-top: 20%;
    border: 15px solid #66ccff;
    justify-content: space-around;
    font-size: 80%;

    @media only screen and (min-width: 600px) {
        margin-top: 50px;
    }

    @media only screen and (min-width: 800px) {
        font-size: 90%;
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 100px;
        font-size: 100%;
    }
`

const ContainerTitle = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: max-content;
    margin: 25px;
    text-align: center;
`

const Header = styled.div`
    font-size: 1.25em;
    text-transform: uppercase;
`

const List = styled.div`
`

const ListItem = (props) => {
    return (
        <HighlightText color="#66ccff" display="table" size="1em" margin="5px auto">{props.children}</HighlightText>
    )
}

const Experience = (props) => {
    return (
        <Container>
            <ContainerTitle>
                <HighlightText>Experience:</HighlightText>
            </ContainerTitle>
            <Wrapper>
                <Header>Programming <br/> Languages_</Header>
                <List>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>C#</ListItem>
                    <ListItem>Java</ListItem>
                    <ListItem>C++</ListItem>             
                </List>
            </Wrapper>
            <Wrapper>
                <Header>Web Technologies_</Header>
                <List>
                    <ListItem>React.js</ListItem>
                    <ListItem>Exress.js</ListItem>
                    <ListItem>Node.js</ListItem>
                    <ListItem>ASP.NET Core 2</ListItem>
                    <ListItem>Wordpress</ListItem>
                </List>
            </Wrapper>
            <Wrapper>
                <Header>Databases_</Header>
                <List>
                    <ListItem>MongoDB</ListItem>
                    <ListItem>SQL Server</ListItem>
                    <ListItem>MySQL</ListItem>
                    <ListItem>PostgreSQL</ListItem>
                    <ListItem>Oracle</ListItem>
                </List>
            </Wrapper>
            <Wrapper>
                <Header>Platforms/ <br/> Libraries_</Header>
                <List>
                    <ListItem>Twilio</ListItem>
                    <ListItem>Three.js</ListItem>
                    <ListItem>Arduino</ListItem>
                </List>
            </Wrapper>
        </Container>
    )
}

export default Experience;