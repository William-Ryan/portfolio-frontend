import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio Site</h1>
            <div>
                <img src={require('../images/Professional.jpg')} alt="site owner William"></img>
            </div>
        </div>
    )
}

export default Home;