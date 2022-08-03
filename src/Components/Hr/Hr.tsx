import React from "react";
import { View } from "react-native";

interface HrProps {
  width?: number | string;
  color?: string;
  size?: number;
  marginTop?: number;
}

const Hr = ({
  width = "100%",
  color = "white",
  size = 2,
  marginTop = 0,
}: HrProps): React.ReactElement => (
  <View
    style={{
      width: width,
      backgroundColor: color,
      height: size,
      marginTop: marginTop,
    }}
  />
);

export default Hr;
