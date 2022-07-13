import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@material-ui/core';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React x Laravel</div>

                        <div className="card-body">復習と勉強を兼ねてLaravel x React x Pages</div>
                        <Button color="primary" variant="contained">Hello Laravel x React</Button>
                        <Button color="primary" variant="contained">Home</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
