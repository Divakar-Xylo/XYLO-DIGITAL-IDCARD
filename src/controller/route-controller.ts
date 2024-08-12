import prisma from "@/lib/prisma";

export async function getExternalById(userId: string) {
    try {
        const externalLink = await prisma.externalLinks.findMany({
            where: { userId },
        });
        return externalLink;
    } catch (error) {
        console.error("Error fetching externalLink by name:", error);
        throw new Error("Could not fetch externalLink");
    }
}
