import styled from "styled-components"
import theme from "../json/theme.json"

export const BioContainer = styled.section`
text-align: center;
background-color: ${theme.color4}
color: ${theme.color2}
width: 90%;
margin: auto;
`

export const BioImage = styled.img`
width: 35%;
object-fit: cover;
border-radius: 50px;
max-width: 400px;
`