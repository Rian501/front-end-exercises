import React, { Component } from 'react';


class Jisie extends Component {
  name() {
    return "Jisie"
  }

  cohort() {
    return 26
  }

  render() {
    return (
      <section>
        <p>{this.name()}</p>
        <p>{this.cohort()}</p>
      </section>
    );
  }
}

export default Jisie;
