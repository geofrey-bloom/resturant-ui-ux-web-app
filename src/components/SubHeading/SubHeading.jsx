import React from 'react';
import{images} from '../../constants'
const SubHeading = ({title}) => (
  <div style={{marginBottom:'irem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" srcset="" />
  
  </div>
);

export default SubHeading;
