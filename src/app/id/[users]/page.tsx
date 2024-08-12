"use client";

import Card from "@/components/cards";
import AdminLoading from "@/components/loading";
import { ExternalLinks, User } from "@/types/userTypes";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserRoute = () => {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [externalLinks, setExternalLinks] = useState<ExternalLinks[] | null>([]);

  function extractNameFromPath(path: string): string {
    const parts = path.split("/");
    return parts[parts.length - 1];
  }

  const fetchUserData = async (cardId: string) => {
    try {
      const response = await axios.get(`/api/user`, { params: { cardId } });
      console.log(response.data);
  
      const user = response.data.user;
      setUser(user);
  
      if (user?.id) {
        const externalLinksResponse = await axios.get(`/api/externalLinks`, {
          params: { userId: user.id },
        });
        console.log(externalLinksResponse.data.externalLink);
  
        setExternalLinks(externalLinksResponse.data.externalLink);
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      window.location.href = "/";
    }
  };
  

  useEffect(() => {
    const cardId = extractNameFromPath(pathname);
    if (cardId) {
      fetchUserData(cardId);
    }
  }, [pathname]);

  return (
    <div>
      {user ? (
        <Card user={user} externalLinks={externalLinks} />

      ) : (
        //page loader animation
        <AdminLoading />
      )}
    </div>
  );
};

export default UserRoute;
