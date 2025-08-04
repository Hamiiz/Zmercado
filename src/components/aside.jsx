import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogOut } from "lucide-react";
import { LockOpen } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient } from "@/utils/authClient";
import Profile from "./Profile";
import { useTokenStore } from "@/stores/userStore";
export default function ProfileAside({ user, children }) {
  const navigate = useNavigate()
  const {clearToken} = useTokenStore()
  async function logout (){
    try{
    
                await authClient.signOut({  });
                clearToken()
                navigate('/')
            }catch(err){
                toast.error(err)
            }
  }

  return (
    <>
      <Sheet >
        <SheetTrigger asChild>
          <Button>{children}</Button>
        </SheetTrigger>
        <SheetContent className="bg-background  text-foreground">
          <SheetHeader>
            <SheetTitle  > Profile</SheetTitle>
            <SheetDescription className="rounded-lg p-5 px-8 shadow-sm shadow-stone-300 w-full   my-2 mx-auto">
              <div className="w-full flex justify-center items-center" >
                <div className=" w-1/3  float-right">
                  <Profile user={user}/>
                </div>
                <div className=" w-1/2  float-right">
                  <p>{user?.name}</p>
                  <p>{user?.username}</p>
                  <p>{user?.roles}</p>

                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
            <div>
                <Button
                onClick={logout}
                 className="w-full my-2 mx-4 shadow-gray-300 dark:shadow-gray-900 shadow-sm dark:hover:bg-gray-700 hover:bg-gray-100  transition-all ease-in-out .5s"> <LogOut/> Logout </Button>
                <Button className="w-full my-2 mx-4 shadow-gray-300 dark:shadow-gray-900 shadow-sm dark:hover:bg-gray-700 hover:bg-gray-100  transition-all ease-in-out .5s"> <LockOpen/> Change Password </Button>
            </div>
          <SheetFooter>
            <p className="text-gray-400 text-sm mx-auto">Zmercado inc.</p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
