// import express from 'express';
// import logger from 'morgan';
import mongoose from 'mongoose';
import { ApolloServer} from 'apollo-server';
import typeDefs from './Graphql/type_def';
import resolvers from './Graphql';


import dotenv from "dotenv";
dotenv.config();

const server = new ApolloServer({typeDefs, resolvers});
// const app = express()




mongoose.connect(process.env.dBaseUrl!, () =>
{
    console.log('connected to db')
})
// app.use(logger('dev'));
// app.use(express.json());
const port = process.env.PORT 
server.listen(port, () =>
{
    console.log(`server started at http://localhost:${port}`)
    
})