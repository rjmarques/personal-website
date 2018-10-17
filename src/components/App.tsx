import * as React from "react";

import "./App.less";
import Bio from "./bio/Bio";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Home from "./home/Home";
import NavBar from "./nav-bar/NavBar";
import Projects from "./projects/Projects";
import Publications from "./publications/Publications";
import Skills from "./skills/Skills";

interface IView {
  id: string;
  name: string;
  ref: React.RefObject<HTMLDivElement>;
}

interface IState {
  atViewId: string;
}

const MARGIN_OFFSET = 80;

class App extends React.Component<{}, IState> {
  // views that trigger status a nav change
  private views: IView[] = [
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
    }
  ];

  constructor(props: {}) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      atViewId: this.views[0].id
    };
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar items={this.views} selectedItemId={this.state.atViewId} />
        </header>
        <div id={this.views[0].id} ref={this.views[0].ref}>
          <Home />
        </div>
        <div className="App-main-content">
          <div id={this.views[1].id} ref={this.views[1].ref}>
            <Bio />
            <Skills />
          </div>
          <div id={this.views[2].id} ref={this.views[2].ref}>
            <Experience />
          </div>
          <div id={this.views[3].id} ref={this.views[3].ref}>
            <Projects />
          </div>
          <div id={this.views[4].id} ref={this.views[4].ref}>
            <Publications />
            <Education />
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

  private handleScroll() {
    this.views.forEach(view => {
      const cur = view.ref.current;
      if (
        cur &&
        document.scrollingElement &&
        this.atView(document.scrollingElement, cur)
      ) {
        this.setState({ atViewId: view.id });
        return;
      }
    });
  }

  private atView(scrollingElem: Element, viewElem: HTMLDivElement): boolean {
    const viewOffsetTop = viewElem.offsetTop - MARGIN_OFFSET;
    const viewOffsetBottom = viewOffsetTop + viewElem.clientHeight;
    return (
      scrollingElem.scrollTop > viewOffsetTop &&
      scrollingElem.scrollTop < viewOffsetBottom
    );
  }
}

export default App;
