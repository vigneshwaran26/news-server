import { getRepository } from "typeorm";
import { User } from "./entity/User";

export const findArticle = async () => {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne({
        where:{
            ArticleName: "vinana show"
        }
    }).catch((err)=>{
        console.log(err);
        })
        if(user)
          console.log("user :", user ,await user.tweets);
    
}
