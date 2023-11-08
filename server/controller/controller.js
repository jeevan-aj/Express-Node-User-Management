const Userdb = require('../model/model')

//create and save new user
exports.create = (req,res)=> {
    if(!req.body){
        res.status(400).send({message:"canot add empty data"})
        return
    }
    //new user
    else{
        const user = new Userdb({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            gender:req.body.gender,
            status:req.body.status

        })
    //save user in database
    user.save(user)
        .then(data=> {
            // res.send(data)
            res.redirect('/add_user')
        })
        .catch(err=> {
            res.status(500).send({
                message:err.message||"something went wrong while createing new user"
            });
        });
    }
}

//find a single user and find all user
exports.find = (req,res)=> {
    if(req.query.id){
        const id = req.query.id
        Userdb.findById(id)
        .then(data=> {
            if(!data){
                res.status(500).send({message:"the given id is not found"})
            }
            else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message:"something went wrong while fetching this id"})
        })
    }
    else{
        Userdb.find()
        .then(data=> {
            res.send(data);
        })
        .catch(err=> {
            res.status(500).send({
                message:err.message||"something went wrong while getting gata"
            })
        })
    }
   
}

//update a user by id
exports.update = (req,res)=> {
    if(!req.body){
        res.status(500).send({message:"cannot find empty"})
        return
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{new:true})
    .then(data => {
        if(!data){
            res.status(404).send({message:`cannot find id ${id}:maybe it dose not exist`})
        }
        else{
            res.send(data);
        }
        
    })
    .catch(err => {
        res.status(500).send({message:err.message||"something went wrong while updateing"})
    })
}

//delete a uesr by id
exports.delete = (req,res)=> {
    const id = req.params.id
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message:"id not found"})
        }
        else{
            res.send({message:`id ${id} removed`})
        }
    })
    .catch(err=> {
        res.status(500).send({message:err.message||"something went wrong"})
    })
//    }
   
    

}