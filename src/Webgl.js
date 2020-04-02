import Canvas from './Canvas.js';

export default class Webgl{
    constructor(){
        const canvas = new Canvas(false);
        const gl = canvas.getContext('webgl2');
        return gl;
    }
}