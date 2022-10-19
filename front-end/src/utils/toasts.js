import { toast } from "react-toastify"

export const toastSuccess=(msg)=>{
    if(msg){
        toast.success(msg);
    }
}
export const toastError=(msg)=>{
    if(msg){
        toast.error(msg);
    }
}