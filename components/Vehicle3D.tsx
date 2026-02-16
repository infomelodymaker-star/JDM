import * as THREE from "three";
import React, { Suspense, ErrorInfo, ReactNode } from "react";
import { Canvas, ThreeElements } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  PerspectiveCamera,
  useGLTF,
  Float,
  PresentationControls,
  Html,
  Stage,
} from "@react-three/drei";

// Augment the global JSX namespace
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      [key: string]: any;
    }
  }
}

/**
 * FIXED: The CDN link for the Land Cruiser model.
 * Using JSDelivr for better reliability and CORS support.
 */
// const MODEL_URL = "https://cdn.jsdelivr.net/gh/infomelodymaker-star/2018Toyota_LandCruiser_VR-v1@main/2018Toyota_LandCruiser_VR-v1.glb";

const MODEL_URL = '/lib/;

// Error Boundary for the 3D scene to prevent "Uncaught Error" crashes
interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Fixed: Explicitly using React.Component to ensure props and state are correctly typed and recognized by TypeScript.
class SceneErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("3D Model Loading Error (Handled):", error, errorInfo);
  }

  render() {
    // Fixed: Accessed this.props properly within a class component context.
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const CarModel: React.FC = () => {
  // useGLTF with 'true' to enable Draco/loader configuration as requested
  const { scene } = useGLTF(MODEL_URL, true);

  // Ensure the model casts and receives shadows
  React.useMemo(() => {
    scene.traverse((obj: any) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        // Ensure materials are set to double sided if needed for visibility
        if (mesh.material) {
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.side = THREE.DoubleSide;
        }
      }
    });
  }, [scene]);

  return (
    <group visible={true}>
      <primitive
        object={scene}
        // Rotation for a better initial view
        rotation={[0, -Math.PI / 4, 0]}
      />
    </group>
  );
};

// Premium Stylized Fallback: Rendered if the model fails to load
const StylizedVehicleFallback: React.FC = () => {
  return (
    <group position={[0, 0, 0]} visible={true}>
      {/* Sleek Aerodynamic Body */}
      <mesh castShadow>
        <boxGeometry args={[4.2, 0.5, 1.8]} />
        <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0.1} />
      </mesh>
      {/* Luxury Cabin Glass */}
      <mesh castShadow position={[0.2, 0.4, 0]}>
        <boxGeometry args={[2.2, 0.45, 1.6]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={1}
          roughness={0}
          transparent
          opacity={0.8}
        />
      </mesh>
      {/* Performance Wheels */}
      {[
        [-1.4, -0.3, 0.95],
        [1.4, -0.3, 0.95],
        [-1.4, -0.3, -0.95],
        [1.4, -0.3, -0.95],
      ].map((pos, i) => (
        <mesh
          key={i}
          position={pos as [number, number, number]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.45, 0.45, 0.35, 32]} />
          <meshStandardMaterial
            color="#050505"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

const Loader: React.FC = () => (
  <Html center>
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-red-600/20 rounded-full"></div>
        <div className="absolute inset-0 w-16 h-16 border-t-2 border-red-600 rounded-full animate-spin"></div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-white font-black text-[10px] uppercase tracking-[0.5em] mb-1">
          Authenticating
        </span>
        <span className="text-red-600 font-bold text-[8px] uppercase tracking-[0.3em] animate-pulse">
          Land Cruiser V8
        </span>
      </div>
    </div>
  </Html>
);

const Vehicle3D: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[450px] relative">
      <Canvas shadows dpr={[1, 2]}>
        {/* Stage will handle the centering and scaling automatically */}
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={30} />

        <Suspense fallback={<Loader />}>
          <PresentationControls
            global
            snap
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 6, Math.PI / 6]}
            azimuth={[-Math.PI / 1.5, Math.PI / 1.5]}
          >
            <Float
              speed={1.2}
              rotationIntensity={0.2}
              floatIntensity={0.3}
              floatingRange={[-0.05, 0.05]}
            >
              {/* 
                Stage solves the "invisible model" issue by auto-centering and auto-fitting.
                adjustCamera={true} ensures the view fits the car perfectly.
                intensity={1} provides the requested brightness.
                environment="city" provides realistic reflections on paint and glass.
              */}
              <Stage
                adjustCamera={true}
                intensity={1}
                environment="city"
                shadows="contact"
                contactShadow={{ opacity: 0.4, blur: 2 }}
              >
                <SceneErrorBoundary fallback={<StylizedVehicleFallback />}>
                  <CarModel />
                </SceneErrorBoundary>
              </Stage>
            </Float>
          </PresentationControls>

          {/* Additional lighting/environment as requested */}
          <Environment preset="city" />
          <ContactShadows
            position={[0, -0.01, 0]}
            opacity={0.4}
            scale={20}
            blur={2}
            far={4.5}
          />
        </Suspense>

        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <pointLight position={[-10, 8, -10]} intensity={1} color="#ffffff" />
      </Canvas>
    </div>
  );
};

export default Vehicle3D;
