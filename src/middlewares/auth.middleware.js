
const apiAuth = (req,res,next)=>{
    console.log(req.headers);
    if(req.headers['x-api-key'] == 'abcd-efgh-ijlk-1234'){
        next();
    }else{
        res.status(403).json({message:'Unauthorized'})
    }
    
}

module.exports = apiAuth;


// Headers: x-api-key: abcd-efgh-ijlk-1234