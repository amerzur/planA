export type Product = {
    name: string;
    productVariable: string;
}


function formatDate(date: string): string {
    return new Date(date).toLocaleString().split(",")[0];
}
export type Response = {
    average: number;
    start: string;
    end: string;
}
export class Average {
    average: number;
    start: string;
    end: string;
    country: string;
    product: string;

    constructor(response: Response, product: string, country: string) {
        this.average = response.average;
        this.start = formatDate(response.start);
        this.end = formatDate(response.end);
        this.product = product;
        this.country = country
    }
}

export type RequestParams = {
    country: string;
    begin: string;
    end: string;
    product: string;
    offset?: number;
    limit?: number;
}