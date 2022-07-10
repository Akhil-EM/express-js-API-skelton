//controller file

const statusCodes = require("../util/status-codes");
const response = require("../models/api/response.model");
const writeLog = require("../util/functions/write-log");
const getErrorLine = require("../util/functions/get-error-line");

exports.getUsers = (req,res)=>{


    try{
       //the actual controller code goes here

       res.status(statusCodes.OK)
          .json(response("success","users list",{users:[]}))
    }catch(error){

        writeLog(__filename,getErrorLine(),error.message);
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
           .json(response("error",error.message));
    }
}