import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { colors, fontFamilies } from "../../Theme/Theme";

interface TableColomnProps {
  label: string;
  description?: string;
  onPress?: () => void;
  iconName?: string;
  iconDescription?: string;
}

const TableColomn = ({
  label,
  description,
  onPress,
  iconDescription,
  iconName,
}: TableColomnProps): React.ReactElement => (
  <>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        borderWidth: 1,
        padding: 10,
        margin: 10,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontFamily: fontFamilies.MainFamily,
          color: colors.textMain,
        }}
      >
        {label}
      </Text>
      {iconName ? (
        <TouchableOpacity
          onPress={onPress}
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {iconDescription && (
            <Text
              style={{
                fontFamily: fontFamilies.MainFamilyCursive,
                color: "grey",
              }}
            >
              {iconDescription}
            </Text>
          )}
          <Icon
            style={{ marginLeft: 10 }}
            name={iconName}
            size={30}
            color={colors.textMain}
          />
        </TouchableOpacity>
      ) : (
        <Text
          style={{
            fontSize: 15,
            fontFamily: fontFamilies.MainFamily,
            color: colors.textMain,
          }}
        >
          {description}
        </Text>
      )}
    </View>
  </>
);

export default TableColomn;
