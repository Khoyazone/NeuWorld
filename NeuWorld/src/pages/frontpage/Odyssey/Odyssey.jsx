import React, { useState, useEffect, useRef } from 'react';
import './Odyssey.css';

const Odyssey = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [lockedMousePosition, setLockedMousePosition] = useState({ x: 50, y: 50 });
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);
  const [maxScroll, setMaxScroll] = useState(0);

  const logoWrapperRef = useRef(null);
  const logoContainerRef = useRef(null);
  const revealImageRef = useRef(null);
  const zoomCircleRef = useRef(null);
  const wLetterRef = useRef(null);
  const textRevealContainerRef = useRef(null);
  const revealTextRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const updateMaxScroll = () => {
      if (scrollContainerRef.current) {
        setMaxScroll(scrollContainerRef.current.offsetHeight - window.innerHeight);
      }
    };

    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);

    return () => window.removeEventListener('resize', updateMaxScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const scrollPercent = Math.min(scrolled / (maxScroll * 0.6), 1);
      
      const elements = {
        logoWrapper: logoWrapperRef.current,
        logoContainer: logoContainerRef.current,
        revealImage: revealImageRef.current,
        zoomCircle: zoomCircleRef.current,
        wLetter: wLetterRef.current,
        textRevealContainer: textRevealContainerRef.current,
        revealText: revealTextRef.current
      };

      if (!Object.values(elements).every(el => el)) return;

      if (scrollPercent > 0.01 && !hasStartedScrolling) {
        setLockedMousePosition(mousePosition);
        setHasStartedScrolling(true);
      }
      
      if (scrollPercent < 0.01) {
        setHasStartedScrolling(false);
      }
      
      const activeMouseX = hasStartedScrolling ? lockedMousePosition.x : mousePosition.x;
      const activeMouseY = hasStartedScrolling ? lockedMousePosition.y : mousePosition.y;
      
      // Animation du W
      const wScale = 1 + (scrollPercent * 20);
      elements.wLetter.style.transform = `scale(${wScale})`;
      
      // Animation du logo
      const centerX = 50;
      const centerY = 50;
      const offsetX = (centerX - activeMouseX) * scrollPercent * 0.5;
      const offsetY = (centerY - activeMouseY) * scrollPercent * 0.5;
      
      elements.logoWrapper.style.transform = `translate(${offsetX}%, ${offsetY}%)`;
      elements.logoWrapper.style.transformOrigin = `${activeMouseX}% ${activeMouseY}%`;
      
      // Animation du cercle
      elements.zoomCircle.style.left = `${activeMouseX}%`;
      elements.zoomCircle.style.top = `${activeMouseY}%`;
      
      const circleScale = 1 + (scrollPercent * 100);
      elements.zoomCircle.style.transform = `translate(-50%, -50%) scale(${circleScale})`;
      
      // Animation du fond
      if (scrollPercent > 0.4 && scrollPercent < 0.7) {
        const whitePercent = (scrollPercent - 0.4) / 0.3;
        const bgColor = Math.floor(whitePercent * 255);
        elements.logoContainer.style.backgroundColor = `rgb(${bgColor}, ${bgColor}, ${bgColor})`;
        elements.logoContainer.style.opacity = 1;
      } else if (scrollPercent >= 0.7) {
        elements.logoContainer.style.backgroundColor = '#fff';
        const fadePercent = (scrollPercent - 0.7) / 0.3;
        elements.logoContainer.style.opacity = 1 - fadePercent;
      } else {
        elements.logoContainer.style.backgroundColor = '#000';
        elements.logoContainer.style.opacity = 1;
      }
      
      // Animation de l'image de révéléation
      if (scrollPercent > 0.65) {
        elements.revealImage.classList.add('visible');
        const imageOpacity = (scrollPercent - 0.65) / 0.35;
        elements.revealImage.style.opacity = imageOpacity;
        
        const grayToWhite = Math.min((scrollPercent - 0.75) / 0.2, 1);
        const grayValue = Math.floor(102 + (grayToWhite * 153));
        elements.revealImage.style.backgroundColor = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
      } else {
        elements.revealImage.classList.remove('visible');
        elements.revealImage.style.opacity = 0;
        elements.revealImage.style.backgroundColor = '#666666';
      }
      
      // Affichage/masquage des éléments
      if (scrollPercent >= 0.95) {
        elements.logoContainer.style.display = 'none';
        elements.revealImage.style.display = 'none';
      } else {
        elements.logoContainer.style.display = 'flex';
        elements.revealImage.style.display = 'block';
      }
      
      // Animation du texte
      if (scrollPercent <= 0.7) {
        elements.revealText.classList.remove('visible');
        elements.revealText.style.transform = 'scale(0.1)';
        elements.revealText.style.opacity = '0';
        elements.textRevealContainer.style.position = 'fixed';
      } else if (scrollPercent > 0.7 && scrollPercent < 1) {
        const textProgress = (scrollPercent - 0.7) / 0.3;
        const textScale = 0.1 + (textProgress * 0.9);
        
        elements.revealText.classList.add('visible');
        elements.revealText.style.transform = `scale(${textScale})`;
        elements.revealText.style.opacity = textProgress;
        elements.textRevealContainer.style.position = 'fixed';
        elements.textRevealContainer.style.top = '0';
      } else {
        elements.textRevealContainer.style.position = 'absolute';
        elements.textRevealContainer.style.top = `${maxScroll * 0.6}px`;
        elements.revealText.classList.add('visible');
        elements.revealText.style.transform = 'scale(1)';
        elements.revealText.style.opacity = '1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mousePosition, lockedMousePosition, hasStartedScrolling, maxScroll]);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div className="logo-container" ref={logoContainerRef}>
        <div className="zoom-circle" ref={zoomCircleRef}></div>
        <div className="logo-wrapper" ref={logoWrapperRef}>
          <div className="neuworld-text">
            Neu<span className="w-letter" ref={wLetterRef}>W</span>orld
          </div>
        </div>
      </div>
      
      <div className="reveal-image" ref={revealImageRef}></div>
      
      <div className="text-reveal-container" ref={textRevealContainerRef}>
        <div className="reveal-text" ref={revealTextRef}>
          <h1>Bienvenue dans NeuWorld</h1>
          <p>[text 1]</p>
        </div>
      </div>
      
      <div className="final-content">
        <div className="content-box">
          <h2>Odyssey_page</h2>
          <p>[text 2]</p>
          <p>[text 3]</p>
        </div>
      </div>
    </div>
  );
};

export default Odyssey;