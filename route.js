const express=require('express')
const router=express.Router()

const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('./product');




router.post('/', (req, res) => {

    createProduct(req.body, (err, product) => {

        if (err) {
            return res.status(500).json({
                message: 'Error saving data'
            });
        }

        res.status(201).json({
            message: 'Product created',
            product
        });
    });

});

router.get('/', (req, res) => {

    getAllProducts((err, products) => {

        if (err) {
            return res.status(500).json({
                message: 'Error reading data'
            });
        }

        res.json(products);
    });

});


router.get('/:id', (req, res) => {

    getProductById(req.params.id, (err, product) => {

        if (err) {
            return res.status(500).json({
                message: 'Error reading data'
            });
        }

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.json(product);
    });

});




router.put('/:id', (req, res) => {

    updateProduct(
        req.params.id,
        req.body,
        (err, product) => {

            if (err) {
                return res.status(500).json({
                    message: 'Error updating data'
                });
            }

            if (!product) {
                return res.status(404).json({
                    message: 'Product not found'
                });
            }

            res.json({
                message: 'Product updated',
                product
            });
        }
    );

});

router.delete('/:id', (req, res) => {

    deleteProduct(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: 'Error deleting data'
            });
        }

        if (!result) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.json({
            message: 'Product deleted'
        });
    });

});


module.exports = router;