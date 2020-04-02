import Webgl from './Webgl.js';
import Shader from './Shader.js';
import Triangle from './Triangle.js';
import Buffer from './Buffer.js';

class App{
    constructor(){
        this.gl = new Webgl(); //webgl context

        this.clear();
        this.buffer = new Buffer(this.gl);
        
        this.draw();
    }

    clear(){
        this.gl.clearColor(0, 0, 0, 1.0);
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
    }

    async draw(){

        const shader = await new Shader(this.gl, './src/vs.glsl', './src/fs.glsl');
        this.gl.useProgram(shader);
        
        this.clear();
        this.drawTriangle(shader);
    }

    drawTriangle(shader){
        const coords = [
            0.0, -1.0,
            0.0, 1.0,
            1.0, -1.0
        ];
        const color = [1.0, 0.0, 0.0, 1.0]
        const triangle = new Triangle(this.gl, shader, this.buffer, coords, color);

    }
}

const app = new App();