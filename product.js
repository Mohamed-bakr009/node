const fs = require('fs');



function createProduct(req,res){

    if(!fs.existsSync('data.json')){
        fs.writeFileSync('data.json',"[]")
    }
    
    const data=fs.readFile('./data.json','utf-8',(err,content)=>{
    if(err){
        return res(err)
        
    }
 
    
        const products = JSON.parse(content);

    products.push(req);

   
    fs.writeFile('./data.json',JSON.stringify(products),(err)=>{
    if(err){
        return res(err)
        
    }
    else{
        console.log('data creat');
        
    }
    })
})
}


function getAllProducts(callback) {

    fs.readFile('./data.json', 'utf-8', (err, content) => {

        if (err) {
            return callback(err);
        }

        const products = JSON.parse(content);

        callback(null, products);
    });
}


function getProductById(id, callback) {

    fs.readFile('./data.json', 'utf-8', (err, content) => {

        if (err) {
            return callback(err);
        }

        const products = JSON.parse(content);

        const product = products.find(
            product => product.id == id
        );

        if (!product) {
            return callback(null, null);
        }

        callback(null, product);
    });
}


function updateProduct(id, update, callback) {

    fs.readFile('./data.json', 'utf-8', (err, content) => {

        if (err) {
            return callback(err);
        }

        const products = JSON.parse(content);

        const product = products.find(
            product => product.id == id
        );

        if (!product) {
            return callback(null, null);
        }

        product.name = update.name;
        product.desc = update.desc;
        product.price = update.price;

        fs.writeFile(
            './data.json',
            JSON.stringify(products, null, 2),
            (err) => {

                if (err) {
                    return callback(err);
                }

                callback(null, product);
            }
        );
    });
}

function deleteProduct(id, callback) {

    fs.readFile('./data.json', 'utf-8', (err, content) => {

        if (err) {
            return callback(err);
        }

        const products = JSON.parse(content);

        const newProducts = products.filter(
            product => product.id != id
        );

        if (products.length === newProducts.length) {
            return callback(null, null);
        }

        fs.writeFile(
            './data.json',
            JSON.stringify(newProducts, null, 2),
            (err) => {

                if (err) {
                    return callback(err);
                }

                callback(null, true);
            }
        );
    });
}


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};