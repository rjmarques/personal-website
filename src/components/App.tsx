"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../theme/mui-theme';
import Bio from './bio/Bio';
import Contact from './contact/Contact';
import Education from './education/Education';
import Experience from './experience/Experience';
import Footer from './footer/Footer';
import Home from './home/Home';
import NavBar from './nav-bar/NavBar';
import Projects from './projects/Projects';
import Publications from './publications/Publications';
import Skills from './skills/Skills';
import { AtView, CloseToPageTop, HEADER_HEIGHT_OFFSET, InView, ScrollTo } from '../services/Scroll';
import SendMessage from '../services/SendMessage';
import './App.scss';

interface IView {
  id: string;
  name: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

// views that trigger status a nav change
const views: IView[] = [
  {
    id: "HOME",
    name: "home",
    ref: React.createRef(),
  },
  {
    id: "BIO",
    name: "bio",
    ref: React.createRef(),
  },
  {
    id: "EXPERIENCE",
    name: "experience",
    ref: React.createRef(),
  },
  {
    id: "PROJECTS",
    name: "projects",
    ref: React.createRef(),
  },
  {
    id: "ACADEMIC",
    name: "academic",
    ref: React.createRef(),
  },
  {
    id: "CONTACT",
    name: "contact",
    ref: React.createRef(),
  },
];

const App: React.FC = () => {
  const [atViewId, setAtViewId] = useState(views[0].id);
  const [isGhostHeader, setIsGhostHeader] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [visitedViewsByID, setVisitedViewsByID] = useState<Map<string, boolean>>(new Map());

  const setViewed = useCallback(() => {
    const newVisitedViews = new Map(visitedViewsByID);
    let hasChanges = false;

    for (const view of views) {
      if (newVisitedViews.get(view.id)) {
        continue;
      }

      const cur = view.ref.current;
      if (cur && InView(cur)) {
        newVisitedViews.set(view.id, true);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      setVisitedViewsByID(newVisitedViews);
    }
  }, [visitedViewsByID]);

  const isViewVisited = (id: string): boolean => {
    return visitedViewsByID.get(id) || false;
  };

  const getHeaderClass = (): string => {
    return isGhostHeader ? "app-header ghost" : "app-header";
  };

  const viewSelected = (viewId: string) => {
    if (isScrolling) {
      return;
    }

    setAtViewId(viewId);
    const selectedView = views.find((v) => v.id === viewId);
    if (selectedView && selectedView.ref.current && document.scrollingElement) {
      setIsScrolling(true);
      ScrollTo(document.scrollingElement, selectedView.ref.current, () => {
        setIsScrolling(false);
      });
    }
  };

  const goToContact = () => {
    viewSelected("CONTACT");
  };

  const handleScroll = useCallback(() => {
    // Set header class
    if (document.scrollingElement && CloseToPageTop(document.scrollingElement)) {
      setIsGhostHeader(true);
    } else {
      setIsGhostHeader(false);
    }

    // Set viewed sections
    setViewed();

    // Set selected view
    if (isScrolling) {
      return;
    }

    for (const view of views) {
      const cur = view.ref.current;
      if (
        cur &&
        document.scrollingElement &&
        AtView(document.scrollingElement, cur)
      ) {
        setAtViewId(view.id);
        break;
      }
    }
  }, [isScrolling, setViewed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Set initial state based on current scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, setViewed]);

  return (
    <ThemeProvider theme={muiTheme}>
      <div className="app">
        <header className={getHeaderClass()}>
          <NavBar
            items={views.map(view => ({ id: view.id, name: view.name }))}
            selectedItemId={atViewId}
            userSelectedView={viewSelected}
          />
        </header>
        <div
          id={views[0].id}
          ref={views[0].ref}
          className={isViewVisited(views[0].id) ? "visited" : ""}
        >
          <Home goToContact={goToContact} />
        </div>
        <div className="app-main-content">
          <div
            id={views[1].id}
            ref={views[1].ref}
            className={isViewVisited(views[1].id) ? "visited" : ""}
          >
            <Bio />
            <Skills />
          </div>
          <div
            id={views[2].id}
            ref={views[2].ref}
            className={isViewVisited(views[2].id) ? "visited" : ""}
          >
            <Experience />
          </div>
          <div
            id={views[3].id}
            ref={views[3].ref}
            className={isViewVisited(views[3].id) ? "visited" : ""}
          >
            <Projects />
          </div>
          <div
            id={views[4].id}
            ref={views[4].ref}
            className={isViewVisited(views[4].id) ? "visited" : ""}
          >
            <Publications />
            <Education />
          </div>
          <div
            id={views[5].id}
            ref={views[5].ref}
            style={{
              minHeight: `calc(100vh - ${HEADER_HEIGHT_OFFSET - 2}px)`,
            }}
            className={isViewVisited(views[5].id) ? "visited" : ""}
          >
            <Contact sendMessage={SendMessage} />
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
