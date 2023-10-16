// Import necessary styles and components
import './style.css';
import ReactDOM from 'react-dom/client';
import { useFrame, Canvas } from '@react-three/fiber';

// Import your custom `CameraProvider` to provide camera context
import { CameraProvider } from './stores/CameraContext';

// Import your components
import Experience from './Experience.jsx';
import Interface from './Interface.jsx';

// Create a root element for rendering
const root = ReactDOM.createRoot(document.querySelector('#root'));

// Render the components within the CameraProvider context
root.render(
  <CameraProvider>
    <Canvas flat>
      {/* Set the background color of the canvas */}
      <color args={['rgb(3, 2, 2)']} attach="background" />

      {/* Render the 3D experience using the Experience component */}
      <Experience />
    </Canvas>

    {/* Render the user interface using the Interface component */}
    <Interface />
  </CameraProvider>
);
