const express = require('express');
const app = express();
const blogRouter = require('./routes/blogRoutes');
const globalErrorHandler = require('./controllers/errorController');
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize') 
const xss = require('xss-clean');
const hpp = require('hpp'); 



//Set security HTTP headers .
app.use(helmet());


// Implementing Rate Limiting
const limiter =  rateLimit({ //pass to rateLimit fxn
 max:100,
 windowMs:60 * 60 * 1000,
 message:'To many request from this IP , please try again in hour'   
})
app.use( '/api',limiter);

app.use(express.json({limit:'10kb'}));

//Data sanitization against NoSQL query injection
app.use(mongoSanitize());


//Data sanitization against XSS
app.use(xss());
 

//Prevent parameter pollution
app.use(
    hpp({
      whitelist:[
       'title',
       'author',
       'description',
       'category' 
    ]
}))


//Routes
app.use('/api/v1/blog' ,blogRouter)




// Error Handeling
app.all( ' * ' , (req,res,next)=>{
    next( new AppError(`Can't find ${req.originalUrl} on this server!`,404));
   });

 //Global Erro Handeling
 app.use(globalErrorHandler)


module.exports = app;