import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Experience } from "@components/sections/Experience";
import { UI } from "@components/canvas/UI";
import {
  AchievementContainer,
  CanvasWrapper,
  AchievementInnerContainer,
  Title,
  Description,
} from "@styles/sections/AchievementSectionStyle";

const AchievementSections: React.FC = () => {
  const [cameraPosition, setCameraPosition] = useState(6);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCameraPosition(window.innerWidth > 800 ? 3 : 5);
    }
  }, []);

  return (
    <AchievementContainer id="achievements">
      <Title>Achievements</Title>
      <Description>A Glimpse of My Achievements So Far</Description>
      <AchievementInnerContainer>
        <UI />
        <CanvasWrapper>
          <Loader containerStyles={{ width: "100%", height: "100%" }} />
          <Canvas
            shadows
            style={{ width: "100%", height: "100%" }}
            camera={{
              position: [-0.5, 1, cameraPosition],
              fov: 45,
            }}
          >
            <group position-y={0}>
              <Suspense fallback={null}>
                <Experience />
              </Suspense>
            </group>
          </Canvas>
        </CanvasWrapper>
      </AchievementInnerContainer>
    </AchievementContainer>
  );
};

export default AchievementSections;
