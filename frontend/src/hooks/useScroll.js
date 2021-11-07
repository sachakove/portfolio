import { useLayoutEffect } from "react";

const useScroll = (fn) => {
  useLayoutEffect(() => {
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [fn]);
};

export const scrollAnimationTop = (element) => {
  const elementPosition = (element) => element.getBoundingClientRect().top;

  const scrollPosition = window.scrollY + window.innerHeight;

  return elementPosition(element) < scrollPosition;
};

export const scrollAnimation = (element) => {
  const elementPosition = (element) =>
    element.getBoundingClientRect().bottom + 200;

  const scrollPosition = window.scrollY;

  return elementPosition(element) < scrollPosition;
};

export default useScroll;
