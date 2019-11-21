import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class landingPage  extends Component {
    state = {  }

    
    render() { 
        return (
        <div style = {{ width: '100%' , margin: 'auto'}}> 
        <Grid className = "landing-grid">
            <Cell col ={12}>
            <img src = "https://media.licdn.com/dms/image/C4D03AQFdc0x_uR3w3Q/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=RiClXcnGdN0F5JqdM0OgivB-UxeL5Oc3YOi4PPIfkLs" alt ='avatar' className ="avatar-img"></img>
            <div className = "banner-text" style={{fontSize: '30px', fontFamily: 'Anton'}}><h1> Business Computing Student</h1>
            <hr/>
            <div style={{fontSize: '30px', fontFamily: 'Anton'}}>HTML|CSS|XML, Java, Git, Firebase, SQL, UML, React.js</div>
            <hr/>

            <div className="social-links">

            <a href="https://www.linkedin.com/in/h%C3%A8di-feki-663aab169/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            <a href="https://github.com/HediF" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            
            <a href="https://www.youtube.com/channel/UCO5OLlVZeDCZ_rWh71WHJlw?view_as=subscriber" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>


            </div>
            </div>
        </Cell>
        </Grid>


        </div>
        )
    }

    
      
}
 
export default landingPage ;