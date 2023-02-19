import theme from "../json/theme.json"
import styled from "styled-components"

export const ProjectsContainer = styled.section`
display: flex;
flex-wrap: wrap;
padding: 10%;
justify-content: space-around;
background-color: ${theme.color2}
`

export const ProjectCard = styled.div`
width: 30%;
min-width:290px;
text-align: center;
margin: 10px;
background-color: ${theme.color2}
border-radius: 20px;
padding: 10px;
color: ${theme.color4}
border: 3px solid ${theme.color3};
`

export const ProjecctImage = styled.img`
width: 250px;
border-radius: 40px;
`

export const ProjectLink = styled.a`
width: 40%;
padding: 6px;
margin: 6px;
text-decoration: none;
font-size: 1.1em;
font-weight: 800;
background-color: ${theme.color2}
color: ${theme.color4}
&:hover {
    background-color: ${theme.color4};
    color: ${theme.color4}
}
`

export const ProjectsDescription = styled.p`
display: flex;
`

export const ProjectsLinkContainer = styled.div`
display: flex;
margin: auto;
justify-content: center;
`