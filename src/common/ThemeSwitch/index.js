import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";
import { Button, Info, SwitchBody, IconBody} from "./styled";

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