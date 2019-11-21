import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={0} style={{width: '700px', margin: 'auto'}}>
    <CardTitle style={{color: '#2c3e50', height: '176px', background: 'url(https://www.360technosoft.com/blog/wp-content/uploads/2019/01/reactjs.png) center / cover'}}>MyPortfolio</CardTitle>
    <CardText>
        Created a personal portfolio using React.js 
        <hr/>

        Libraries used: React-MDL, Google Fonts & UIGradients

    </CardText>
    <CardActions border>
            <Button colored>
               <a href="https://github.com/HediF/Swapp" rel="noopener noreferrer" target="_blank">Show in Github</a> 
            </Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <Card shadow={0} style={{width: '700px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1000/1*98MZF039wW7qw_TdtDzvmg.png) center / cover'}}>Swapp</CardTitle>
        <CardText>
        Created an Android mobile application using Firebase which allows students to find other
         potential students with whom they can exchange books, summaries or even exams.
         <hr/>
        Technologies used: Java, XML, Firebase
    
        </CardText>
        <CardActions  border>
            <Button colored>
               <a href="https://github.com/HediF/Swapp" rel="noopener noreferrer" target="_blank">Show in Github</a> 
            </Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    
          )
    } else if(this.state.activeTab === 2) {
      return (
        <Card shadow={0} style={{width: '700px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1000/1*98MZF039wW7qw_TdtDzvmg.png) center / cover'}}>Swapp</CardTitle>
        <CardText>
        App to chat with friends
         <hr/>
        Technologies used: Android Studio
    
        </CardText>
        <CardActions  border>
            <Button colored>
               <a href="https://github.com/HediF/Swapp" rel="noopener noreferrer" target="_blank">Show in Github</a> 
            </Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    
          )
      }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>MyPortfolio</Tab>
          <Tab>Swapp</Tab>
          <Tab>Chat App</Tab>

        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;
