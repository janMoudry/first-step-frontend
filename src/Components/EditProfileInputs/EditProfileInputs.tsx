import { Button } from "react-native";
import BasicInput from "./components/BasicInput";
import CustomDatePicker from "./components/DatePicker";
import DescriptionInput from "./components/DescriptionInput";
import HobbiesSelect from "./components/HobbiesSelect";

const EditProfileInputs = ({ type, onChange, label }) => {
  switch (type) {
    case "basic":
      return <BasicInput label={label} onChange={onChange} />;
    case "datePicker":
      return <CustomDatePicker label={label} onChange={() => {}} />;
    case "description":
      return <DescriptionInput label={label} onChange={onChange} />;
    case "hobbies":
      return <HobbiesSelect label={label} onChange={onChange} />;
    default:
      return null;
  }
};
export default EditProfileInputs;
