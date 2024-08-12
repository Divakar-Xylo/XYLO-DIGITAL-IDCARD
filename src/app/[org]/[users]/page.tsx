"use client";

import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const OrganizationalRoute = () => {
  const pathname = usePathname();

  useEffect(() => {
    const requestBody: any = { name: pathname };
    const user = axios.get("/api/user", requestBody);
  }, [pathname]);
  return <h1>{pathname}</h1>;
};

export default OrganizationalRoute;
