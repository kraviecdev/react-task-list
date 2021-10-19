import { StyledFooter } from "./styled";


const Footer = ({year, name}) => (
    <StyledFooter>
        {`Coded by`} {name} &copy; {year}
    </StyledFooter>
);

export default Footer;