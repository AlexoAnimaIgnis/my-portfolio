import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
      <div className="container">
        <div className="row footer_inner">
          <div className="col-lg-5 col-sm-6">
            <aside className="f_widget ab_widget">
              <div className="f_title">
                <h3>About Me</h3>
              </div>
              <p>For freelance work please do not hesitate to contact me through my social media or email. I also accept art commissions.</p>
              <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
            </aside>
          </div>
          <div className="col-lg-2">
            <aside className="f_widget social_widget">
              <div className="f_title">
                <h3>Follow Me</h3>
              </div>
              <p>Connect with me!</p>
              <ul className="list">
                <li><a href="https://www.instagram.com/alexowabisabi/"> <i className="fa fa-instagram" /> </a> </li>
                <li><a href="https://twitter.com/AlexoIgnis"> <i className="fa fa-twitter" /> </a> </li>
                <li><a href="https://t.co/cc1AXYdfiC?amp=1"> <i className="fa fa-linkedin" /> </a> </li>
                <li><a href="https://github.com/AlexoAnimaIgnis"> <i className="fa fa-github" /> </a> </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
        );
    }
}