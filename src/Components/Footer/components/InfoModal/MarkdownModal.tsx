import { Modal, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MarkdownModal = ({ onClose, file, title, isTogged }) => {
  return (
    <Modal animationType="slide" visible={isTogged}>
      <Text
        style={{
          marginBottom: 20,
          alignSelf: "center",
          fontFamily: "Baloo2-Bold",
          fontSize: 20,
          marginTop: 10,
          marginHorizontal: 40,
        }}
      >
        {title}
      </Text>
      <ScrollView>
        <Text style={{ paddingHorizontal: 10, fontFamily: "Baloo2-Regular" }}>
          Here will be markdown file
          {markdownTest}
        </Text>
      </ScrollView>
      <Icon
        name="close"
        size={40}
        style={{ right: 5, position: "absolute", top: 5 }}
        onPress={onClose}
      />
    </Modal>
  );
};

export default MarkdownModal;

const markdownTest =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Fusce suscipit libero eget elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Nullam rhoncus aliquam metus. Integer lacinia. Fusce aliquam vestibulum ipsum. Nullam faucibus mi quis velit. Vestibulum fermentum tortor id mi. Proin mattis lacinia justo. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Curabitur sagittis hendrerit anteFusce aliquam vestibulum ipsum. Etiam quis quam. Nullam rhoncus aliquam metus. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nunc auctor. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Etiam commodo dui eget wisi. Donec quis nibh at felis congue commodo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Praesent in mauris eu tortor porttitor accumsan. Fusce consectetuer risus a nunc.Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Suspendisse sagittis ultrices augue. Mauris dictum facilisis augue. Integer malesuada. Nulla non arcu lacinia neque faucibus fringilla. Donec vitae arcu. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Aliquam id dolor. Nullam dapibus fermentum ipsum. Nunc auctor. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Donec quis nibh at felis congue commodo. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nullam sit amet magna in magna gravida vehicula. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer in sapien. Mauris dictum facilisis augue. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit.Praesent vitae arcu tempor neque lacinia pretium. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nulla est. Pellentesque sapien. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Proin mattis lacinia justo. Etiam dictum tincidunt diam. Etiam neque. In enim a arcu imperdiet malesuada. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Duis risus. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Nulla non arcu lacinia neque faucibus fringilla. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Aenean id metus id velit ullamcorper pulvinarUt tempus purus at lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Praesent dapibus. Aliquam ornare wisi eu metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque porta. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Aliquam erat volutpat. Sed convallis magna eu sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Integer vulputate sem a nibh rutrum consequat. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Integer pellentesque quam vel velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam bibendum elit eget erat. Maecenas lorem. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.";
