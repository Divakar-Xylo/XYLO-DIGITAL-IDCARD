import { ExternalLinks, User } from "@prisma/client";

export interface CardProps {
    user: User;
    externalLinks: ExternalLinks[] | null;
  }