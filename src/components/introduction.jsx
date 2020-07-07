import React from 'react';

export default class Introduction extends React.Component {
    render() {
        return (
            <section className="home_banner_area">
        <div className="container box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="banner_content">
              <div className="media">
                <div className="d-flex">
                  <img src="img/personal.jpg" alt="" />
                </div>
                <div className="media-body">
                  <div className="personal_text">
                    <h6>Hey yo! I am</h6>
                    <h3>Alexo Ballester</h3>
                    <h4>Full Stack Engineer/ Java Developer</h4>
                    <p>Java 8.0 - 13, Spring Framework, Spring Data JPA, Spring Security, Angular 7, ReactJS, Node.js, TypeScript, HTML/CSS</p>
                    <ul className="list basic_info">
                      <li> <i className="lnr lnr-calendar-full" /> 23rd January, 1992 </li>
                      <li> <i className="lnr lnr-phone-handset" /> (+63) 916 587 7218 </li>
                      <li> <i className="lnr lnr-envelope" /> ballester.alexander@gmail.com </li>
                      <li> <i className="lnr lnr-home" /> Caloocan City, Philippines </li>
                    </ul>
                    <ul className="list personal_social">
                      <li> <i className="fa fa-facebook" /> </li>
                      <li> <i className="fa fa-twitter" /> </li>
                      <li> <i className="fa fa-linkedin" /> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        )
    }
}