var Userdb = require('../model/model');

// create and save new user 
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty !"
        });
        return;
    }

    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        gender: req.body.gender,
        status: req.body.status
    })

    //save user data in db
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation !"
            })
        })

}

// retrive and return all users / retrive and return single user 
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
            .then(user => {
                if (!user) {
                    res.status(404).send({
                        message: "Error while retrive user data with id !" + id
                    })
                } else {
                    res.send(user)
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Error while retrive user data !"
                })
            })
    } else {
        Userdb.find()
            .then(users => {
                res.send(users)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Error while retrive user data !"
                })
            })
    }
}

// update user by id
exports.update = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty !"
        });
        return;
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { userFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update users with ${id}, May be user not found !` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: 'Error while updating user info !' })
        })

}

// delete user by is
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update delete with ${id}, May be user id is wrong !` })
            } else {
                res.send({ message: 'User deleted Successfully !' })
            }
        })
        .catch(err => {
            res.status(500).send({ message: 'Error while deleting user info !' })
        })

}