export function HomeRender(req, res){
    return res.render('home', {
        user: req.user
    })
}


export function SignInRender(req, res){
    return res.render('signin')
}


export function SignUpRender(req, res){
    return res.render('signup')
}