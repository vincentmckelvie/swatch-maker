import {SwatchHolder} from '../SwatchHolder.js';
class CanvasRenderer{
    constructor(swatch, parent, index){
        const swatchSize = 8;
        const self = this;
        this.dom = document.createElement("div");
       
        this.dom.className = "swatch-canvas-holder";
        this.canvas = document.createElement("canvas");
        this.canvas.className = "swatch-canvas";
        
        let w = 50;
        let h = 20;
        console.log(swatch)
        this.swatchArray = swatch.colorArr;
        this.amt = this.swatchArray.length;
        this.canvas.width = w*this.amt;
        this.canvas.height = h;
        
        this.ctx = this.canvas.getContext("2d",{ alpha: false });
        this.ctx.beginPath();
       
        for(var i = 0; i < this.amt; i ++){
            const sw = this.swatchArray[i];
            const pos = (i*w);
            this.ctx.fillStyle = sw.col;
            this.ctx.strokeStyle ="black";
            this.ctx.lineWidth = 1;
            this.ctx.fillRect(pos, 0, w, h);
            this.ctx.strokeRect(pos, 0, w, h);
        }

        parent.appendChild(this.dom);
        this.nameInput = document.createElement("input");
        this.nameInput.type = "text";
        this.nameInput.className = "name-input";
        this.nameInput.value = swatch.name;
       // this.nameInput.style.display = "none";

        //this.number = document.createElement("span");
        //this.number.innerHTML = "test name "+index;
        //this.number.className = "swatch-number"
        //this.dom.appendChild(this.number);
        this.dom.appendChild(this.nameInput);
        this.dom.appendChild(this.canvas);
        this.added = false;

        this.canvas.addEventListener("click",function (){
            self.addSwatch();
        });
        
        // this.number.addEventListener("click",function (){
        //     self.number.style.display = "none";
        //     self.nameInput.style.display = "inline-block";
        // });
        
        this.name = swatch.name;
        this.nameInput.addEventListener('change', (e) => {
            self.name = e.target.value;
            console.log(self.name)
        });
      
        this.swatch = new SwatchHolder({parent:this.dom, amt:this.amt, swatchArray:this.swatchArray})
        this.swatch.dom.style.display = "none";

    }   

    addSwatch(){
        if(!this.added){
            //window.createSwatch(this.amt, this.swatchArray, this.dom, this);
            this.canvas.style.display = "none";
            this.swatch.dom.style.display = "block";
            this.added = true;
        }
    }

    //return canvas;
}

export {CanvasRenderer}
