import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
export default function CardSkeleton(props) {
    
    let arr = Array(props.cards).fill(0)

    return(
        arr.map((item, index) => (
            <div key={index} className='w-2/3 px-4 pt-4 pb-8 my-8 bg-white rounded-md md:w-1/3'>
            <span className="inline"><Skeleton circle width={40} height={40} className=''></Skeleton></span>
            <Skeleton className='mt-2' count={2}></Skeleton>
            <Skeleton className='w-3/4 mt-2'></Skeleton>
        </div>
        ))
        
    )
}