const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'user name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    address:{
        type:Array
    },
    phone:{
        type:String,
        required:[true,'phone number is required'],
    },
    usertype:{
        type:String,
        required:[true,'user type is required'],
        default:'client',
        enum:['client','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://www.bing.com/images/search?view=detailV2&ccid=ghDeAxQE&id=9E95F1A2B7435220E4E7B1254157AB3C0186FF81&thid=OIP.ghDeAxQENeJRnpp7tlZyCwHaHa&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f036%2f280%2f650%2flarge_2x%2fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8210de03140435e2519e9a7bb656720b%3frik%3dgf%252bGATyrV0ElsQ%26pid%3dImgRaw%26r%3d0&exph=1920&expw=1920&q=Blank+Profile&FORM=IRPRST&ck=1B1594B5CAA46BC53390DFF13EF624FA&selectedIndex=9&itb=0'
    },
    answer:{
        type:String,
        required:[true,'Answer is required']
    }
},{timestamps:true})


//export
module.exports=mongoose.model('User',userSchema);