import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useNavigationScroll() {
  const [isDown, setIsDown] = useState(false);
  const navigation = useRef(null);

  const toggleNavigationScroll = () => {
    useEffect(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: navigation.current,
          start: '20% top',
          onLeave: () => setIsDown(true),
          onEnterBack: () => setIsDown(false),
        },
      });
    });
  };

  return { isDown, navigation, toggleNavigationScroll };
}
