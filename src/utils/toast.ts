
import toast, { Toaster } from 'react-hot-toast'

export const toastError = (error: any) => {
    console.log(error , "asdfa")
    if (typeof error?.response?.data?.message == 'string') toast.error(error?.response?.data?.message)
    else if (typeof error?.message == 'string') toast.error(error.message)
    else if (typeof error?.error == 'string') toast.error(error.error)
    else if (typeof error == 'string') toast.error(error)
    else toast.error('ERROR')
}
export const toastSuccess = (message: any) => {
    toast.success(message)
}
