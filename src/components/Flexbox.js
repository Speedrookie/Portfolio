import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

const Flexbox = (props) => {
    <Container>
        {props.children}
    </Container>
}

export default Flexbox;