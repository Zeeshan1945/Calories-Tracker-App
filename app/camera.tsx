import { Ionicons } from "@expo/vector-icons";
import {
  CameraCapturedPicture,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

export default function CameraScreen() {
  const router = useRouter();
  const cameraRef = useRef<CameraView | null>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [isCapturing, setIsCapturing] = useState(false);
  const [isFlashOn, setIsFlashOn] = useState(false);

  useEffect(() => {
    if (permission && !permission.granted) {
      requestPermission();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permission]);

  if (!permission) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="#fff" />
        <Text className="text-white mt-4">Preparing camera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 items-center justify-center px-6 bg-[#0d0c12]">
        <Ionicons name="camera" size={48} color="#ff7557" />
        <Text className="text-white text-2xl font-semibold mt-4 text-center">
          Camera access needed
        </Text>
        <Text className="text-white/60 text-center mt-2">
          We use your camera to capture meals and give you instant insights.
        </Text>
        <TouchableOpacity
          className="mt-6 rounded-2xl bg-[#ff7557] px-8 py-4"
          onPress={requestPermission}
        >
          <Text className="text-white font-semibold text-lg">Allow Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mt-4" onPress={() => router.back()}>
          <Text className="text-white/60">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const navigateToDetails = (photo: CameraCapturedPicture | undefined) => {
    router.replace({
      pathname: "/meal-detail",
      params: {
        photoUri: photo?.uri ?? "",
      },
    });
  };

  const handleToggleFlash = () => {
    setIsFlashOn((prev) => !prev);
  };

  const handleCapture = async () => {
    if (isCapturing || !cameraRef.current) return;
    setIsCapturing(true);
    try {
      const photo = await cameraRef.current.takePictureAsync({
        skipProcessing: true,
        quality: 0.8,
      });
      navigateToDetails(photo);
    } catch (error) {
      console.warn("Failed to capture photo", error);
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <View className="flex-1 bg-black">
      {/* Camera */}
      <CameraView
        style={{ flex: 1 }}
        facing="back"
        ref={cameraRef}
        enableTorch={isFlashOn}
      />

      {/* Semi-transparent overlay */}
      <View
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
      />

      {/* Top bar */}
      <View className="absolute top-5 inset-x-0 px-6 flex-row items-center justify-between">
        <TouchableOpacity
          className="w-11 h-11 rounded-full bg-black/40 items-center justify-center border border-white/10"
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text className="text-white font-semibold text-lg">Capture Meal</Text>
        <TouchableOpacity
          className="w-11 h-11 rounded-full bg-black/40 items-center justify-center border border-white/10"
          onPress={handleToggleFlash}
        >
          <Ionicons
            name={isFlashOn ? "flash" : "flash-off"}
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Center frame */}
      <View className="absolute inset-0 items-center justify-center pointer-events-none">
        <View className="w-60 h-60 border-2 border-white/50 rounded-3xl" />
      </View>

      {/* Bottom capture button */}
      <View className="absolute bottom-16 inset-x-0 items-center">
        <TouchableOpacity
          className={`w-20 h-20 rounded-full border-[6px] border-white items-center justify-center ${
            isCapturing ? "opacity-70" : ""
          }`}
          activeOpacity={0.9}
          onPress={handleCapture}
          disabled={isCapturing}
        >
          <View className="w-16 h-16 rounded-full bg-white" />
        </TouchableOpacity>
        <Text className="text-white/80 mt-4 text-sm">
          Align your plate inside the frame
        </Text>
      </View>
    </View>
  );
}
