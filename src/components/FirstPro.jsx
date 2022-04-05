import React,{useState} from 'react';
import './style.css'
import image1 from './picture/a.jpg';
import image2 from './picture/b.jpg'
import image3 from './picture/c.jpg'
import image4 from './picture/d.jpg'
import image5 from './picture/e.jpg'



function FirstPro() {
    
       const[isselect, setIsselect] = useState(false);
       const[isselect1,setIsselect1] = useState(false);
       const[isselect2,setIsselect2] = useState(false);
       const[isselect3,setIsselect3] = useState(false);
       const[isselect4,setIsselect4] = useState(false);

      
     
     const handleChange = () =>{
        
       setIsselect(!isselect)
        setIsselect1(false)
        setIsselect2(false)
        setIsselect3(false)
        setIsselect4(false)
      
     }
     
     
     const handleChange1 = () =>{
      

       setIsselect(false)
       setIsselect1(!isselect1)
       setIsselect2(false)
       setIsselect3(false)
       setIsselect4(false)
      
     
     }
     
     const handleChange2 = () =>{
      
       setIsselect(false)
        setIsselect1(false)
        setIsselect2(!isselect2)
        setIsselect3(false)
        setIsselect4(false)
     
     }
     
     const handleChange3 = () =>{
      
       setIsselect(false)
       setIsselect1(false)
       setIsselect2(false)
       setIsselect3(!isselect3)
       setIsselect4(false)
     
     }
     
     const handleChange4 = () =>{
      
       setIsselect(false)
        setIsselect1(false)
        setIsselect2(false)
        setIsselect3(false)
        setIsselect4(!isselect4)
     
     }
  
  return (
    <div>
        <div className="container">
           
          
          <div className={`panel ${isselect ? "active" : ''}`} onClick={handleChange} style={{backgroundImage:`url(${image1})`}}>
                 <h3>tea time</h3>
          </div>
          <div className={`panel ${isselect1 ? "acitve" : '' } `} onClick={handleChange1} style={{backgroundImage:`url(${image2})`}}>
                 <h3>reading time</h3>
          </div>
          <div className={`panel ${isselect2 ? "active" : ''} ` } onClick={handleChange2} style={{backgroundImage:`url(${image3})`}}>
                 <h3>sea side</h3>
          </div>
          <div className={`panel ${isselect3 ? "active" : ''} `} onClick={handleChange3} style={{backgroundImage:`url(${image4})`}}>
                 <h3>department</h3>
          </div>
          <div className={`panel ${isselect4 ? "active" : ''} `} onClick={handleChange4} style={{backgroundImage:`url(${image5})`}}>
                 <h3>reading</h3>
          </div>

        </div>
    
    </div>
  )
}

export default FirstPro