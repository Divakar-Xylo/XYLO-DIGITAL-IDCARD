import React from 'react';
import Card from '@/components/cards';
import users, { UserProps } from '@/user';
import { Metadata } from 'next';

const user: UserProps | undefined = users.find(user => user.name === "Divakar C T");

export   const metadata: Metadata = {
  title: user?.name || "XYLOINC",
};

const Index = () => {
  const user: UserProps | undefined = users.find(user => user.name === "Divakar C T");



  return (
    user ? <Card user={user} /> : <div>User "Divakar C T" not found</div>
  );
}

export default Index;
