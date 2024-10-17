import { TailSpin } from 'react-loader-spinner';
import './loading.css';

import React from 'react';


export const Loading: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="loader">
                <TailSpin
                    visible={true}
                    height="60"
                    width="60"
                    color="blue"
                    ariaLabel="tail-spin-loading"
                    radius="0"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    )
}