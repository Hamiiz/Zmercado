export default function ProductBox({product}){
    
    return (
        <>
        <div className="card rounded-2xl p-5 bg-gray-100" >
            <div className=" h-2  "   ></div>
            <div>
                <h3> {product.title} </h3>
                <p>{product.desc}</p>

            </div>

        </div>
        </>
    )

}