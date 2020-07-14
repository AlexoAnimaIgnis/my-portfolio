import React from 'react';

export default class Introduction extends React.Component {
    render() {
        return (
        <div className="container box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="banner_content">
              <div className="media">
                <div className="d-flex">
                  <img src="img/personal.jpg" alt="" />
                </div>
                <div className="media-body">
                  <div className="personal_text">
                    <h6>Hey! I am</h6>
                    <h3>Alexo Ballester</h3>
                    <h4>Java Developer/Full Stack Engineer</h4>
                    <p>Object-oriented Programming, Web Development, Data Structures and Algorithms, Java SE, Spring Boot, Spring Data JPA, Angular 7, ReactJS, Node.js, TypeScript, MyBatis, HTML/CSS</p>
                    <ul className="list basic_info">
                      <li><a href=""> <i className="lnr lnr-envelope" /></a>  ballester.alexander@gmail.com </li>
                      <li><a href=""> <i className="lnr lnr-home" /></a>  Caloocan City, Philippines </li>
                    </ul>
                    <ul className="list personal_social">
                      <li><a href="https://www.instagram.com/alexowabisabi/"> <i className="fa fa-instagram" /> </a> </li>
                      <li><a href="https://twitter.com/AlexoIgnis"> <i className="fa fa-twitter" /> </a> </li>
                      <li><a href="https://www.linkedin.com/in/alexanderballester"> <i className="fa fa-linkedin" /> </a> </li>
                      <li><a href="https://github.com/AlexoAnimaIgnis"> <i className="fa fa-github" /> </a> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}