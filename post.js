var a=require("http")
var b=a.createServer(async(req,res)=>{
    if(req.url=="/carts" ){
        var a=await fetch("https://fakestoreapi.com/carts")
        var b=await a.json()
        res.write(JSON.stringify(b))
        res.end()
    }else if(req.url=="/products"){
        var a=await fetch("https://fakestoreapi.com/products")
        var b=await a.json()
        res.write(JSON.stringify(b))
        res.end()
    }else{
        res.write("try another one")
        res.end()
    }
})
b.listen(3000,()=>{
    console.log("okay bro")
})