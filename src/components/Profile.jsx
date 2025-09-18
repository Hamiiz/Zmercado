// import { toast } from "react-toastify";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
export default function Profile({ user }) {
  return (
  <Avatar className="w-[4rem]">
    <AvatarImage className="p-3 rounded-full" src={user?.image?new URL(user?.image):null}/>
    <AvatarFallback className="bg-blue-600 p-3 rounded-full text-foreground hover:bg-blue-700 transition-all ease-in"  > { user?.name!=null?  getInitials(user?.name) : getRandomName() }  </AvatarFallback>
  </Avatar>
  );
}


 



  const getInitials = (name) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };



 function getRandomName(){
  
return 'John Doe'
}