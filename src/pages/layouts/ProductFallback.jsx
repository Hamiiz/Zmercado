import Navbar from "@/components/Navbar";
import CardSkeleton from "@/components/SkeletonUI";
export default function ProductFallBack(){
    return(
        <ul className="w-full grid list-none grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
           { [...Array(10)].map((_, i)=>
            (
              <li className="m-2" key={i}>
                <CardSkeleton />
              </li>
            )
            )}
        </ul>
    )
}