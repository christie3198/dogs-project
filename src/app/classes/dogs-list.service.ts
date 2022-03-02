import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DogsListService {

    constructor(
        private httpClient: HttpClient,

    ){

    }

    getDogsList(){
        const httpHeaders = new HttpHeaders();
        httpHeaders.append('content-type', 'application/json');
        return this.httpClient.get("http://localhost:3000/dogs");
    }
    createDogDetails(createBody: any){
        const httpHeaders = new HttpHeaders();
        httpHeaders.append('content-type', 'application/json');
        return this.httpClient.post("http://localhost:3000/dogs", createBody, {headers: httpHeaders});
    }

    updateDogDetail(dogDetailId: number, updatedBody: any){
        const endpointURL = 'http://localhost:3000/dogs/'+dogDetailId;
        return this.httpClient.put(endpointURL, updatedBody)
    }

}