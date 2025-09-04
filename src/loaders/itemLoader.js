import api from "@/api/axiosInstance"
export default async function itemLoader({request}){
    let url = new URL(request.url)
    let id = url.searchParams.get('id')
    console.log(id)
    try{
       const response = await api.get(`/getProduct/${id}`)
        return response.data
    }catch(e){

        return e

    }
}