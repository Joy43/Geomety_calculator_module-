//---------------tringle calculate --------------
function calculateTringleArea(){
   
  const baseField=document.getElementById('tinangel-base');
  const baseValueText=baseField.value;
  const base=parseFloat(baseValueText);
  // console.log(base);

// height
const heightField=document.getElementById('tingle-height');
const heightValueText=heightField.value;
const height=parseFloat(heightValueText);
// console.log(height);
const area=0.5*base*height;
console.log(area);
// show tringle area
const areaSpan=document.getElementById('triangle-Area');
areaSpan.innerText=area;
}

// -------------------Rectangle calculate------------------
function calculateRectangleArea(){
  // width
  const withField=document.getElementById('rectangle-width')
  const widthValueText=withField.value;
  const width=parseFloat(widthValueText)
  // console.log(width);

  // length
  const lengthField=document.getElementById('rectangle-length');
  const lengthValueText=lengthField.value;
  const length=parseFloat(lengthValueText);
  // console.log(height);
  const Rectanglearea=width*length;
  console.log(Rectanglearea);
  // show tringle area
  const RectangleareaSpan=document.getElementById('Rectsnangle-Area');
  RectangleareaSpan.innerText=Rectanglearea;

}


//---------------reusable function------- parallelogram----------- 

function calculateParallelogramArea(){
const base=getInputValue('parallrlogram-base');
// console.log(value);

// height
const height=getInputValue('parallelogram-height');
// console.log(height);
const area=base*height;
console.log(area);
setElementInnerText('parallelogram-area',area);




}

// ----------ellips------------------
function calculateEllipsArea(){
  const majorRadius=getInputValue('ellips-major-radius');
  const minorRadius=getInputValue('ellips-minor-radius');
  const area=3.1416*majorRadius*minorRadius;
  const areaTwoDecemal=area.toFixed(2);
  setElementInnerText('ellips-area',area,areaTwoDecemal);
  
}

// resable get input value field
function getInputValue(fieldId){
  const inputField=document.getElementById(fieldId);
  inputValueText=inputField.value;
  const value=parseFloat(inputValueText);
  return value;

}
// resuable set span,p,div etc
function setElementInnerText(elementId,area){
  const element=document.getElementById(elementId)
  element.innerText=area;
  
  
}



