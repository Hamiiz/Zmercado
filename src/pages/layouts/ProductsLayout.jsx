import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import CardSkeleton from "@/components/SkeletonUI";
import { useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ProductsLayout() {
let navigation = useNavigation()
  const isNavigating = Boolean(navigation.location)

  return (
    <>
      <Navbar className={`sticky z-20 top-0`} />
        {isNavigating&&<Button variant={'default'}>BUTTOOOON</Button>}
        <Outlet />

    </>
  );
}
