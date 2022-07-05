class SwatchSingle {
  constructor(OBJ) {
  	const self = this;
  	this.parent = OBJ.parent;
  	this.color = "#ffffff";
  	this.index = OBJ.index;
    this.arrlen = OBJ.length;
    this.spawn = OBJ.spawn;
  	this.holder = document.createElement("span");
  	this.holder.className = "swatch-single-holder";
  	if(OBJ.after == null){
      this.parent.appendChild(this.holder);
    }else{
      this.parent.insertBefore(this.holder, OBJ.after);
    }
  	this.dom = document.createElement("input");
  	this.dom.setAttribute("type","color");
  	this.dom.className = "swatch-single";
  	this.dom.value = this.color;
  	this.holder.appendChild(this.dom);
  	
  	this.hexInput = document.createElement("input");
  	this.hexInput.setAttribute("type","text");
  	this.hexInput.className = "swatch-hex-single";
  	this.hexInput.value = "#ffffff";
  	this.holder.appendChild(this.hexInput);
    
    this.x = document.createElement("div");
    this.x.className = "under-btn";
    this.holder.appendChild(this.x);
    this.x.innerHTML = "x";

    this.add = document.createElement("div");
    this.add.className = "under-btn";
    this.holder.appendChild(this.add);
    this.add.innerHTML = "+";

    this.left = document.createElement("div");
    this.left.className = "under-btn";
    this.holder.appendChild(this.left);
    this.left.innerHTML = "&#8592";

    this.right = document.createElement("div");
    this.right.className = "under-btn";
    this.holder.appendChild(this.right);
    this.right.innerHTML = "&#8594";

    this.dom.addEventListener('input', function(e){
  		self.color = self.dom.value;
  		self.hexInput.value = self.color;
  	});
  	this.hexInput.addEventListener('input', function(){
  		const val = self.hexInput.value;
			self.color = val;
			self.dom.value = val;	
  	});
    this.x.addEventListener("click", function(){
      self.removeSwatchColor();
    });
    this.add.addEventListener("click", function(){
      self.addSwatchColor();
    });
    this.right.addEventListener("click", function(){
      if(self.index!=self.arrlen){
        self.swatchRight();
      }
    });
    this.left.addEventListener("click", function(){
      if(self.index!=0){
        self.swatchLeft();
      }
    });
    
    this.color = OBJ.value;
    this.dom.value = this.color;
    this.hexInput.value = this.color;
  	
  }
  removeSwatchColor(){
    this.spawn.removeSwatchColor(this.index);
    this.holder.remove(); 
  }

  addSwatchColor(){
    this.spawn.addSwatchColor(this.index, this.holder);
  }
  swatchLeft(){
    console.log(this.index)
    this.spawn.swatchLeft(this.index, this.holder, this.holder.previousSibling);
  }
  swatchRight(){
    this.spawn.swatchRight(this.index, this.holder, this.holder.nextSibling.nextSibling);
  }
  swapColors(color){
    this.color = color;
    this.hexInput.color = this.color;
    this.dom.value = this.color;
  }
  updateIndex(newIndex, length){
    this.index = newIndex;
    this.arrlen = length;
  }

}
export { SwatchSingle };
