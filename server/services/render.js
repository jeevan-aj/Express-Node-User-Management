exports.homeRoutes = (req,res)=> {
    res.render('index');
}

exports.newUserRoutes = (req,res)=> {
    res.render('add_user')
}

exports.updateRoutes = (req,res)=> {
    res.render('update_user')
}