import React, { Component, RefObject } from "react";

import Bio from "./bio/Bio";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import NavBar from "./nav-bar/NavBar";
import Projects from "./projects/Projects";
import Publications from "./publications/Publications";
import Skills from "./skills/Skills";

import PDFDownload from "../services/PDFDownload";
import { AtView, CloseToPageTop, ScrollTo } from "../services/Scroll";
import SendMessage from "../services/SendMessage";

import "./App.less";

interface IView {
  id: string;
  name: string;
  ref: RefObject<HTMLDivElement>;
}

interface IState {
  atViewId: string;
  isGhostHeader: boolean;
  isScrolling: boolean;
}

// views that trigger status a nav change
const views: IView[] = [
  {
    id: "HOME",
    name: "home",
    ref: React.createRef()
  },
  {
    id: "BIO",
    name: "bio",
    ref: React.createRef()
  },
  {
    id: "EXPERIENCE",
    name: "experience",
    ref: React.createRef()
  },
  {
    id: "PROJECTS",
    name: "projects",
    ref: React.createRef()
  },
  {
    id: "ACADEMIC",
    name: "academic",
    ref: React.createRef()
  },
  {
    id: "CONTACT",
    name: "contact",
    ref: React.createRef()
  }
];

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      atViewId: views[0].id,
      isGhostHeader: true,
      isScrolling: false
    };
  }

  public render() {
    return (
      <div className="App">
        <header className={this.getHeaderClass()}>
          <NavBar
            items={views}
            selectedItemId={this.state.atViewId}
            userSelectedView={this.viewSelected}
          />
        </header>
        <div id={views[0].id} ref={views[0].ref}>
          <Home
            goToContact={this.contactViewSelected}
            cvDownload={PDFDownload}
          />
        </div>
        <div className="App-main-content">
          <div id={views[1].id} ref={views[1].ref}>
            <Bio />
            <Skills />
          </div>
          <div id={views[2].id} ref={views[2].ref}>
            <Experience />
          </div>
          <div id={views[3].id} ref={views[3].ref}>
            <Projects />
          </div>
          <div id={views[4].id} ref={views[4].ref}>
            <Publications />
            <Education />
          </div>
          <div id={views[5].id} ref={views[5].ref}>
            <Contact sendMessage={SendMessage} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  private getHeaderClass(): string {
    return this.state.isGhostHeader ? "App-header ghost" : "App-header";
  }

  private contactViewSelected = () => {
    this.viewSelected(views[views.length - 1].id);
  };

  private viewSelected = (viewId: string) => {
    if (this.state.isScrolling) {
      return;
    }

    this.setSelectedView(viewId);
    const selectedView = views.find(v => v.id === viewId);
    if (selectedView && selectedView.ref.current && document.scrollingElement) {
      this.setIsScrolling(true);
      ScrollTo(document.scrollingElement, selectedView.ref.current, () => {
        this.setIsScrolling(false);
      });
    }
  };

  private handleScroll = () => {
    this.setHeaderClass();

    if (this.state.isScrolling) {
      return;
    }

    for (const view of views) {
      const cur = view.ref.current;
      if (
        cur &&
        document.scrollingElement &&
        AtView(document.scrollingElement, cur)
      ) {
        this.setSelectedView(view.id);
        return;
      }
    }
  };

  private setHeaderClass() {
    if (
      document.scrollingElement &&
      CloseToPageTop(document.scrollingElement)
    ) {
      this.setIsGhostHeader(true);
    } else {
      this.setIsGhostHeader(false);
    }
  }

  private setSelectedView(viewId: string) {
    this.setState({ atViewId: viewId });
  }

  private setIsScrolling(isScrolling: boolean) {
    this.setState({ isScrolling });
  }

  private setIsGhostHeader(isGhostHeader: boolean) {
    this.setState({ isGhostHeader });
  }
}

export default App;
