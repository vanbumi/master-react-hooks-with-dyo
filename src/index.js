import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// function createObject() {
//     console.log('outmost this', this);

//     return {
//         arrowFunction: () => {
//             console.log('arrowFunction this lah', this);
//         },
//         functionKeywordFunction: function() {
//             console.log('functionKeyword this lah', this);
//         }
//     }
// }

// const obj = createObject();
// console.log('obj', obj);

// obj.arrowFunction();
// obj.functionKeywordFunction();

// cek hasilnya di console