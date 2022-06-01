import { StyledSection, StyledSectionHeader, StyledSubheader } from "./styled";

const Section = ({ title, additionalContent, body }) => (
    <StyledSection>
        <StyledSectionHeader>
            <StyledSubheader>{title}</StyledSubheader>
            {additionalContent}
        </StyledSectionHeader>
        {body}
    </StyledSection>
);

export default Section;