import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

import { Camera, useCameraDevices } from "react-native-vision-camera";
import { colors, fontFamilies } from "../../../../Theme/Theme";

const MyCamera = ({
  isActive,
  closeCamera,
  setImage,
  setImageToSave,
  image,
}) => {
  const [deviceCamera, setDeviceCamera] = useState(null);
  const [localImage, setLocalImage] = useState(false);

  const camera = useRef<Camera>(null);

  const devices = useCameraDevices("wide-angle-camera");

  const [cameraRatationFront, setCameraRatationFront] = useState(true);
  let device = null;
  if (cameraRatationFront) {
    device = devices.front;
  } else {
    device = devices.back;
  }
  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    closeCamera();
    setImage(result);
    setImageToSave(result);

    await ImagePicker.launchCameraAsync();
  };

  const takePhoto = async () => {
    const takenPhoto =
      camera.current &&
      (await camera.current.takePhoto({
        qualityPrioritization: "balanced",
        flash: "auto",
      }));

    console.log(takenPhoto);

    setImage({ uri: `file://${takenPhoto.path}` });
    setImageToSave(takenPhoto);
    setLocalImage(true);
  };

  useEffect(() => {
    if (device !== null) {
      setDeviceCamera(device);
    }
  }, [device]);

  return !!deviceCamera && isActive ? (
    <>
      {!localImage ? (
        <>
          <Camera
            ref={camera}
            style={{ width: "100%", height: "100%", position: "absolute" }}
            device={deviceCamera}
            isActive={isActive}
            photo={true}
          />

          <View
            style={{
              position: "absolute",
              top: 0,
              height: "20%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: "20%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          />
          <TouchableOpacity
            style={{ position: "absolute", left: 10, top: 10 }}
            onPress={closeCamera}
          >
            <Icon name="arrowleft" size={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", right: 10, top: 10 }}
            onPress={() =>
              cameraRatationFront
                ? setCameraRatationFront(false)
                : setCameraRatationFront(true)
            }
          >
            <Icon name="sync" size={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", right: 10, bottom: 10 }}
            onPress={uploadImage}
          >
            <Icon name="folderopen" size={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "absolute",
              alignSelf: "center",
              bottom: 10,
              borderWidth: 5,
              borderColor: colors.backgroundMain,
              borderRadius: 50,
              padding: 8,
              backgroundColor: "rgba(0,0,0,0.5)",
              width: 70,
              height: 70,
            }}
            onPress={takePhoto}
          >
            {/* <Icon name="camera" size={40} color={"white"} /> */}
          </TouchableOpacity>
        </>
      ) : (
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <ImageBackground
            source={{ uri: `file://${image.path}` }}
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              height: "20%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: "20%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 10,
              alignSelf: "center",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
              onPress={closeCamera}
            >
              <Icon name="check" size={30} color={"white"} />
              <Text
                style={{
                  fontFamily: fontFamilies.MainFamily,
                  color: colors.backgroundMain,
                }}
              >
                Like it
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
              onPress={() => {
                setLocalImage(false), setImage(null);
              }}
            >
              <Icon name="close" size={30} color={"white"} />
              <Text
                style={{
                  fontFamily: fontFamilies.MainFamily,
                  color: colors.backgroundMain,
                }}
              >
                Dont like it
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  ) : null;
};

export default MyCamera;
