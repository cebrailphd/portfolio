import Chess from "./Chess";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function About() {
  return (
    <>
      <h1 className="text-5xl">About Me</h1>
      <div id="canvas-container">
        <Canvas>
          <Sphere />
          <ambientLight intensity={0.1} />
        </Canvas>
      </div>
      <Chess />
    </>
  );
}

export default About;
