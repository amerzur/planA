export type Product={
    name:string;
    productVariable:string;
}


  function formatDate(date:string) {
    if (date) return new Date(date).toLocaleString().split(",")[0];
  }
export type Response={
    average:number;
    start:Date;
    end:Date ; 
}
export class Average {
    average:number;
    start:Date;
    end:Date ;  
    country:string;
    product:string; 

    constructor(response: Response,product:string,country:string) {
        this.average = response.average;
        this.start = formatDate( response.start);
        this.end = formatDate(response.end);
        this.product=product;
        this.country=country
    }
}

export type RequestParams={
    country:string;
    begin:string;
    end:string;
    product:string;
    offset?:number;
    limit?:number;
}