import { StyledSection } from "../../../common/Section/styled";
import Library from "../Library/Index";
import { PagesIcon, ReactIcon, ReduxIcon, RouterIcon, StyledComponentsIcon, StyledLibraryInfo } from "../Library/styled";
import { StyledLibrariesContainer } from "./styled";


const AppInfo = () => {
    return (
        <StyledSection additionalSection>
            <StyledLibrariesContainer>
                <Library
                    name={"React"}
                    icon={<ReactIcon />}
                    paragraph={
                        <StyledLibraryInfo>
                            A JavaScript library for building user interfaces.
                            <br />In application:
                            <br />&#9654; Components
                            <br />&#9654; Properties
                            <br />&#9654; useRef
                        </StyledLibraryInfo>}
                />
                <Library
                    name={"React-Redux"}
                    icon={<ReduxIcon />}
                    paragraph={
                        <StyledLibraryInfo>
                            A Predictable State Container for JS Apps.
                            <br />In application:
                            <br />&#9654; Reducers
                            <br />&#9654; useSelector
                            <br />&#9654; useDispatch
                            <br />&#9654; Saga
                        </StyledLibraryInfo>
                    }
                />
                <Library
                    name={"React-Router"}
                    icon={<RouterIcon />}
                    paragraph={
                        <StyledLibraryInfo>
                            A fully-featured client and server-side routing library for React.
                            <br />In application:
                            <br />&#9654; HashRouter
                            <br />&#9654; Custom NavLink
                        </StyledLibraryInfo>
                    }
                />
                <Library
                    name={"Github Pages"}
                    icon={<PagesIcon />}
                    paragraph={
                        <StyledLibraryInfo>
                            A static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub.
                            <br />In application:
                            <br />&#9654; Deployment
                        </StyledLibraryInfo>
                    }
                />
                <Library
                    name={"StyledComponents"}
                    icon={<StyledComponentsIcon />}
                    paragraph={
                        <StyledLibraryInfo>
                            A library for React & ReactNative that allows to use component-level styles in applications.
                            <br />In application:
                            <br />&#9654; Styled components
                            <br />&#9654; Theme & GlobalStyle
                            <br />&#9654; Icons
                        </StyledLibraryInfo>
                    }
                />
            </StyledLibrariesContainer>
        </StyledSection>
    )
};

export default AppInfo;