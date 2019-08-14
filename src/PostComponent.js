import React from 'react';
import './Post.css';

export const PostComponent = ({postagem}) => (
    <>
    <div id="espaco">
    <img id="posimg" src='smiley.gif' height="300" width="400" />
    <div id="borda">{postagem}</div>
    </div>
    </>
)

