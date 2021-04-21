import React, { Component } from "react";

import cssImg from "../images/language-icons/css3.svg"
import flaskImg from "../images/language-icons/flask.png"
import html5Img from "../images/language-icons/html5.png"
import javascriptImg from "../images/language-icons/javascript.png"
import postgresqlImg from "../images/language-icons/postgresql.png"
import pythonImg from "../images/language-icons/python.svg"
import reactImg from "../images/language-icons/react.svg"
import reduxImg from "../images/language-icons/redux.png"
import sqlalchemyImg from "../images/language-icons/sqlalchemy.png"


let css = {image:cssImg, name:"CSS"}
let flask = {image:flaskImg, name:"FLASK"}
let html5 = {image:html5Img, name:"HTML5"}
let javascript = {image:javascriptImg, name:"JAVASCRIPT"}
let postgresql = {image:postgresqlImg, name:"POSTGRESQL"}
let python = {image:pythonImg, name:"PYTHON"}
let react = {image:reactImg, name:"REACT"}
let redux = {image:reduxImg, name:"REDUX"}
let sqlalchemy = {image:sqlalchemyImg, name:"SQLALCHEMY"}

let mySkills = [python, javascript,  react, redux, css, flask, html5, postgresql]


class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      // var skills = this.props.sharedSkills.icons.map(function (skills, i) {
      var skills = mySkills.map(function (skills, i) {
        console.log('skil',skills.image);
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                  <img className='skill-icon' src={skills.image} alt='css'/>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
