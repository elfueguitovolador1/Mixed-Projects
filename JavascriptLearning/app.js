const carta = 'bici coche balón _playstation bici coche peluche'




    cartax = carta.split(' ');
    let objetos = {};
    for (let j = 0; j < cartax.length; j++) {
                objetos[cartax[j]]=0
                
            }
        for (let i= 0; i<cartax.length; i++){
            
            if(cartax[i].indexOf('_') >= 0){
                cartax.splice(i,1)
            }
            
            objetos[cartax[i]]++
        }
    
    


console.log(cartax)

/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/