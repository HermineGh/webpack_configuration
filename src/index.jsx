import * as $ from 'jquery';
import '@/babel';
import Post from '@/post';
import '@css/style.css';
import '@css/less.less';
import '@css/sass.scss';
import json from 'files/jsonText.json';
import dice from '@img/dice-5.png';
import xml from 'files/some';

//for React
import React from 'react';
import {render} from 'react-dom';

const App = () => (<div className="container">
    <h1>Webpack contents</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti!</p>
    <hr/>
    <pre></pre>
    <hr/>
    <div className="box">
        <h2>LESS</h2>
    </div>
    <div className="card">
        <h2>SASS</h2>
    </div>
    <img src="images/dice-5.png" width="500" alt="images"/>
    </div>)
render (<App />, document.getElementById('app'))

const post = new Post('WebPack post title', dice);
$('pre').html(post.toString());
 console.log('Post to a single string' + post);
 console.log('JSON:'+ JSON.stringify(json));
 console.log('XML:'+ JSON.stringify(xml));