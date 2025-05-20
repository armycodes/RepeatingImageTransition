import { useEffect, useRef } from 'react';
import { preloadImages } from './utils';
import { initSmoothScrolling } from './smoothscroll';
import { GridItem } from './components/GridItem';
import { Panel } from './components/Panel';
import { Frame } from './components/Frame';
import './css/base.css';

// Configuration object for animation settings
const config = {
  clipPathDirection: 'top-bottom',
  autoAdjustHorizontalClipPath: true,
  steps: 6,
  stepDuration: 0.35,
  stepInterval: 0.05,
  moverPauseBeforeExit: 0.14,
  rotationRange: 0,
  wobbleStrength: 0,
  panelRevealEase: 'sine.inOut',
  gridItemEase: 'sine',
  moverEnterEase: 'sine.in',
  moverExitEase: 'sine',
  panelRevealDurationFactor: 2,
  clickedItemDurationFactor: 2,
  gridItemStaggerFactor: 0.3,
  moverBlendMode: false,
  pathMotion: 'linear',
  sineAmplitude: 50,
  sineFrequency: Math.PI,
};

const images = Array.from({ length: 33 }, (_, i) => ({
  id: i + 1,
  url: `/assets/img${i + 1}.webp`,
  title: `Image ${i + 1}`,
  description: `Description for image ${i + 1}`,
}));

function App() {
  const gridRef = useRef(null);

  useEffect(() => {
    document.documentElement.className = 'js';
    
    const init = async () => {
      await preloadImages('.grid__item-image, .panel__img');
      document.body.classList.remove('loading');
      initSmoothScrolling();
    };

    init();
  }, []);

  return (
    <main>
      <Frame />
      
      <div className="heading">
        <h2 className="heading__title">Shane Weber</h2>
        <span className="heading__meta">
          effect 01: straight linear paths, smooth easing, clean timing, minimal rotation.
        </span>
      </div>

      <div className="grid" ref={gridRef}>
        {images.slice(0, 16).map((image) => (
          <GridItem 
            key={image.id}
            image={image}
            config={config}
          />
        ))}
      </div>

      <Panel />
    </main>
  );
}

export default App;