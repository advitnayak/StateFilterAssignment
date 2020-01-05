const express = require("express")
const dbData = require("./mongodb")
const app=express()
const port=process.env.PORT||3000

app.get("/state",(req,res)=>{
    if (!req.query.q){
        res.send([{
                "error":"Please provide valid Search"
            }
        ])
    }
    var inp=(req.query.q).toLowerCase()
    data = dbData.filter((error,data)=>{
        var state = data["State/Union territory*"].toLowerCase()
        if (state.match([inp])){
            return data
        }
    })
    var states=[]
    data.forEach((state) => {
        states.push({
            "State":state["State/Union territory*"],
            "district_code":state["District Code"],
            "district":state["District"]
        })
    });
    res.send(states)
})

app.listen(port,()=>{
    console.log("Running on port "+port)
})