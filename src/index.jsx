// Import necessary styles and components
import './style.css';
import React, { Profiler, StrictMode } from 'react'
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
  <StrictMode>
    <CameraProvider>
      <Canvas flat>
        <color args={['rgb(3, 2, 2)']} attach="background" />
          <Experience />
      </Canvas>
      <Interface />
    </CameraProvider>
  </StrictMode>
);


{/*

        // Use the Profiler to measure the rendering performance of Experience component 
        

function onRenderCallback(
  id, // unique identifier of the Profiler interaction
  phase, // "mount" (for the initial render) or "update" (for subsequent renders)
  actualDuration, // time spent rendering the component
  baseDuration, // estimated time to render the entire subtree
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  console.log('Render id:', id);
  console.log('Phase:', phase);
  console.log('Actual duration:', actualDuration);
  // Add more logs or analysis as needed.
}

root.render(
  <StrictMode>
    <CameraProvider>
      <Canvas flat>
        <color args={['rgb(3, 2, 2)']} attach="background" />

        <Profiler id="Experience" onRender={onRenderCallback}>
          <Experience />
        </Profiler>
      </Canvas>
      <Interface />
    </CameraProvider>
  </StrictMode>
);
 */}