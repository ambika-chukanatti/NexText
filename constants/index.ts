import { Types } from "mongoose"; 

type ObjectId = Types.ObjectId;

export type User = {
  _id: ObjectId; 
  username: string;
  email: string;
  profile_name: string;
  pfp: string;
  bio: string;
  friends: ObjectId[]; 
  last_seen: string; 
  settings: {
    privacy: {
      last_seen: string; 
      account: string;   
    };
    color_mode: string;
  };
  __v: number;
};
