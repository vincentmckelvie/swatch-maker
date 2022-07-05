//import {SwatchHolder} from './SwatchHolder.js';
import { CanvasRenderer } from "./swatches/Render.js";

let sw = [];
const holder = document.getElementById("swatches");
let i = 0;
const colorItems = swatches.map((swatch, id) => {
	const cr =  new CanvasRenderer(swatch, holder, i);
	sw.push( cr );
	i++;
})

document.getElementById("export-btn").addEventListener("click", function(event){
	let a = [];
	for(let i = 0; i<sw.length; i++){
		let b = [];
		for(let k = 0; k<sw[i].swatch.arr.length; k++){
			b.push({col:sw[i].swatch.arr[k].color})	
		}
		a.push(b)
	}
	const json = JSON.stringify(a);
	download(json, 'colors.json', 'text/plain');
})

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

const input = document.getElementById("load-btn");
input.addEventListener('change', function(e){
	var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
});

function onReaderLoad(event){
    console.log(event.target.result);
    var obj = JSON.parse(event.target.result);
    
    deleteChildren();
    sw = [];

    setTimeout(function(){
    	for( let i = 0; i<obj.length; i++){
	    	const swatch = obj[i];
	    	const cr =  new CanvasRenderer(swatch, holder, i);
			sw.push( cr );
	    }	
    },200)
   
    
}	

function deleteChildren() {
    var e = holder;
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}