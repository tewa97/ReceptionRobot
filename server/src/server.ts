import express from "express"

const app = express()

app.get("/", (res, resp)=>{
    return resp.json([
        {id: 1, title1: "yep"},
        {id: 2, title2: "yeppy"},
        {id: 3, title3: "oooh oohh"}
    ])
})

app.listen(3000, ()=>{
    console.log("servidor ativo :)")
})