import { axiosInstance } from "../libs";
import { customerInvioce } from "@/types";

export const fetchCustomerInvoice = async (): Promise<
    customerInvioce
> => {
    const { data: invoice } = await axiosInstance.get('/real-estate/customer/property');
    return invoice.data;
};