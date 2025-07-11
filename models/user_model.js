import { error } from 'console';
import crypto, { createHmac, randomBytes } from 'crypto';
import { Schema, model } from "mongoose";
import  {createTokenForUser}  from '../utils/services/auth_service.js';

const userSchema = new Schema({
    fullName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required:true
    },
    profileImgUrl: {
        type: String,
        default:'/images/default.png'
    },
    role:{
        type: String,
        enum: ["USER", "ADMIN"],
        default:"USER"
    }
}, {timestamps:true});


userSchema.pre('save', function (next){
    const user = this;
    if(!user.isModified('password')) return;

    const salt = randomBytes(16).toString();
    const hashPassword = createHmac('sha256', salt)
    .update(user.password)
    .digest("hex");

    this.salt = salt;
    this.password = hashPassword;

    next();
});


userSchema.static('matchPasswordAndGenerateToken', async function(email, password){
 
    const user = await this.findOne({email});

    if(!user) throw new Error('User not found!');
    const salt = user.salt;
    const hashPassword = user.password;
    const userHashPassword = createHmac('sha256', salt)
    .update(password)
    .digest("hex");

    if(hashPassword !== userHashPassword) throw new Error("Incorrect Password");
    
    const token = createTokenForUser(user);

    return token;

})

export const UserModel = model('users', userSchema);