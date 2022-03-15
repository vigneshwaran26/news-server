import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Tweet } from "./tweets";

@Entity({ 
          name:'Articles'
        })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()   // can also mention length: , type: , nullable: inside the column annotations 
    ArticleName: string;

    @Column()
    ArticleContent: string;

    @Column()
    AuthorUrl: string;

    @OneToMany((type) => Tweet, (tweet) => tweet.user)
    tweets:Promise<Tweet[]>;

}
