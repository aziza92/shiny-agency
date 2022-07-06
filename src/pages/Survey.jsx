import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors';

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1

    return (
      <div>
         <Title> Question {questionNumber}</Title>
        <Question>
          Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?
        </Question>
       
        <StyledLink to={`/survey/${prevQuestionNumber}`} style={{padding: 5 }}>Précédent</StyledLink>
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <StyledLink to={`/survey/${nextQuestionNumber}`} style={{padding: 5 }}>Suivant</StyledLink>
      )}
      </div>
    )
  }
  export default Survey

  
  const Title = styled.h1`
  padding: 15px;
  font-size: 18px;
  text-align: center;
`
  const Question = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  `
  const StyledLink = styled(Link)`

  line-height: 50px;
  text-align: center;
  alignItems: "center"

  `

 