const graidForm=document.getElementById("submit");
const selectDirection=document.getElementById("selectDirection");
let GraidPreview=document.getElementById("graidBox");
let InputText=document.getElementById("inputText");
let DirectionChange1=document.getElementById("Direction1");


/*let Direction=document.getElementById("Direction").value;
let ColorStop1=document.getElementById("color-stop1").value;
let ColorStop2=document.getElementById("color-stop2").value;*/
let counter=null;
let counter1=null;
function addNewOtherOption(){
let CreateNewOtherOption=document.createElement("option");
let DirectionElement=document.getElementById("Direction");
DirectionElement.appendChild(CreateNewOtherOption);
CreateNewOtherOption.setAttribute("id","OtherOption");
CreateNewOtherOption.setAttribute("value","other");
CreateNewOtherOption.innerHTML="other";
}
graidForm.addEventListener("keyup",takeData);
selectDirection.addEventListener("change",takeDataSelected);
DirectionChange1.addEventListener("mouseover",setinputactive);
DirectionChange1.addEventListener("mouseout",setinputdeactiveted);
document.addEventListener("dblclick",refreshPage);
function setinputactive(event){
 counter=1;
 console.log(counter);
}

function setinputdeactiveted(event){
    counter=0;
    console.log(counter);
   
   }
   function setinputactive1(event){
   counter1=1;
   console.log(counter1);
   }
   function setinputdeactiveted1(event){
    counter1=0;
    console.log(counter1);
   }

   function refreshPage(event){
    location.reload();

   }

function takeDataSelected(event){
    event.preventDefault();

    let Direction=document.getElementById("Direction").value;
    let ColorStop1=document.getElementById("color-stop1").value;
    let ColorStop2=document.getElementById("color-stop2").value;
    if(Direction==="other"){

     let DirectionChange  = document.getElementById("Direction");
     DirectionChange.setAttribute("style","display:none");
    /* DirectionInput=document.createElement("input");
     let DirectionBox=document.getElementById("selectDirection");
     DirectionBox.appendChild(DirectionInput);*/
     /*<!--<input type="text" id="Direction" name="Direction" placeholder="insert Direction of gradient..."   />-->*/
     /*DirectionInput.setAttribute("type","text");
     DirectionInput.setAttribute("id","Direction");
     DirectionInput.setAttribute("name","Direction");
     DirectionInput.setAttribute("placeholder","insert Direction of gradient..."); */
     let DirectionChange1=document.getElementById("Direction1");
     DirectionChange1.removeAttribute("style");
     let Direction1=DirectionChange1.value;

    GraidPreview.setAttribute("style","background-image: linear-gradient("+Direction1+", "+ColorStop1 +","+ ColorStop2+")");
    InputText.setAttribute("style","background-image: linear-gradient("+Direction1+", "+ColorStop1 +","+ ColorStop2+")");
 
    let InputTextDirection=document.getElementById("inputTextDirecton");
    let InputTextColorStop1=document.getElementById("inputTextcolor-stop1");
    let InputTextColorStop2=document.getElementById("inputTextcolor-stop2");
    InputTextDirection.innerHTML=Direction1;
    InputTextColorStop1.innerHTML=ColorStop1;
    InputTextColorStop2.innerHTML=ColorStop2;

    if((Direction1 !="")&&(ColorStop1 !="")&&(ColorStop2 !="")&&(counter !=1)){
        let otherOption=document.getElementById("OtherOption");
        otherOption.innerHTML=Direction1;
       otherOption.setAttribute("style","background-color: yellow");
        
        DirectionChange1.setAttribute("style","display: none");
        DirectionChange.removeAttribute("style");
        otherOption.removeAttribute("value");
        otherOption.setAttribute("value",""+Direction1+"");
        DirectionChange1.value="";
        otherOption.removeAttribute("id");
        
       
        addNewOtherOption();
       }
    }
    else{
    let GraidPreview=document.getElementById("graidBox");
    let InputText=document.getElementById("inputText");
    let Direction=document.getElementById("Direction").value;
    let ColorStop1=document.getElementById("color-stop1").value;
    let ColorStop2=document.getElementById("color-stop2").value;
    
   
        GraidPreview.setAttribute("style","background-image: linear-gradient("+Direction+", "+ColorStop1 +","+ ColorStop2+")");
        InputText.setAttribute("style","background-image: linear-gradient("+Direction+", "+ColorStop1 +","+ ColorStop2+")");
    

    let InputTextDirection=document.getElementById("inputTextDirecton");
    let InputTextColorStop1=document.getElementById("inputTextcolor-stop1");
    let InputTextColorStop2=document.getElementById("inputTextcolor-stop2");
    InputTextDirection.innerHTML=Direction;
    InputTextColorStop1.innerHTML=ColorStop1;
    InputTextColorStop2.innerHTML=ColorStop2;}
    
}


function takeData(event){
event.preventDefault();
let Direction=document.getElementById("Direction").value;
    let ColorStop1=document.getElementById("color-stop1").value;
    let ColorStop2=document.getElementById("color-stop2").value;
    if(Direction==="other"){

     let DirectionChange  = document.getElementById("Direction");
     DirectionChange.setAttribute("style","display:none");
    /* DirectionInput=document.createElement("input");
     let DirectionBox=document.getElementById("selectDirection");
     DirectionBox.appendChild(DirectionInput);*/
     /*<!--<input type="text" id="Direction" name="Direction" placeholder="insert Direction of gradient..."   />-->*/
     /*DirectionInput.setAttribute("type","text");
     DirectionInput.setAttribute("id","Direction");
     DirectionInput.setAttribute("name","Direction");
     DirectionInput.setAttribute("placeholder","insert Direction of gradient..."); */
     let DirectionChange1=document.getElementById("Direction1");
     DirectionChange1.removeAttribute("style");
     let Direction1=DirectionChange1.value;

    

        GraidPreview.setAttribute("style","background-image: linear-gradient("+Direction1+", "+ColorStop1 +","+ ColorStop2+")");
        InputText.setAttribute("style","background-image: linear-gradient("+Direction1+", "+ColorStop1 +","+ ColorStop2+")");
   
    let InputTextDirection=document.getElementById("inputTextDirecton");
    let InputTextColorStop1=document.getElementById("inputTextcolor-stop1");
    let InputTextColorStop2=document.getElementById("inputTextcolor-stop2");
    InputTextDirection.innerHTML=Direction1;
    InputTextColorStop1.innerHTML=ColorStop1;
    InputTextColorStop2.innerHTML=ColorStop2;
    if((Direction1 !="")&&(ColorStop1 !="")&&(ColorStop2 !="")&&(counter !=1)){
        let otherOption=document.getElementById("OtherOption");
        otherOption.innerHTML=Direction1;
         otherOption.setAttribute("style","background-color: yellow");
      
        
        DirectionChange1.setAttribute("style","display: none");
        DirectionChange.removeAttribute("style");
        otherOption.removeAttribute("value");
        otherOption.setAttribute("value",""+Direction1+"");
        DirectionChange1.value="";
        otherOption.removeAttribute("id");
        addNewOtherOption();
    }

    }
    else{
    let GraidPreview=document.getElementById("graidBox");
    let InputText=document.getElementById("inputText");
    let Direction=document.getElementById("Direction").value;
    let ColorStop1=document.getElementById("color-stop1").value;
    let ColorStop2=document.getElementById("color-stop2").value;

        GraidPreview.setAttribute("style","background-image: linear-gradient("+Direction+", "+ColorStop1 +","+ ColorStop2+")");
        InputText.setAttribute("style","background-image: linear-gradient("+Direction+", "+ColorStop1 +","+ ColorStop2+")");
   
    let InputTextDirection=document.getElementById("inputTextDirecton");
    let InputTextColorStop1=document.getElementById("inputTextcolor-stop1");
    let InputTextColorStop2=document.getElementById("inputTextcolor-stop2");
    InputTextDirection.innerHTML=Direction;
    InputTextColorStop1.innerHTML=ColorStop1;
    InputTextColorStop2.innerHTML=ColorStop2;}
}

/*if((Direction !="")&&(ColorStop1 !="")&&(ColorStop2 !="")){
   GraidPreview.classList.remove("GridPreview");
    InputText.classList.remove("GridPreview");
    GraidPreview.setAttribute("style","background-image: linear-gradient("+Direction+", "+ColorStop1 +","+ ColorStop2+")");
InputText.setAttribute("style","background-image: linear-gradient("+Direction+", "+ColorStop1 +","+ ColorStop2+")");
}*/



