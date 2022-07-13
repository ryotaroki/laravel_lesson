import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card } from '@material-ui/core';
import Header from './Header';
function Home() {
    return (
        <div className="container">
            <Card>
                <Header title="React x Laravel" introduction="Dockerでの環境作成..."/>
                <Button color="primary" variant="contained"　href={`/example`}>Exampleに遷移</Button>
            </Card>
        </div>
    );
}

export default Home;
