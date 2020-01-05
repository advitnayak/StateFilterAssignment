var express = require("express")
var app=express()
var port=3000

app.get("/state",(req,res)=>{
    if (!req.query.q){
        res.send([{
                "error":"Please provide valid Search"
            }
        ])
    }
    var state = "Database"
    state=state.toLowerCase()
    inp=(req.query.q).toLowerCase()
    if(state.match([inp])!=null){
        
    }
    
    res.send([
        {
            "State":"kar",
            "district_code":14,
            "district":"Karnataka"
        }
    ])
})

app.listen(port,()=>{
    console.log("Running on port 3000")
})