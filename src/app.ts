import "reflect-metadata";
import {createConnection} from "typeorm";
import { CreateArticle } from "./create_article";
import {findArticle } from "./find_article";

(async ()=>{
    const app = await createConnection();
    console.log('connection started');
    
    await CreateArticle().catch((err)=>{console.log(err);})
    await findArticle().catch((err)=>{console.log(err);})

    app.close();
    console.log('connection closed');
    
})();




