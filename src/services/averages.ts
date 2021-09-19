import axios from '../axios-emissions'
import { Average, RequestParams, Response } from '../common/types'


export const getAverages = (data:RequestParams): Promise<Average[]> =>{
        /* TODO:map result to Average */
    return fetchAverages(data).then((response:Response[]) => {
        let results = response.map(item => new Average(item,data.product,data.country));
        return results;
    })
}

const fetchAverages = (data:RequestParams): Promise<Response[]> => {
    return axios.get(data.product+'/average.json', { params: { country: data.country, begin: data.begin, end: data.end, limit: data.limit, offset: data.limit } }).then((response) => (response.data as Response[]));
};