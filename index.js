let express=require('express');

let mongoose=require('mongoose')
let hrrouters
=require('./routers/hr_routers');
let emprouters=require('./routers/emp_routers');
let app=express();
mongoose.connect("mongodb://localhost:27017/hrmanagement").then(
    ()=>console.log("Database connected successfuly")
).catch((err)=>console.log(err));

app.use(express.json());

app.use("/api/hr",hrrouters);
app.use("/api/emp",emprouters);


app.listen(3000,()=>{
    console.log("server running on port 3000")

})