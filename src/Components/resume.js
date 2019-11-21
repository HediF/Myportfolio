import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {

    
    
  render() {

    return(
      <div>
        <Grid>
          <Cell  col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://carlisletheacarlisletheatre.org/images/avatar-icon-boy-6.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '0em'}}>Hedi Feki</h2>
            <h4 style={{color: 'grey'}}>Student</h4>
            <hr style={{borderTop: '3px solid #2c3e50', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #2c3e50', width: '50%'}}/>
            <h5>Address</h5>
            <p>Große Klingergasse</p>
            <hr style={{borderTop: '3px solid #2c3e50', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(+49) 15225807583</p>
            <hr style={{borderTop: '3px solid #2c3e50', width: '50%'}}/>
            <h5>Email</h5>
            <p>Hedifeki1996@gmail.com</p>
            <h5>Web</h5>
            <hr style={{borderTop: '3px solid #2c3e50', width: '50%'}}/>
            <p>Hedi-Feki.com </p>
            <hr style={{borderTop: '3px solid #2c3e50', width: '50%'}}/>
          </Cell>
          <Cell  col={6}>
          </Cell>
        </Grid>

      </div>
    )
  }
}
export default Resume;
