export interface User {
    id: string;
    name: string;
    cardId: string;
    designation: string;
    description: string;
    companyName: string;
    photo: string | null;
    phoneNumber: string;
    gender: "male" | "female";
    emailId: string;
    creatorName: string;
    employeeId: string | null;
    employeeDepartment: string | null;
    externalLinksId : string | null;
    organizationId : string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface ExternalLinks {
   id : string
   link : string
   userId : string | null
   name : string
   organizationId: string | null

  }
  