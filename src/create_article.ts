import { getRepository } from "typeorm";
import { Tweet } from "./entity/tweets";
import { User } from "./entity/User";

export const CreateArticle = async ()=>{

    const userRepo = getRepository(User);
    const user = userRepo.create({
        ArticleName:"vinana show",
        ArticleContent: "There are several annual air shows in the United States that display a variety of modern military aircraft, including the Miramar Air Show every October.",
        AuthorUrl:"https://www.visiteastbourne.com/airshow/"
    });

    await userRepo.save(user).catch((err)=>{ console.log(err);})
    console.log(user);


    const tweetrepo = getRepository(Tweet);
    const tweet = new Tweet();
    tweet.title = "A good day job for mellenial";
    tweet.Content = "India 2022 bugdet has spend over 14billion rupees on IT sector";
    tweet.user = Promise.resolve(user);
   
    await tweetrepo.save(tweet).catch((err)=>{console.log(err);
    })
};





