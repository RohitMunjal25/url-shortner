const express=require("express");
const router=express.Router();
const {nanoid}=require("nanoid");
const URL=require("./urlModel");
router.post("/shorten",async(req,res)=>{
    try{
        const {originalUrl}=req.body;
        if(!originalUrl){
            return res.status(400).json({error:"url required"});
        }
        const shortId=nanoid(6);
        const newUrl=await URL.create({
            originalUrl,
            shortId
        });
        res.json({
            shortUrl:`http://localhost:5000/${shortId}`
        });
    }
    catch(err){
        res.status(500).json({error:"server error"});
    }

});
router.get("/:shortId",async(req,res)=>{
    try{
        const url=await URL.findOne({shortId:req.params.shortId});
        if(!url){
            return res.status(404).send("URL not found");
        }
        url.clicks++;
        await url.save();
        res.redirect(url.originalUrl);
    }
    catch(err){
        res.status(500).send("server error");
    }
});
router.get("/stats/:id",async(req,res)=>{
    try{
        const url=await URL.findOne({shortId:req.params.id});
        if(!url){
            return res.status(404).json({error:"Not found"});
        }
        res.json(url);
    }
    catch(err){
        res.status(500).send("server error");
    }
});
module.exports=router;