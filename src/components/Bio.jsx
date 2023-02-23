import about from "../json/about.json";
import { BioContainer, BioImage, BioBio, BioEmail } from "../styledcomponents/Bio";

export default function Bio(props) {
    return <BioContainer>
        <h1>{about.name}</h1>
        <BioImage src={about.image}/>
        <BioEmail>{about.email}</BioEmail>
        <BioBio>{about.bio}</BioBio>
    </BioContainer>
}