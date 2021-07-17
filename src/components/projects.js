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
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: 'magenta', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >Bootstrap Project #1</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: 'magenta'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: 'magenta', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >Bootstrap Project #2</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: 'magenta'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: 'magenta', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >Bootstrap Project #3</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: 'magenta'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>  
        
      )
    } else if(this.state.activeTab === 1) {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: 'orange', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >React Project #1</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: 'orange'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: 'orange', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >React Project #2</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: 'orange'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: 'orange', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >React Project #3</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: 'orange'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>  
        
        )
    } else if(this.state.activeTab === 2) {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: '#843AB4', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >React Native Project #1</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#843AB4'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: '#843AB4', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >React Native Project #2</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#843AB4'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: '#843AB4', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >React Native Project #3</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#843AB4'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>  
        
        )
    } else {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: '#FD251F', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >NodeJS Project #1</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#FD251F'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: '#FD251F', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >NodeJS Project #2</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#FD251F'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            {/* I cannot get my images to render as background images */}
          <CardTitle style={{color: '#FD251F', height: '176px', background: 'url(http://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png) bottom right 15% no-repeat #46B6AC'}} >NodeJS Project #3</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#FD251F'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>  
        
        );
    }
}



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Bootstrap</Tab>
          <Tab>React</Tab>
          <Tab>React Native</Tab>
          <Tab>NodeJS</Tab>
        </Tabs>

        <Grid>
        <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
        </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
