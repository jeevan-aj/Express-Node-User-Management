const axios = require('axios')

exports.homeRoutes = (req,res)=> {

    //make aget request to the api users
    axios.get('http://localhost:2000/api/find')
    .then(response => {
        res.render('index',{users:response.data});
    })
    .catch(err=> {
        res.send(err)
    })
   
}

exports.newUserRoutes = (req,res)=> {
    res.render('add_user')
}


exports.updateRoutes = (req,res)=> {
    axios.get('http://localhost:2000/api/find',{params:{id:req.query.id}})
    .then(userdata=> {
        res.render('update_user',{user:userdata.data})
    })
    .catch(err=> {
        res.status(500).send(err)
    })
}