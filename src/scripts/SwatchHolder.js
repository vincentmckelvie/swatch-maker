import {SwatchSingle} from './SwatchSingle.js';

class SwatchHolder {
  constructor(OBJ) {
  	this.parent = OBJ.parent;
  	this.amt = OBJ.amt;
  	this.arr = [];
  	this.dom = document.createElement("div");
  	this.dom.className = "swatch-holder";
  	this.parent.appendChild(this.dom);
    this.ogArr = OBJ.swatchArray;
  	
    for(let i = 0; i < this.ogArr.length; i++){
      this.arr.push(new SwatchSingle({parent:this.dom, value: this.ogArr[i].col, index:i, spawn:this, length:this.ogArr.length-1}))
    }

  }
  bounce(){
  	const fnl = "[";
  	for(let i = 0; i < this.arr.length; i++){
  		fnl+=this.arr[i].color
  		if(i<this.arr.length-1)
  			fnl+=",";
  	}
  	fnl+="]";
  	return fnl;
  }

  removeSwatchColor(index){
    this.arr.splice(index, 1);
    this.resetIndexes();
  }
  addSwatchColor(index, currHolder){
    this.arr.splice(index+1, 0, new SwatchSingle( {parent:this.dom, value: "#ffffff", index:index+1, spawn:this, length:this.arr.length-1, after:currHolder.nextSibling}) );
    this.resetIndexes();
  }
  swatchLeft(index, holder, before){
    const h = this.arr[index-1].color; 
    this.arr[index-1].swapColors(this.arr[index].color)
    this.arr[index].swapColors(h);
  }

  swatchRight(index, holder, before){
    const h = this.arr[index+1].color; 
    this.arr[index+1].swapColors(this.arr[index].color)
    this.arr[index].swapColors(h);
  }

  resetIndexes(){
    for(let i = 0; i<this.arr.length; i++){
      this.arr[i].updateIndex(i, this.arr.length-1)
      console.log(this.arr[i].index+" "+this.arr[i].color)
    }
  }
 

}
export { SwatchHolder };
