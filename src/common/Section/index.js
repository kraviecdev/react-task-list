import { StyledSection, StyledSectionHeader, StyledSubheader } from "./styled";

const Section = ({ title, additionalContent, body, additionalBody, additionalSection }) => {
    return (
        <>
            <StyledSection>
                <StyledSectionHeader>
                    <StyledSubheader>{title}</StyledSubheader>
                    {additionalContent}
                </StyledSectionHeader>
                {body}
            </StyledSection>
            {additionalSection && (
                < StyledSection additionalSection>
                    {additionalBody}
                </StyledSection>
            )}
        </>
    )
};

export default Section;