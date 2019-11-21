import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Typist from 'react-typist';

class Contact extends Component {
    render() {
      return(
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Hedi Feki</h2>
              <img className="avatContact"
                src="https://media.licdn.com/dms/image/C4D03AQFdc0x_uR3w3Q/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=RiClXcnGdN0F5JqdM0OgivB-UxeL5Oc3YOi4PPIfkLs"
                alt="avatar"
                style={{height: '250px'}}
                 />
               <p style={{ margin: 'auto', paddingTop: '1em'}}>
               <Typist className="text-display">
               <span className='oups'>Hey there! it's me again, Hedi! if you are interested in contacting me, please reach me via E-mail, Phone or even Linkedin.</span> 
               </Typist>

               </p>
            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (+49) 15225807583
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      Hedifeki1996@gmail.com
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-skype" aria-hidden="true"/>
                      hedi.feki3
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    }
  }
  export default Contact;
  