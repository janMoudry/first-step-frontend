import AsyncStorage from "@react-native-community/async-storage";
import { DevSettings } from "react-native";

export const saveItemFromStorage = async (id: string, item: any) => {
  await AsyncStorage.setItem(id, item);
  console.log("Item is saved");
};

export const loadItemFromStorage = async (id: string, setLoad) => {
  const item = await AsyncStorage.getItem(id);
  console.log("Item is loaded");
  setLoad(true);
  return item;
};

export const getLanguage = async () => {
  try {
    const item = await AsyncStorage.getItem("language");
    console.log("Language is load", item);
    return item;
  } catch (err) {
    console.log(err);
  }
};

export const setLanguage = async (text: string) => {
  const currentLanguage = await getLanguage();
  console.log(currentLanguage, text);

  currentLanguage !== text
    ? (await AsyncStorage.setItem("language", text),
      console.log("language is saved to", text),
      DevSettings.reload())
    : alert("this language is alredy set");
};

export const initialStorage = async () => {
  const language = await getLanguage();
  const theme = await getTheme();

  if (theme === null) {
    await setTheme("light");
  }

  if (language === null || !language) {
    await setLanguage("eng");
    DevSettings.reload();
  }
};

export const setTheme = async (theme: string) => {
  const currentTheme = await getTheme();

  if (theme !== currentTheme) {
    await AsyncStorage.setItem("theme", theme);
    console.log("theme saved to:", theme);
    DevSettings.reload();
  }
};

export const getTheme = async () => {
  const theme = await AsyncStorage.getItem("theme");
  console.log("theme is loaded:", theme);

  return theme;
};

export const logIn = async (username, password, stayLogged) => {
  console.log(username, password);

  if (username || password) {
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("password", password);
    await AsyncStorage.setItem("stayLogged", `${stayLogged}`);
  }
  return "succesful";
};

export const isLoged = async () => {
  const username = await AsyncStorage.getItem("username");
  const password = await AsyncStorage.getItem("password");
  const stayLogged = await AsyncStorage.getItem("stayLogged");

  return { username: username, password: password, stayLogged: stayLogged };
};

export const logout = async () => {
  await AsyncStorage.setItem("username", "");
  await AsyncStorage.setItem("password", "");
  await AsyncStorage.setItem("stayLogged", "");
  DevSettings.reload();
};
