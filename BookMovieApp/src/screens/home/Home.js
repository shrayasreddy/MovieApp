import React from 'react';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import axios from 'axios';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       upcomingMovies:[]
    }
  }
  componentDidMount(){
    console.log("check");
    axios.get("http://localhost:8085/api/v1/movies").then(Response => this.setState({upcomingMovies :Response.data.movies}))
  }
    render(){
      return(
        <div>
    <div className="upcoming">
        Upcoming Movies
        </div>
        
        <GridList cols={6} className="MuiGridList-root">
        {this.state.upcomingMovies.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.poster_url} alt={tile.title} className="moviePosters"/>
            <GridListTileBar
              title={tile.title}
              // classes={{
              //   root: classes.titleBar,
              //   title: classes.title,
              // }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon  />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </div>
      );
}
}
export default Home;