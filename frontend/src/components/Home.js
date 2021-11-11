import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to the Penalty Box!</h1>
            <p className="lead">You get to listen to me complain and there's nothing you can do about it!.</p>
            <hr className="my-4" />
            <p>Click the button below to read about how salty I am.</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out my Blog</Link>
        </div>
    </div>
);

export default home;