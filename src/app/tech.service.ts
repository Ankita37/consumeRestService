import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Item } from "./item.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TechService{
    url="https://www.techiediaries.com/api/data.json"

    constructor(private httpService: HttpClient){

    }

    fetchData():Observable<Item[]>{
        return <Observable<Item[]>>this.httpService.get(this.url)
    }
}