const {body,param,query,validationResult} = require("express-validator");
const statusCodes = require("../util/status-codes");
const response = require("../models/api/response.model");

const loginCheck = ()=>{
    return [
        body("email", "not a valid email id").trim().isEmail()]
}

const validationStatus = (req,res,next)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
   
  
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(statusCodes.UNPROCESSABLE_ENTITY)
              .json(response("failed","validation errors",{ errors: extractedErrors}));
  }


  module.exports = {
    validationStatus,
    loginCheck}