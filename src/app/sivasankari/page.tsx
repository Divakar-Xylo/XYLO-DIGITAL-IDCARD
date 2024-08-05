import React from 'react';
import Card from '@/components/cards';
import users, { UserProps } from '@/user';
import { Metadata } from 'next';

const user: UserProps | undefined = users.find(user => user.name === "Sivasankari S");

export   const metadata: Metadata = {
  title: user?.name || "XYLOINC",
};

const Index = () => {
  const user: UserProps | undefined = users.find(user => user.name === "Sivasankari S");



  return (
    user ? <Card user={user} /> : <div>User "Nishanth K R" not found</div>
  );
}

export default Index;
