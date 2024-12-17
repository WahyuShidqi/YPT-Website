import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    if (elementRef.current) {
      // Awasi elemen
      observer.observe(elementRef.current);

      // Periksa apakah elemen terlihat saat pertama kali dimuat
      const rect = elementRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return { isVisible, elementRef };
};

export default useIntersectionObserver;
