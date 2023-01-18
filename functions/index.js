const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const express = require("express");
const app = express();


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

exports.helloWorld = functions.region("asia-northeast3").https.onRequest((request, response) => {
  //functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.getUsers = functions.region("asia-northeast3").https.onRequest((request, response)=>{
    //app.get("/user", (request, response)=>{    
    admin.firestore()
    .collection("userdata")
    .get()
    .then(data => {
        let userdatas = [];
        data.forEach(doc=>{
            userdatas.push(doc.data());
        });
        return response.json(userdatas);
    }).catch(err => console.error(err));
});

exports.createUsers = functions.region("asia-northeast3").https.onRequest((request, response)=>{
    if(request.method !== "POST"){
        return request.statusCode()
    }
    const newUser = { 
        email : request.body.email,
        name : request.body.name,
        nickname : request.body.nickname,
        password : request.body.password,
        phone : request.body.phone,
        createdate : admin.firestore.Timestamp.fromDate(new Date())
    };

    admin.firestore().collection("userdata").add(newUser).then(doc =>{
        response.json({message : `${doc.id}가 생성되었습니다.`})
        .catch(err => {
            response.sendStatus(403).json({error : "Forbidden"});
            response.sendStatus(404).json({error : "Not Found"});
            response.sendStatus(500).json({error : "Internal Server Error"});
            console.error(err);
        })
    });
});

exports.updateUsers = functions.region("asia-northeast3").https.onRequest((request, response)=>{
    if(request.method !== "POST"){
        return request.statusCode()
    }
    const newUser = { 
        email : req.body.email,
        name : req.body.name,
        nickname : req.body.nickname,
        password : req.body.password,
        phone : req.body.phone,
        createdate : admin.firestore.Timestamp.fromDate(new Date())
    };
    
    admin.firestore().collection("userdata").add(newUser).then(doc =>{
        response.json({message : `${doc.id}가 생성되었습니다.`})
        .catch(err => {
            response.sendStatus(403).json({error : "Forbidden"});
            response.sendStatus(404).json({error : "Not Found"});
            response.sendStatus(500).json({error : "Internal Server Error"});
            console.error(err);
        })
    });
});

