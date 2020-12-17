const mongo =  require('../config/bd');
const router = require('express').Router();
const usuarioController = require('../controllers/userControl');

router.get('/', (req, res) => {
    res.json({
        status: '200',
        message: 'Nao ha erros'
    })
});

router.route('/user')
    .get(userControl.index)
    .post(userControl.add);

router.route('/user/:id')
    .get(userControl.view)
    .patch(userControl.update)
    .put(userControl.update)
    .delete(userControl.delete);

module.exports = router;