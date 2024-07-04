import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

export const checkUser = async () =>{
    const user = await currentUser();

    //Check for current loged in Clerk user
    if (!user) {
        return null
    } 

    //check if the user is already in the database
    const loggedInUser = await db.user.findUnique({
        where: {
            ClerkUserId: user.id
        }
    })

    //If user is in the database. return user
    if (loggedInUser) {
        return loggedInUser
    }

    //if user is not in the database, create a new user
    const newUser = await db.user.create({
        data: {
            ClerkUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    });

    return newUser;
}