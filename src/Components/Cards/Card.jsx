
import { FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";


export default  function Card(x){

    // console.log(x.props)

    const { image, name , rating , premiered   } = x.props

    console.log(premiered)

    return <>
    
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image.medium}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="flex justify-between gap-[11vw] ">
        <div className=""><span className="flex"> <FaStar className="text-pink-500  text-xl"/> <p className=" ml-1 text-lg">  {rating.average}</p></span></div>
        <div className="flex justify-between gap-2"><SlCalender/><p>{ premiered.split('-')[0]}</p></div>


    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See Details</button>
    </div>
  </div>
</div>
    
    
    
    </>
}