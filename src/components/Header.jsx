import about from "../json/about.json"
import { HeaderContainer, NavContainer } from "../styledcomponents/Header"



export default function Header (props){
    return <div>
        <HeaderContainer>
        <h1>MY PORTFOLIO</h1>
        <NavContainer>
            <a href="">
                <div>Github</div>
            </a>
            <a href="">
                <div>LinkedIn</div>
            </a>
        </NavContainer>
        </HeaderContainer>

    </div>
}