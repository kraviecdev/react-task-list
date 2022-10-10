import { StyledSection, StyledSectionHeader, StyledSubheader } from "./styled";

const Section = ({ title, additionalContent, body }) => {
    return (
        <>
            <StyledSection>
                <StyledSectionHeader>
                    <StyledSubheader>{title}</StyledSubheader>
                    {additionalContent}
                </StyledSectionHeader>
                {body}
            </StyledSection>
        </>
    )
};

export default Section;