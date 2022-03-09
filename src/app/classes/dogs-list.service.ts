import { HttpClient } from "@angular/common/http";
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
        return this.httpClient.get("http://localhost:3000/dogs");
    }
    createDogDetails(createBody: any){
        return this.httpClient.post("http://localhost:3000/dogs", createBody);
    }
    
    updateDogDetail(dogDetailId: number, updatedBody: any){
        const endpointURL = 'http://localhost:3000/dogs/'+dogDetailId;
        return this.httpClient.put(endpointURL, updatedBody)
    }
    deleteDogDetail(dogDetailId: any){
        const endpointURL = 'http://localhost:3000/dogs/' + dogDetailId;
        return this.httpClient.delete(endpointURL);
    }

}