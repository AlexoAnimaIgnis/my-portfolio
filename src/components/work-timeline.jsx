import React from 'react';

export default class WorkTimeline extends React.Component {
    render() {
        return(
            <div className="container">
        <div className="tabs_inner">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Experiences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Education</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <ul className="list">
                <li>
                  <span />
                  <div className="media">
                    <div className="d-flex">
                      <p>Mar 2020 to present</p>
                    </div>
                    <div className="media-body">
                      <p>Freelance Developer <br />Makati City, Philippines</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span />
                  <div className="media">
                    <div className="d-flex">
                      <p>Dec 2018 to Mar 2020</p>
                    </div>
                    <div className="media-body">
                      <h4>Orbium Inc</h4>
                      <p>Lead Java Developer <br />Makati City, Philippines</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span />
                  <div className="media">
                    <div className="d-flex">
                      <p>Sep 2016 to Dec 2018</p>
                    </div>
                    <div className="media-body">
                      <h4>Orbium Inc</h4>
                      <p>Java Developer <br />Makati City, Philippines</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span />
                  <div className="media">
                    <div className="d-flex">
                      <p>Dec 2015 to Sep 2016</p>
                    </div>
                    <div className="media-body">
                      <h4>Finastra</h4>
                      <p>Software Engineer <br />Makati City, Philippines</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span />
                  <div className="media">
                    <div className="d-flex">
                      <p>Nov 2013 to Dec 2015</p>
                    </div>
                    <div className="media-body">
                      <h4>Finastra</h4>
                      <p>Associate Software Engineer <br />Makati City, Philippines</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <ul className="list">
                <li>
                  <span />
                  <div className="media">
                    <div className="d-flex">
                      <p>Mar 2013 to Nov 2013</p>
                    </div>
                    <div className="media-body">
                      <h4>University of the Philippines</h4>
                      <p>Web Application Development<br />Quezon City, Philippines</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span />
                  <div className="media">
                    <div className="d-flex">
                      <p>Jun 2008 to Apr 2012</p>
                    </div>
                    <div className="media-body">
                      <h4>Technological Institute of the Philippines</h4>
                      <p>Bachelor of Science in Information Technology<br />Quezon City, Philippines</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        );
    }
}