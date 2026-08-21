const fs=require('fs')

 
function createProduct(product){

    if(!fs.existsSync('data.json')){
        fs.writeFileSync('data.json',"[]")
    }
    
    const data=fs.readFile('./data.json','utf-8',(err,content)=>{
    if(err){
        console.log(err); 
        
    }
 
    
        const products = JSON.parse(content);

    products.push(product);

   
    fs.writeFile('./data.json',JSON.stringify(products),(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log('data creat');
        
    }
    })
})
}





function getall(){

    
    return fs.readFile('./data.json','utf-8',(err,content)=>{
    if(err){
        console.log(err);  
        
    }
    else{
        const myconst =JSON.parse(content)
        console.log(myconst);
        
    }
})

}

function getById(id){

    const data=fs.readFile('./data.json','utf-8',(err,content)=>{
    if(err){
        console.log(err);
        return;
    }
  
        const products  =JSON.parse(content)
   
        
    

   const product =products.find(product=>product.id==id)

 if (!product) {
            console.log('product not found');
            return;
 }
          console.log(product);

})

}


function updatePById(id,update){

    
    const data=fs.readFile('./data.json','utf-8',(err,content)=>{
    if(err){
        console.log(err); 
        
    }
  
        const myconst =JSON.parse(content)
        // console.log(myconst);
        

const product=myconst.find(up=>up.id==id)
if(!product){
    console.log('product not found')
    return;

}

product.name=update.name
product.desc=update.desc
product.price=update.price

fs.writeFile('./data.json',JSON.stringify(myconst),(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('data updated')
    }
})
})
}



function deletePById(id){

     const data=fs.readFile('./data.json','utf-8',(err,content)=>{
    if(err){
        console.log(err);  
        
    }
  
        const myconst =JSON.parse(content)
        // console.log(myconst);


const New=myconst.filter(product=>product.id!==id )


fs.writeFile('./data.json',JSON.stringify(New),(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('data updated')
    }
})
})

}

 createProduct( 
       {
        id:1,
    name:'product 1',
     desc:'product 1 desc' ,
     price:10}
)

 createProduct( 
       {
        id:2,
    name:'product 2',
     desc:'product 2 desc' ,
     price:20}
)
createProduct( 
       {
        id:3,
    name:'product 3',
     desc:'product 3 desc' ,
     price:30}
)

createProduct( 
       {
        id:4,
    name:'product 4',
     desc:'product 4 desc' ,
     price:30}
)

// getall()
// getById(2)
// updatePById(3, {
//     name: 'product 13',
//     desc: 'product 13 desc',
//     price: 120
// });

// deletePById(4)