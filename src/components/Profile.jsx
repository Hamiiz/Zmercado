// import { toast } from "react-toastify";

export default function Profile({ user }) {
  return (
    <>
      <div className="profile">
        <Avatar user={user} />
      </div>
    </>
  );
}

export function Avatar({ user }) {
  return(
    <>
   { user?.image&& <div className=" z-5  w-12 h-12 rounded-full  flex items-center justify-center relative" style={{backgroundImage:new URL(user.image)}} ></div>}
   {!user?.image&& user.name!=null? < InitialsAvatar name={user.name} />: <InitialsAvatar name={getRandomName()} />  } 
    </>
  )
}

function InitialsAvatar({ name }) {
  const getInitials = (name) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div className="relative z-5 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
      {initials}
    </div>
  );
}
 function getRandomName(){
  
return 'John Doe'
}