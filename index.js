let a,b,c;

    document.getElementById("submit").onclick=function(){
    
    
    a=document.getElementById("side-a-input").value;
    b=document.getElementById("side-b-input").value;
    a=Number(a);
    b=Number(b);
    if(a<=0||b<=0){
        document.getElementById("side-c").innerHTML="enter corect values";
            
    }else{
    c=Math.sqrt(a*a+b*b);
    document.getElementById("side-c").innerHTML="side c : hypotenuse =" + c;
    }

}