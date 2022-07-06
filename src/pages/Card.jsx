import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../utils/style/colors';

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
}

 
export default Card

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 320px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
const CardLabel = styled.span`   
color: #5843e4;
font-size: 20px;
font-weight: normal;
padding: 15px;
`
const CardImage = styled.img`
height: 130px;
width: 130px;
align-self: center;
border-radius: 50%;
`
const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`