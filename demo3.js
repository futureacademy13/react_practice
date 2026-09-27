function addno(a,b)
{
   var c = a+b;
   console.log(c);
   // console.log(arguments);
    for(var i=0; i<arguments.length; i++)
    {
        console.log(arguments[i]);
    }
}

const  showdata= (...xyz)=>{
     console.log(xyz);
}

//addno(10,20,30,40,50);

showdata(10,20,30,40,50);