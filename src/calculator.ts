import express, { Request, Response } from 'express'; 
import morgan from 'morgan'; 

const app = express(); 

// settings 
app.set('port', process.env.PORT || 3000); 

// import routes
import indexRoutes from '../src/routes/index.routes'; 

// middleares
app.use(morgan('dev')); 
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 

// controllers

// routes 
app.use(indexRoutes);

export default app; 