import about from "../json/about.json"
import { HeaderContainer, NavContainer, NavLinkWrapper} from "../styledcomponents/Header"



export default function Header (props){
    return <div>
        <HeaderContainer>
        <h1>MY PORTFOLIO</h1>
        <NavContainer>
            <NavLinkWrapper href="https://github.com/ChristianMp15">
                <div>Github</div>
            </NavLinkWrapper>
            <NavLinkWrapper href="https://www.linkedin.com/in/christian-mpabuka/">
                <div>LinkedIn</div>
            </NavLinkWrapper>
            <NavLinkWrapper href="https://docs.google.com/document/d/1jjj1FdL5tPOpmWaNY0HXD9jPgCoo6Q3LeYB-IgFWqAM/">
                <div>Resume</div>
            </NavLinkWrapper>
        
        </NavContainer>
        </HeaderContainer>

    </div>
}