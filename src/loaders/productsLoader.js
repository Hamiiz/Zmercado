import api from "@/api/axiosInstance"
export default async function ProductLoader(){
    //imitate server delays
    

    try{
        const {data}  =await api.get('/getProducts?')
        return data
        
    }catch(err){
        throw new Response("Failed to load products", { status: err?.status });
    }

}

  