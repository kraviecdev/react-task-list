import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";
import { IconBody, SwitchBody } from "./styled";
import { Paragraph } from "../../Paragraph";
import { Button } from "../../Button";

const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(toggleTheme())}
    >
      <Paragraph menu>
        Dark mode {isDarkTheme ? "on" : "off"}
      </Paragraph>
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