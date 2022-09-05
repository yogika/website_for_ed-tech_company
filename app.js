const express = require("express");
const morgon = require("morgan");
const cors = require("cors");
const userModel = require("./models/userDetails");
const signUpModel=require("./models/signUpModel");
const classDetailsModel=require("./models/classDetailsModel")
const counsellingModel=require("./models/counsellingModel")

const app = express();

app.use(express.json());
app.use(morgon("dev"));
app.use(cors());

app.get("/", (request, response) => {
  response.status(200).json({
    status: "success",
    message: "Request Received",
  });
});

app
  .route("/api/v1/user")
  .get((request, response) => {
    console.log("Request Received");

    response.status(200).json({
      status: "success",
      message: "Request Received",
    });
  })
  .post(async (request, response) => {
    try {
      let userDetails = await userModel.create(request.body);

      response.status(200).json({
        status: "success",
        data: userDetails,
      });
    } catch (err) {
      response.status(400).json({
        status: "fail",
        message: err,
      });
    }
  });

app.route('/api/v1/user/logIn').post(async (request,response)=>{


  try{

    let user=await signUpModel.findOne(request.body)


    if(user) response.status(200).json({
      status:"success"
    })
    else response.status(404).json({
      status:"fail"
    })

  }
  catch(err){
    response.status(400).json({
      status:"fail"
    })
  }

})


app.route('/api/v1/user/class').post(async (request,response)=>{
  try{

    console.log(request.body);

    let classDoc=await classDetailsModel.create(request.body)

  response.status(200).json({
    status:"success",
    data:classDoc
  })


  } catch(err){

    response.status(400).json({
      status:"fail",
      message:err
    })
  }

})


app.route('/api/v1/user/counselling').post(async (request,response)=>{
  try{

    console.log(request.body);

    let consDoc=await counsellingModel.create(request.body)

  response.status(200).json({
    status:"success",
    data:consDoc
  })


  } catch(err){

    response.status(400).json({
      status:"fail",
      message:err
    })
  }

})


app.route('/api/v1/user/signUp').post(async (request,response)=>{
  try{
    

    console.log(request.body);
  let userDoc=await signUpModel.create(request.body)
  console.log(userDoc);

  response.status(200).json({
    status:"success",
    data:userDoc
  })
  }
  catch(err){

    console.log(err);
    response.status(400).json({
      status:"fail",
      message:err
    })
  }




})

module.exports = app;
