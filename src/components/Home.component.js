import React from "react";

const TEXTS = ['A junior web developer', 'A tech lover', 'An Animal lover'];


export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      text: TEXTS[0]
    }

    this.WriteText = this.WriteText.bind(this);
  }

  componentDidMount() {
    let text = document.querySelector("#writing-text");

    function* generator() {
      var index = 0;
      while (true) {
        yield index++;

        if (index >= TEXTS.length) {
          index = 0;
        }
      }
    }

    // Printing effect
    function printChar(word) {
      let i = 0;
      text.innerHTML = "";
      //text.classList.add(colors[words.indexOf(word)]);
      let id = setInterval(() => {
        if (i >= word.length) {
          deleteChar();
          clearInterval(id);
        } else {
          text.innerHTML += word[i];
          i++;
        }
      }, 150);
    }

    // Deleting effect
    function deleteChar() {
      let word = text.innerHTML;
      let i = word.length - 1;
      let id = setInterval(() => {
        if (i >= 0) {
          text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
          i--;
        } else {
          //text.classList.remove(colors[words.indexOf(word)]);
          printChar(TEXTS[gen.next().value]);
          clearInterval(id);
        }
      }, 70);
    }

    let gen = generator();

    printChar(TEXTS[gen.next().value]);
  }

  WriteText() {
  }

  render() {
    return (
      <main role="main" className="home">
        <div className="d-flex justify-content-center flex-column text-center h-100">
          <div>
            <h1 className="home-header">Hello! I'm Kiara</h1>
            <h4 id="writing-text" className="d-inline-block"></h4>
            <span className="writing-span ml-1 animated flash infinite">|</span>
          </div>
        </div>
      </main>
    );
  }
}
