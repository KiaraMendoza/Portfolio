import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <main id="about" className="about d-flex justify-content-center flex-column">
        <div className="row container d-flex justify-content-center mx-auto">
          <div className="about-me-paragraph col-12 col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum velit ac luctus aliquam. Pellentesque eu nisl turpis.
              Nam a venenatis erat. Ut orci libero, blandit id nibh sit amet,
              vulputate hendrerit est. In ut lectus nec ipsum posuere viverra
              vitae eu tortor. Praesent efficitur justo id sapien auctor
              tristique. Nunc faucibus, est ut condimentum eleifend, ex turpis
              molestie mauris, laoreet ultrices risus purus sed nisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum velit ac luctus aliquam. Pellentesque eu nisl turpis.
              Nam a venenatis erat. Ut orci libero, blandit id nibh sit amet,
              vulputate hendrerit est. In ut lectus nec ipsum posuere viverra
              vitae eu tortor. Praesent efficitur justo id sapien auctor
              tristique. Nunc faucibus, est ut condimentum eleifend, ex turpis
              molestie mauris, laoreet ultrices risus purus sed nisi.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img className="about-image" src="/img/kiaramg.png" alt="Myself" />
          </div>
        </div>
      </main>
    );
  }
}
