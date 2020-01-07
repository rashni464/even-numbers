function validate(){
    var txt1 = parseInt( document.getElementById("txt1").value)
   
    var final = ''
    
    
     
      if(txt1%2 === 0){
        final = "even";
      }else{
        final =  "odd";
      }
       
   
    document.getElementById("result").innerHTML= final
    
   }
   
   