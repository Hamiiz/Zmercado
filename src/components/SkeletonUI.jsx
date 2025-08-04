function CardSkeleton() {
    return (
      <div className="border-gray-100 p-4 rounded-lg w-64">
        <Skeleton className="h-40 w-full rounded-lg mb-4" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-6 w-1/2" />
      </div>
    );
  }
  
export default CardSkeleton

function Skeleton({ className = "" }) {
    return (
      <div
        className={
          "bg-gray-300  animate-pulse rounded-md " + className
        }
        aria-busy="true"
        aria-label="Loading..."
      />
    );
  }
  