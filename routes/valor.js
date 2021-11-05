const express = require('express');
const router = express.Router();

router.get('/valor/:value', (req, res) => {
    console.log(req.params.value)
    io.emit('cambiaValor', {valor: req.params.value});
    res.send(req.params.value);
})

module.exports = router;