
export default class Triangle{
    constructor(gl, shader, buffer, coords, color){

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(coords), gl.STATIC_DRAW);

        const position = gl.getAttribLocation(shader, 'position');
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, gl.FALSE, 0, 0);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
}