import React from 'react';
import './About.css';

const About = props => {
  return (
    <div className="about">
      <h2>{`${props.name} (${props.title})`}</h2>
      <img src={props.profile_pic} />
    </div>
}

export default About;
