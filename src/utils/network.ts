import Axios, { 
    AxiosRequestConfig 
} from "axios";

/**
 * http caller
 * @param configs AxiosRequestConfig to call http
 * @returns response from http
 */
export const call_http = async (configs: AxiosRequestConfig) => {
    console.log('HTTP calling: ', configs.method, configs.url);
    return (await Axios.request(configs));
}


// export const call_supercell = async (configs: AxiosRequestConfig) => {
//     const baseURL = 'https://api.clashofclans.com/v1';
// }