import * as $ from 'jquery';
import '@/babel';
import Post from '@/post';
import '@css/style.css';
import '@css/less.less';
import '@css/sass.scss';
import json from 'files/jsonText.json';
import dice from '@img/dice-5.png';
import xml from 'files/some';

const post = new Post('WebPack post title', dice);
$('pre').html(post.toString());
 console.log('Post to a single string' + post);
 console.log('JSON:'+ JSON.stringify(json));
 console.log('XML:'+ JSON.stringify(xml));