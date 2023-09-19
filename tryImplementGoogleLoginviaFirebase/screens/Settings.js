import { signOut } from "firebase/auth";
import { Button, Text, SafeAreaView } from "react-native";
import { auth } from "../firebaseConfig";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings() {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <Button
        title="Sign Out"
        onPress={async () => {
          await signOut(auth);
          await ReactNativeAsyncStorage.removeItem("@user");
        }}
      />
    </SafeAreaView>
  );
}