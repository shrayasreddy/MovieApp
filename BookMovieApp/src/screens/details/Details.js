import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import axios from 'axios';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';


export default class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieData: {},
            movieUrl:"",
            artists:[],
            starIcons:[{
                id: 1,
                stateId: "s1",
                color: "black"
            },
            {
                id: 2,
                stateId: "s2",
                color: "black"
            },
            {
                id: 3,
                stateId: "s3",
                color: "black"
            },
            {
                id: 4,
                stateId: "s4",
                color: "black"
            },
            {
                id: 5,
                stateId: "s5",
                color: "black"
            }]

        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8085/api/v1/movies/${this.props.match.params.id}`).then(output => {
            this.setState({ movieData: output.data, movieUrl: output.data.trailer_url });
        });
        axios.get(`http://localhost:8085/api/v1/movies/${this.props.match.params.id}/artists`).then(output => {
            this.setState({ artists: output.data.artists});
        });
    }

    starClickHandler = (id)=>{
        
        let temp =  [];
        let tempStars = this.state.starIcons
        for (let i = 0; i < tempStars.length; i++) {
            let tempStar = tempStars[i];
           
            if(tempStar.id <= id){

                tempStar.color = "red";
            }
            temp.push(tempStar)
            
        }
        
        this.setState({starIcons:temp})
    }
    render() {
        var data = this.state.movieData
        return (
            <div className="main">
                <div className='backButton'>
                    <Typography>
                        <Link to="/">&#60;Back to Home</Link>
                    </Typography>
                </div>
                <div className="parent" style={{display:'flex'}}>
                    <div className="left">
                        <img src={data.poster_url}></img>
                    </div>
                    <div className="middle">
                        <div>
                            <Typography variant="headline" component="h2">{data.title} </Typography>
                        </div>

                        <div>
                            <Typography > <b>Genres : </b> {data.genre} </Typography>
                        </div>
                        <div>
                            <Typography > <b>Duration : </b> {data.duration} </Typography>
                        </div>
                        <div>
                            <Typography > <b>Release Date : </b> {data.release_date} </Typography>                            </div>
                        
                            <div>
                            <Typography ><span> <b>Rating : </b> {data.rating}</span> </Typography>
                        </div>
                        <div className="video">
                            <Typography > <b>Plot : </b>  <a href={data.wiki_url}> (WIKI LINK)</a> {data.storyline} </Typography>                            </div>
                            <div >
                            <Typography > <b>Trailer : </b>   </Typography>                            </div>
                            <div >
                    <YouTube videoId={this.state.movieUrl.split("?v=")[1]}  onReady={this._onReady} />
                                              
                             </div> 
                    </div>
                    

                   
                    <div className="right">
                    <Typography>
                            <span className="bold">Rate this movie: </span>
                        </Typography>
                        {this.state.starIcons.map(star => (
                            <StarBorderIcon
                                className={star.color}
                                key={"s" + star.id}
                                 onClick={() => this.starClickHandler(star.id)}
                            />
                        ))}

                        <div>
                        <Typography  > <b>Artists : </b> </Typography>
                            </div>
                    <div>
                        
                    <GridList cols={2}  className="Artist">
              {this.state.artists.map(tile => (
                <GridListTile key={tile.img} >
                  <img src={tile.profile_url} alt={tile.title} className="moviePosters" />
                  <GridListTileBar
                    title={tile.first_name+ " "+tile.last_name}
                    
                  />
                </GridListTile>
              ))}
            </GridList>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}
