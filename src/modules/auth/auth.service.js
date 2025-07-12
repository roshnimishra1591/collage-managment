import jwt from "jsonwebtoken"


class authService{
    jwtTokenGenerator = (payLoad,secret,time) =>{
        // generating the jwt token
        let token = jwt.sign({email:payLoad},secret,{expiresIn:time});

        // setting this token in the cookies
        res.cookie('token', token, {
        httpOnly: true,       // prevents JavaScript access (XSS protection)
        secure: false,        // set to true if using HTTPS
        sameSite: 'strict',   // CSRF protection
        maxAge: 60 * 60 * 1000 // 1 hour
      });
    }


    // isAuthenticated = (token)=>{
    //    let  decodedUser = 
    // }
}

const authSVC = new authService()

export default authSVC;