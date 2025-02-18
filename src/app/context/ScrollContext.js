"use client";

import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const sectionRefs = {
    dashboard: useRef(null),
    patient: useRef(null),
    schedule: useRef(null),
    medical: useRef(null),
    billing: useRef(null),
  };

  const scrollTo = (section) => {
    if (sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollTo, sectionRefs }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}
