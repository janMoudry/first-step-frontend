import React from "react";
import { TouchableOpacity, View } from "react-native";

import useLogicForBottomTabs from "./BottomTabs.logic";
import Hr from "../../Components/Hr";
import Icon from "react-native-vector-icons/FontAwesome";
import defaultStyles from "./BottomTab.style";
import { colors } from "../../Theme/Theme";

const NavigationTab = ({ state, description, navigation }) => {
  const { getIconByScreen } = useLogicForBottomTabs;

  const [currentScreen, setCurrentScreen] = React.useState({
    name: "Home",
  });

  return (
    <View style={defaultStyles.container}>
      {state.routes.map((screen) => (
        <TouchableOpacity
          key={screen.key}
          style={
            screen.name === currentScreen.name
              ? defaultStyles.innerContainerFocus
              : defaultStyles.innerContainer
          }
          onPress={() =>
            screen.name !== currentScreen.name &&
            (navigation.navigate(screen.name), setCurrentScreen(screen))
          }
        >
          <Icon
            name={getIconByScreen(screen.name)}
            size={screen.name === currentScreen.name ? 25 : 30}
            color={colors.textMain}
            style={{ backgroundColor: "transparent" }}
          />
          {screen.name === currentScreen.name && (
            <Hr marginTop={5} size={5} width={30} color={colors.textMain} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default NavigationTab;
