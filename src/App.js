import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import MainApp from "./screens/MainApp";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <>
      <MainApp />
      <AmplifySignOut />
    </>
  );
}

export default withAuthenticator(App);
