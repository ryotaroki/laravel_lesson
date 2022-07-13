import React from 'react';
 const header = () => {
     <>
       <h1>react練習のヘッダー</h1>
     </>
 }

 export default header;

 if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
