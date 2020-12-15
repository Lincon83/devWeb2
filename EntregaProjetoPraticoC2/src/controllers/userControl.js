const userModel = require('../models/userModel');

exports.index = (req, res) => {
    userModel.get((error, user) => {
        if (error) {
            res.json({
                status: "error",
                message: error.message
            })
        }
        res.json({
            status: "Sucesso!",
            message: "Localizada",
            dados: user
        })
    })
}

exports.add = (req, res) => {
    let user = new userModel();
    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email;
    user.dateCreateAt = new Date();

    user.save((error) => {
        if (error) {
            res.json(error);
        }
        res.json({
            message: "Salva",
            dados: user
        })
    })
}

exports.view = (req, res) => {
    userModel.findById(req.params.id, (error, user) => {
        if (error) {
            res.send(error);
        }
        res.json({
            message: "Consultada!",
            dados: user
        });
    });
}

exports.update = (req, res) => {
    userModel.findById(req.params.id, (error, user) => {
        if (error) res.send(error);
        user.name = req.body.name;
        user.email = req.body.email;
        user.dateUpdate = new Date();
        user.latitude = request.body.latitude;
        user.longitude = request.body.longitude;

        user.save(error => {
            if (error) res.json(error);
            res.json({
                message: "Atualizada!",
                dados: user
            })
        })
    })
}

exports.delete = (req, res) => {

    userModel.deleteOne({
        _id: req.body.id
    }, (error, resposta) => {
        if (error) res.send(error);
        res.json({
            status: 'Sucesso!',
            message: "Excluida",
        })
    })
}
