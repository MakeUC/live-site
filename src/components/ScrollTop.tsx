import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const ScrollToTopButton = styled.button`
  position: fixed;
  right: 5%;
  bottom: 10%;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid black;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;

const FixedMobileScrollToTopButton = styled(ScrollToTopButton)`
  position: fixed;
  right: 5%;
  bottom: 5%;
  padding: 10px;
  z-index: 10;
  border-radius: 50%;
`;

const AbsoluteMobileScrollToTopButton = styled(ScrollToTopButton)`
  position: absolute;
  right: 5%;
  padding: 10px;
  z-index: 10;
  border-radius: 50%;
`;

export type ScrollTopProps = {
  text?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style: Record<string, any>;
  distance?: number;
  bottomOffset: number;
  breakpoint?: number;
  speed?: number;
  target?: number;
  lit: ReactNode;
  hovering: ReactNode;
};

const ScrollTop: FC<ScrollTopProps> = ({
  text = 'back to top',
  className,
  style,
  distance = 50,
  bottomOffset,
  breakpoint = 991,
  speed = 250,
  target = 0,
  lit,
  hovering,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [isFlying, setIsFlying] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [maxDistance, setMaxDistance] = useState(0);

  const checkWindowSize = useCallback(() => setIsMobile(window.innerWidth < breakpoint), [
    breakpoint,
  ]);

  const checkForScrollToTop = useCallback(() => {
    if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
      setIsFlying(false);
    }
  }, [distance]);

  const checkForFixedPosition = useCallback(() => {
    const tempMaxDistance =
      document.documentElement.scrollHeight - window.innerHeight - bottomOffset;
    if (
      document.body.scrollTop > tempMaxDistance ||
      document.documentElement.scrollTop > tempMaxDistance
    ) {
      setIsFixed(false);
      setMaxDistance(document.documentElement.scrollHeight - bottomOffset - 150);
    } else {
      setIsFixed(true);
      setMaxDistance(document.documentElement.scrollHeight - bottomOffset - 150);
    }
  }, [bottomOffset]);

  const handleScroll = useCallback(() => {
    checkForScrollToTop();
    checkForFixedPosition();
  }, [checkForFixedPosition, checkForScrollToTop]);

  const getScrollTop = useCallback(
    () =>
      document.body.scrollTop ||
      (document.documentElement && document.documentElement.scrollTop) ||
      0,
    [],
  );

  const setScrollTop = useCallback(value => {
    document.body.scrollTop = value;
    if (document.documentElement) {
      document.documentElement.scrollTop = value;
    }
  }, []);

  const scrollUp = useCallback(() => {
    const { performance, requestAnimationFrame } = window;

    if (
      speed <= 0 ||
      typeof performance === 'undefined' ||
      typeof requestAnimationFrame === 'undefined'
    ) {
      setScrollTop(target);
      return;
    }
    const start = performance.now();
    const initScrollTop = getScrollTop();
    const pxsToScrollBy = initScrollTop - target;

    const step = (timestamp: number) => {
      const delta = timestamp - start;
      const progress = Math.min(delta / speed, 1);
      setScrollTop(initScrollTop - Math.round(progress * pxsToScrollBy));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [getScrollTop, setScrollTop, speed, target]);

  const renderIcon = useCallback(
    () => (
      <div
        className="scroll-top-icon"
        onClick={() => setIsFlying(true)}
        style={{
          boxShadow: '0px 0px 0px rgba(0,0,0,0.5)',
          borderRadius: '3px',
          width: '60px',
          padding: '10px 15px',
        }}
      >
        {isFlying && lit || hovering}
      </div>
    ),
    [hovering, isFlying, lit],
  );

  useEffect(() => {
    checkWindowSize();
    checkForScrollToTop();
    checkForFixedPosition();

    window.addEventListener('resize', checkWindowSize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
      window.addEventListener('scroll', handleScroll);
    };
  });

  return showScrollToTop && isMobile ? (
    isFixed ? (
      <FixedMobileScrollToTopButton style={style} className={className} onClick={scrollUp}>
        {renderIcon()}
      </FixedMobileScrollToTopButton>
    ) : (
      <AbsoluteMobileScrollToTopButton
        style={{
          top: maxDistance,
          ...style,
        }}
        className={className}
        onClick={scrollUp}
      >
        {renderIcon()}
      </AbsoluteMobileScrollToTopButton>
    )
  ) : (
    showScrollToTop && (
      <ScrollToTopButton style={style} className={className} onClick={scrollUp}>
        {text}
      </ScrollToTopButton>
    )
  );
};

export default ScrollTop;
