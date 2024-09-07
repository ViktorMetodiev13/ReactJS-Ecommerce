import './notFound.css';
import Not_Found_Img from '../../assets/Not_Found_Page_IMG.webp';

import React from 'react';

import { Link } from 'react-router-dom';

import * as PATHS from '../../shared/paths';


export const NotFound: React.FC = () => {
    return (
        <div className="not-Found">
            <div className="not-Found-content">
                <img src={Not_Found_Img} className='not-found-img' />

                <div className="not-found-information">
                    <div className="not-found-information-header">
                        <h2 className="not-found-information-header-title">OOPS!</h2>
                        <p className="not-found-information-header-subtitle">Something went wrong here ...</p>
                    </div>

                    <div className="not-found-information-body">
                        <h2 className="not-found-information-body-title">Page Not Found</h2>
                        <p className="not-found-information-body-subtitle">You can try again by refreshing this page,</p>
                        <p className="not-found-information-body-subtitle">or return to the <Link to={PATHS.HOME} className='not-found-information-special-text'>Home page</Link></p>
                        <p className="not-found-information-body-subtitle">If you have any other questions, please contact our <Link to={PATHS.SUPPORT} className='not-found-information-special-text'>support.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}