"use client";

import React, { useEffect } from "react";
import useScreenType from "@/hooks/useScreenType";
import Lgcard from "./lg-card";
import Smcard from "./sm-card";
import { ExternalLinks, User } from "@/types/userTypes";
import { CardProps } from "@/types/cardProps";
import { usePathname } from "next/navigation";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";


const Card = ({ user, externalLinks }: CardProps) => {
  const screenType = useScreenType();
  useEffect(()=>{
    console.log("8y7tfgvytfcv",externalLinks)
    },
    [externalLinks])
  return (
    <div>
      {screenType === "lg" ? (
        <Lgcard user={user} externalLinks={externalLinks} />
      ) : (
        
         <Smcard user={user} externalLinks={externalLinks} />
      )}
    </div>
  );
};

export default Card;
