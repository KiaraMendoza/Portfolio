import React from "react";

let texts = ['A junior web developer', 'A tech lover', 'An Animal lover', 'A React Lover'];
let i = 0, x = 0;

export default class Home extends React.Component {
  constructor() {
    super();

    this.WriteText = this.WriteText.bind(this);
  }

  componentDidMount() {
    //Take the text container
    this.WriteText();
  }

  WriteText() {
    let textContainer = document.querySelector("#writing-text");
    if (i < texts[x].length) {
      textContainer.innerHTML += texts[x].charAt(i++);
      setTimeout(this.WriteText, 100);
    } else {
      setTimeout(() => {
        this.RemoveText();
      }, 1000);
    }
  }

  RemoveText() {
    let textContainer = document.querySelector("#writing-text");
    if (i > 0) {
      i--;
      textContainer.innerHTML = textContainer.innerHTML.substring(0, textContainer.innerHTML.length - 1);
      setTimeout(()=> {
        this.RemoveText()
      }, 50);
    } else {
      x++;
      if (x >= texts.length) {
        x = 0;
        setTimeout(() => {
          this.WriteText();
        }, 200);
      } else {
        setTimeout(() => {
          this.WriteText();
        }, 200);
      }
    }
  }

  render() {
    return (
      <main role="main" className="home" id="home">
        <div className="polygon d-flex justify-content-center flex-column text-center h-100">
          <div>
            <h1 className="home-header">Hello! I'm Kiara</h1>
            <h4 id="writing-text" className="d-inline-block"> </h4>
            <span className="writing-span ml-1 animated flash infinite">|</span>
          </div>
        </div>
      </main>
    );
  }
}
