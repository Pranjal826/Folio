import { Link } from 'react-router-dom'

const Experience=()=>{
    return(
        <>
        
      <section className="experience" id="experience">

<h1 className="heading"> <span> Internships </span> </h1>

<div className="box-container">

  

  <div className="box">

    <div className="content exp-tra">
      <span> 2022</span>
      <h3>Sales And Marketing </h3>
      <p>
        <Link to='https://drive.google.com/file/d/1bCToGV-Dgss7_aran4F7sUL50XjIKf0d/view?usp=drive_link'>Click here to show</Link>
      </p>
    </div>
  </div>


  <div className="box">

    <div className="content exp-tra">
      <span> 2022</span>
      <h3>Web Development Internship </h3>
      <p>
        <Link to='https://drive.google.com/file/d/1b920NN2cm8gBDv3-QRFd4ksNUxjXjd78/view?usp=sharing'>Click here to show</Link>
      </p>
    </div>
  </div>
  <div className="box">

    <div className="content exp-tra">
      <span> 2022</span>
      <h3>Campus Ambassador(IIT Delhi) </h3>
      <p>
        <Link to='https://drive.google.com/file/d/1bGV-x2wdPkHBIUnkqHg6Nb2STcjULGU9/view?usp=drive_link'>Click here</Link>
      </p>
    </div>
  </div>


  <div className="box">
    <div className="content exp-tra">
      <span>2021</span>
      <h3>Web Dev Internship </h3>
      <p>
        <Link to='https://drive.google.com/file/d/1WNsOOzp0X_vzTAK1lyOiYEXP1_H6aGhW/view?usp=sharing'>Click here</Link>
      </p>
    </div>

  </div>
  <div className="box">

    <div className="content exp-tra">
      <span> 2021</span>
      <h3>Web dev completion certificate by Bolt IoT</h3>
      <p>
        <Link to='https://drive.google.com/file/d/1jlq-z0M1uhw-I1wikj_qJFeyXkD2Uk2A/view?usp=sharing'>Click here</Link>
      </p>
    </div>
  </div>
 
</div>
</section>
        </>
    )
}
export default Experience;