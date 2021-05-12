import React, { useState, useEffect } from 'react';

export const useScrollingEffect = () => {
  let [ openSesame, setOpenSesame ] = useState(true);
  let [ currentDelta, setCurrentDelta ] = useState(0);
  let [ newNormalPosition, setNewNormalPosition ] = useState(0);

  useEffect(() => {
    const triggerScrollEffect = (e) => {
      setCurrentDelta(e.target.scrollingElement.scrollTop);
    }
    window.addEventListener('scroll', triggerScrollEffect);
    return () => window.removeEventListener('scroll', triggerScrollEffect);
  }, []);

  useEffect(() => {
    if (newNormalPosition + 100 < currentDelta) {
      setNewNormalPosition(currentDelta);
      setOpenSesame(false);
    }
    else if (newNormalPosition > currentDelta) {
      let newnormal = currentDelta - 100;
      if (newnormal < 0) {
        newnormal = 0;
      }
      setOpenSesame(true);
      setNewNormalPosition(newnormal);
    }
  }, [currentDelta]);

  return openSesame;
}