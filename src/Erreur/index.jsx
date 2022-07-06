import React from 'react'
import styled from 'styled-components'
import colors from '../utils/style/colors'

function Error() {
    return (
        <Content>
           <ErrorTitle>Oups... </ErrorTitle>
           <Image src='./asset/erreur-404.png'></Image>
           <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
          </ErrorSubtitle>
        </Content>
    )
}
 
export default Error

const Content = styled.div`
margin: 30px;
display: flex;
flex-direction: column;
background-color: ${colors.backgroundLight};
align-items: center;
padding: 60px 90px;
`
const ErrorTitle = styled.h1`
  font-weight: 300;
  color: ${colors.secondary};
`
const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`
const Image = styled.img`
  width: 400px;
  height: 400px;
   
`

