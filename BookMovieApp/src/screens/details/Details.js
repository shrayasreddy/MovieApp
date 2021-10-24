import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import axios from 'axios';

export default class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieData: {}
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8085/api/v1/movies/${this.props.match.params.id}`).then(output => {
            this.setState({ movieData: output.data });
        });
    }
    render() {
        var data = this.state.movieData
        return (
            <div className="main">
                <div>
                    <Typography>
                        <Link to="/">Back to Home</Link>
                    </Typography>
                </div>
                <div className="parent">
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
                        <div>
                            <Typography > <b>Plot : </b>  <a href={data.wiki_url}> (WIKI LINK)</a> {data.storyline} </Typography>                            </div>

                    </div>
                    <div className="right">
                    </div>
                </div>
            </div>
        );
    }

}
