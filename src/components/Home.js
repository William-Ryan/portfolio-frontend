import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <h3>And</h3>
            <h1>Congratulations!</h1>
            <p>You've just found your next... Full-Stack Web Developer!</p>
            <div>
                <span role="img" aria-label="Right Arrow" >▶️</span>
                <img src={require('../images/Professional.jpg')} alt="site owner"></img>
                <span role="img" aria-label="Left Arrow" >◀️</span>
            </div>
        </div>
    )
}

export default Home;