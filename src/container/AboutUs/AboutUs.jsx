import React from 'react';
import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="Aboutus">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="letter G" srcset="" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" srcset="" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident esse excepturi nihil! Optio, perspiciatis dolor. Laboriosam voluptate molestiae laudantium recusandae voluptatum! Pariatur odio repudiandae sequi. Omnis adipisci at porro.</p>
        <button type="button" className="custom__button">Know More</button>  
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" srcset="" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" srcset="" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident esse excepturi nihil! Optio, perspiciatis dolor. Laboriosam voluptate molestiae laudantium recusandae voluptatum! Pariatur odio repudiandae sequi. Omnis adipisci at porro.</p>
        <button type="button" className="custom__button">Know More</button>  
      </div>
    </div>
  </div>
);
export default AboutUs;
