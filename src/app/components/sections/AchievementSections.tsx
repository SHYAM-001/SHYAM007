import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
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
  return (
    <AchievementContainer id="achievements">
      <Title>Achievements</Title>
      <Description>Some of the achievements so far till now.</Description>
      <AchievementInnerContainer>
        <UI />
        <CanvasWrapper>
          <Loader containerStyles={{ width: "100%", height: "100%" }} />
          <Canvas
            shadows
            style={{ width: "100%", height: "100%" }}
            camera={{
              position: [-0.5, 1, window.innerWidth > 800 ? 4 : 6],
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
