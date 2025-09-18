
import api from "@/api/axiosInstance";
import { redirect } from "react-router-dom";
export default async function productAction({ request }) {
    const formData = await request.formData();
    let token = formData.get('token')
    const name = formData.get('prodName');
    const desc = formData.get('prodDesc');
    const price = formData.get('prodPrice');
    const model = formData.get('prodBrand');
    const stock = formData.get('prodStock');
    const condition = formData.get('select');
    const imageFile = formData.get("prodImg");

    const data = new FormData();
    data.append("name", name);
    data.append("desc", desc);
    data.append("price", price);
    data.append("model", model);
    data.append("stock", stock);
    data.append("condition", condition);
    data.append("image", imageFile); // 👈 must match backend field name

    try {
        const response = await api.post('/products', data, {
          
            
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${token}`,

                withCredentials: true,


            },
        });

        return redirect('/products')
    } catch (error) {
        console.log("Upload error:", error.message);

    }

    return 200;
}
