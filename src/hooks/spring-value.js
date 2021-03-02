import { useEffect, useRef, useState } from "react";

import { useSpring } from "framer-motion";

const ANIMATION_DURATION = 700;

export const useSpringValue = (points) => {
  const value = useSpring(0, { duration: ANIMATION_DURATION });
  const counterRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(
    () =>
      value.renderSubscribers.add(() => {
        counterRef.current.innerText = Math.floor(value.current);
      }),
    [value]
  );

  useEffect(() => {
    value.set(points);
    setIsAnimating(true);

    const timeoutId = setTimeout(() => {
      setIsAnimating(false);
    }, ANIMATION_DURATION);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, points]);

  return [isAnimating, counterRef];
};
