import { StyledSection } from "../../../common/Section/styled";
import Library from "../Library/Index";
import { ReactIcon } from "../Library/styled";
import { StyledLibrariesContainer } from "./styled";


const AppInfo = () => {
    return (
        <StyledSection additionalSection>
            <StyledLibrariesContainer>
                <Library
                    name={"React"}
                    icon={<ReactIcon />}
                    description={"A JavaScript library for building user interfaces"}
                />
            </StyledLibrariesContainer>
        </StyledSection>
    )
};

export default AppInfo;