import { useRef, useState, useEffect } from "react";
import { Box, Environment, Html, OrbitControls } from "@react-three/drei";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Screen from "../../components/Screen/Screen";
import { CanvasContainer, Title } from "./Home.style";
import * as THREE from "three";
import { Suspense } from "react";
import StoneMaster from "../../components/Loading/StoneMaster";

const Home = () => {
  const [camVec, setCamVec] = useState("0");

  // const sendLoc = (v) => {
  //   console.log(v);
  // };

  // const controlsRef = useRef();

  // useEffect(() => {
  //   console.log(controlsRef.current.position0);
  // }, [controlsRef.current.position0]);
  //  <Title>.0.o0.</Title>;

  function CameraStuff() {
    const ref = useRef();
    const htmlRef = useRef();
    const boxRef = useRef();
    // useFrame(() => (ref.current.position0.x += 0.01));
    useFrame(
      // (state) =>
      (state) =>
        (boxRef.current.material.color.g = state.camera.position.y / 180) +
        (htmlRef.current.innerHTML = state.camera.position.y / 180)
      // console.log(state.camera.position.x)
    );

    const TESTMAT = new THREE.MeshPhysicalMaterial({
      color: "rgb(0,222,0)",
    });
    // return <Box ref={ref} />;
    useEffect(() => {
      console.log(boxRef.current.material.color.g);
    }, [boxRef]);

    return (
      <>
        <Box ref={boxRef} material={TESTMAT} args={[100, 100, 100]} />
        <Html ref={htmlRef}></Html>
        <OrbitControls ref={ref} />;
      </>
    );
  }

  return (
    <Screen>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo192.png`}
          alt=""
        />
      </div>
      <Title>.0.o0.</Title>;
      <CanvasContainer>
        <Canvas
          gl={{
            antialias: true,
          }}
          camera={{
            position: [0, 100, 500],
            fov: 30,
            far: 10000,
          }}
          colorManagement={true}
          dpr={(Math.min(window.devicePixelRatio), 2)}
        >
          {/* <CameraStuff /> */}

          <Suspense fallback={null}>
            <Environment preset="sunset" />
            <StoneMaster />

            <pointLight
              args={["#fff", 2, 100]}
              position={[2, 4, 0]}
              intensity={1}
            />
            <pointLight
              args={["#fff", 2, 100]}
              position={[1, 4, 5]}
              intensity={0.7}
            />

            {/* <Box
              args={[20, 600, 20]}
              position={[0, -90, 0]}
              material={
                new THREE.MeshPhysicalMaterial({
                  color: "#0666CC",
                })
              }
            /> */}
          </Suspense>
          <CameraStuff />
          {/* <OrbitControls
            ref={(el) => {
              console.log(el);
              // controlsRef.current = el;
              // setCamVec(el.current.position0.x);
            }}
          /> */}
          {/* <OrbitControls ref={controlsRef} /> */}
        </Canvas>
      </CanvasContainer>
    </Screen>
  );
};

export default Home;
