import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";
import { IconBody, SwitchBody } from "./styled";
import { Button, Info } from "../styled";

const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(toggleTheme())}
    >
      <Info>
        Dark mode {isDarkTheme ? "on" : "off"}
      </Info>
      <SwitchBody>
        <IconBody
          active={isDarkTheme}
        >
        </IconBody>
      </SwitchBody>
    </Button>
  );
};

export default ThemeSwitch;