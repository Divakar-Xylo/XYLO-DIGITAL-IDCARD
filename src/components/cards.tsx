"use client";

import React from "react";
import useScreenType from "@/hooks/useScreenType";
import Lgcard from "./lg-card";
import Smcard from "./sm-card";
import { UserProps } from "@/user";

const Card = ({ user }: { user: UserProps }) => {
  const screenType = useScreenType();

  return <div>{screenType === "lg" ? <Lgcard user={user} /> : <Smcard user={user} />}</div>;
};

export default Card;
