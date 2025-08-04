import api from "@/api/axiosInstance"
export default async function ProductLoader(){
    //imitate server delays
    
    await sleep(1000);
    try{
        const {data}  =await api.get('/getProducts')
        console.log(data)
        return data
        
    }catch(err){
        throw new Response("Failed to load products", { status: err?.status });
    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  