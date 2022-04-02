const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const app=express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cors());
const database={ 
    users:[ 
    {
   id:'123',
   name:'john',
   email:'john@gmail.com',
   password:'cookies',
   entries:0,
   joined:new Date()
    },
    {
        id:'124',
        name:'Sally',
        email:'sally@gmail.com',
        password:'cookies',
        entries:0,
        joined:new Date()  

    }
]
  }


app.get('/',(req,res)=>{
    res.send("hello");
    
})

app.post('/login',(req,res) =>{
    const username=req.body.username;
    const password =req.body.password;

    console.log(username,password);
    if(req.body.username=== "imen" &&
        req.body.password === "123"){
            res.send('success');
        }else{
res.send('error')
        }
})

app.listen(3001,()=>{
    console.log('app is running ')
})