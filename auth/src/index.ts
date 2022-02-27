import express from 'express';
import {json} from 'body-parser';

const index = express();
index.use(json())

index.listen(3000, () =>{
    console.log('Listening on port 3000');
})