//nishanth added

import prisma from "@/lib/prisma";

export async function getUserByName(cardId: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { cardId: cardId },
        });
        return user;
    } catch (error) {
        console.error("Error fetching user by name:", error);
        throw new Error("Could not fetch user");
    }
}
