import axios from '../axios-emissions'
import { Average, RequestParams, Response } from '../common/types'


export const getAverages = (data:RequestParams): Promise<Average[]> =>{
    /* map Response to Average */
    return fetchAverages(data).then((response:Response[]) => {
        let results = response.map(item => new Average(item,data.product,data.country));
        return results;
    })
}

const fetchAverages = (params:RequestParams): Promise<Response[]> => {
    return axios.get(params.product+'/average.json', { params }).then((response) => (response.data as Response[]));
};