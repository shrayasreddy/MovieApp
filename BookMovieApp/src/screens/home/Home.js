import React from 'react';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import axios from 'axios';
//import Input from '@material-ui/core';
//import { InputLabel } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Checkbox, FormControl, Input, InputLabel, ListItemText, MenuItem, Select } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {

      main: '#42a5f5',

    }
  }
});
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      upcomingMovies: [],
      releasedMovies: [],
      generes: [],
      selectdGeners:[]
    }
  }
  componentDidMount() {
    console.log("check");
    axios.get("http://localhost:8085/api/v1/movies?status=PUBLISHED").then(Response => this.setState({ upcomingMovies: Response.data.movies }))
    axios.get("http://localhost:8085/api/v1/movies?status=RELEASED").then(Response => this.setState({ releasedMovies: Response.data.movies }))
    axios.get("http://localhost:8085/api/v1/genres").then(Response => this.setState({ generes: Response.data.genres }))

  };
  render() {
    return (
      <div>
        <div className="upcoming">
          Upcoming Movies
        </div>

        <GridList cols={6} style={{ flexWrap: 'nowrap' }} className="gridDisplay">
          {this.state.upcomingMovies.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.poster_url} alt={tile.title} className="moviePosters" />
              <GridListTileBar
                title={tile.title}
                // classes={{
                //   root: classes.titleBar,
                //   title: classes.title,
                // }}
                actionIcon={
                  <IconButton>
                    <StarBorderIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        <div className="flex-container" style={{display:'flex'}}>
          <div className="part1">
            <GridList cols={4} cellHeight={350} className="gridDisplay">
              {this.state.releasedMovies.map(tile => (
                <GridListTile key={tile.img}>
                  <img src={tile.poster_url} alt={tile.title} className="moviePosters" />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span> {tile.release_date}</span>}

                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <div className="part2">
            <Card>
              <CardContent>
                <FormControl >
                  <ThemeProvider theme={theme}>
                    <Typography color="primary">
                      FIND MOVIES BY:
                    </Typography>
                  </ThemeProvider>
                </FormControl>

                <FormControl className="fcontrol">
                  <InputLabel htmlFor="movieName">Movie Label</InputLabel>
                  <Input id="movieName"></Input>
                </FormControl>
                <FormControl className="fcontrol">
                  <InputLabel htmlFor="gener">Genres</InputLabel>
                  <Select
                  value={this.state.selectdGeners}
                  multiple
                  renderValue= {selected => selected.join(',')}
                  input = {<Input id="gener"></Input>}
                >
                    {this.state.generes.map(gen =>(<MenuItem key = {gen.id} value={gen.genre}>
                   <Checkbox>
                     </Checkbox> 
                     <ListItemText primary={gen.genre} ></ListItemText>
                    </MenuItem>))}
                    </Select>
                </FormControl>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

    );
  }
}
export default Home;