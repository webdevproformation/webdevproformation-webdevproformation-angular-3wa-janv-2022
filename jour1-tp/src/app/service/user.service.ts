import { Injectable } from '@angular/core';
import { DataService } from "./data.service";
import { User } from "./user";
import { HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService<User> {
    public constructor( http : HttpClient){
      super(http);
      this.urlService = "https://jsonplaceholder.typicode.com/users";
    }
}
