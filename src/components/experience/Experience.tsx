import * as React from "react";

import SectionTitle from "../common/SectionTitle";

class Experience extends React.Component {
  public render() {
    return (
      <section className="Experience">
        <div className="content">
          <SectionTitle
            title="Experience"
            subTitle="What I have done professionally"
          />
        </div>
      </section>
    );
  }
}

export default Experience;
