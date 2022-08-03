import { TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import MarkdownModal from "./MarkdownModal";

const TextItem = ({ text, onPress }) => {
  const [isVisited, setVisited] = useState(false);
  const [isTogged, setTogged] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress;
        setTogged(true);
        setVisited(true);
      }}
    >
      <Text
        style={{
          fontFamily: "Baloo2-Regular",
          textAlign: "center",
          color: isVisited ? "grey" : "blue",
          textDecorationLine: "underline",
        }}
      >
        {text}
      </Text>
      <MarkdownModal
        onClose={() => setTogged(false)}
        isTogged={isTogged}
        file={""}
        title={text}
      />
    </TouchableOpacity>
  );
};

export default TextItem;
