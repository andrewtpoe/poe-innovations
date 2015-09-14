var React = require('react');

var slide = React.createClass({

  _slide0: function() {
    return (
      <div className={this.props.fade} >
        <div className="slide__intro" >
          <h1>
            Web Developers in Charleston, SC
          </h1>
          <h2>
            Specializing in Ruby, Rails, and React.js
          </h2>
        </div>
      </div>
    );
  },

  _slide1: function() {
    return (
      <div className={this.props.fade} >
        <div className="slide" >
          <div className="slide__content" >
            <h1 className="slide__title">
              Our Services
            </h1>
            <div className="slide__text">
              <h2>SaaS Development</h2>
              <p>
                SaaS, or software as a service, is our primary focus. At POE Innovations, we are passionate about developing amazing tools that solve the daily problems of professionals and entrepreneurs.</p>
              <p><a href="mailto:poeinnovations@gmail.com?subject=My%20profession%20needs%20a%20new%20application">Tell us</a> what new software tools would make a difference in your daily work. If we develop an application to solve a problem you tell us about there will be no cost to you. We'll even give you a lifetime membership totally free!
              </p>
              <h2>Custom Web Development</h2>
              <p>
                Whether you need a new site built from the ground up or just a new feature on an existing site, we are happy to help. Just tell us about your needs and let's build something amazing together.
              </p>
              <p>
                <a href="mailto:poeinnovations@gmail.com?subject=I would like a quote on your web development services">Contact us for a free quote!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },

  _slide2: function() {
    return (
      <div className={this.props.fade} >
        <div className="slide" >
          <h1 className="slide__title" >
            Primary Technologies
          </h1>
          <div className="slide__text" >
            <p>
              We pride ourselves in using a wide array of the latest technologies in as we build our mobile friendly projects. Our primary expertise is with the following:
            </p>
            <ul>
              <li>Ruby on Rails</li>
              <li>React.js</li>
              <li>PostgreSQL</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Responsive Design</li>
            </ul>
            <p>
              We are familiar with many other technologies as well, plus we are always eager to learn new things so we can better serve you.
            </p>
            <p>
              <a href="mailto:poeinnovations@gmail.com?subject=Let's talk tech!">Tell us what you use!</a>
            </p>
          </div>
        </div>
      </div>
    );
  },

  _slide3: function() {
    return (
      <div className={this.props.fade} >
        <div className="slide" >
          <h1 className="slide__title" >
            Our Team
          </h1>
          <div className="slide__bio" >
            <img src='https://avatars2.githubusercontent.com/u/11183459?v=3&s=500' className="slide__bioPic" ></img>
            <h2 className="slide__bioTitle">Andrew T. Poe</h2>
            <div className="slide__bioText">
              <p>Andrew T. Poe is the CEO and Lead Developer for POE Innovations, LLC. He began his career as an automotive technician but since discovered a passion for programming. After teaching himself Python for 2 years he went through an immersive web development course at The Iron Yard where he was mentored into a professional ready to run this business. Andrew is most proficient with Ruby, Rails, and React.js, but is familiar with a wide array of other modern development techniques and technologies.</p>
            </div>
          </div>
        </div>
      </div>
    );
  },

  render: function() {
    var self = this;
    var slide;
    switch(self.props.slide) {
      case 0:
        slide = self._slide0();
        break;
      case 1:
        slide = self._slide1();
        break;
      case 2:
        slide = self._slide2();
        break;
      case 3:
        slide = self._slide3();
        break;
    };
    return (
      slide
    )
  }
});

module.exports = slide;
