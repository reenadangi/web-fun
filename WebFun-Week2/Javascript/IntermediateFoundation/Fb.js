function FibR(n)
{ 
    if(n<2)
    {return n;}

    return FibR(n-1)+FibR(n-2);

}
// console.log(FibR(6));