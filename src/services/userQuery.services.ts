
import axios from "axios"


export const addDataByUser = async (obj: any) => {
    return axios.post("https://admin.hisathi.com/api/hisathi-user", obj)
}