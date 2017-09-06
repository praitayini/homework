
function call(){
   var xVal=parseInt(x.value);
   var yVal=parseInt(y.value);
   document.getElementById("z").textContent=xVal+yVal
}
x.onkeyup=y.onkeyup=call



/*
   if(isNaN(x)||isNaN(y)){
          alert("please enter a number");
     }
     else

        {

         var z=x+y;
         alert("The sum is " +result);
       }

}
*/