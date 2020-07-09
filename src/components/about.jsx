import React from 'react';

export default class AboutPage extends React.Component {
    render() {
        return(
        <div className="container">
        <div className="row welcome_inner">
          <div className="col-lg-6">
            <div className="welcome_text">
              <h4>About Myself</h4>
              <p> I am a software engineer with 6 years of programming experience using different technologies from the ones used in desktop/legacy applications (Java SE and Eclipse OSGI Framework)
to the ones used in web development (Spring Framework, Angular 7, TypeScript etc.). I have actively participated with doing the software architecture along with the systems analysis and design in my previous project. I am exposed to Agile methodologies such as SCRUM and XP and is well versed in doing product support.</p>
              <div className="row">
                <div className="col-md-5 wel_item">
                  <i className="lnr lnr-email" />
                  <h5>For more info</h5>
                  <p><a href="
                https://drive.google.com/file/d/1t75hAoXHLpmWBLIA-1Kzb0GF40dstLPs/view?usp=sharing">Download my CV here</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h4>Areas of Expertise</h4>
            <div className="row">
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-coffee-cup" />
                    <h6>Java Core Programming</h6>
                    <p></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-pencil" />
                    <h6>System Analysis and Design</h6>
                    <p></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-cloud" />
                    <h6>Web Development</h6>
                    <p></p>
                  </div>
                </div>
              </div>
              <div><p></p></div>
              <div className="row">
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-book" />
                    <h6>Data Structures and Algorithm</h6>
                    <p></p>
                  </div>
                </div>
                <p/>
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-database" />
                    <h6>Spring Framework</h6>
                    <p></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-users" />
                    <h6>Angular 7</h6>
                    <p></p>
                  </div>
                </div>
              </div>
              <div><p></p></div>
              <div className="row">            
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-keyboard" />
                    <h6>Object Oriented Programming</h6>
                    <p></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-users" />
                    <h6>React JS</h6>
                    <p></p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
        );
    }
}