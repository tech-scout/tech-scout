import React from 'react';
import './About.css';

const About = props => {
  return (
    <div className="about">
      <h2>{`${props.name} (${props.title})`}</h2>
      <img src={props.profile_pic} />
    </div>
<<<<<<< HEAD
    )
=======
  );
>>>>>>> 03f11eb5d7265d3233570f8457828d65ff2e95af
}

export default About;
