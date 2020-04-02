import Vector2 from './Vector2.js';

export default class Canvas{
    constructor(isFullScreen){
        this.isFullScreen = isFullScreen;
        this.size = new Vector2(800, 600);
        this.canvas =  document.getElementById('canvas');
        if(isFullScreen){
            this.fullScreen();
        }else{
            this.sizeScreen();
        }
        return this.canvas;
    }

    /*constructor(canvas, size){
        this.canvas =  canvas;
        this.size = size;
        this.sizeScreen(size);
    }*/

    fullScreen(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = innerHeight;
    }

    sizeScreen(){
        this.canvas.width = this.size.x;
        this.canvas.height = this.size.y;
    }
}