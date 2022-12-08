import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { map, catchError } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpService){}
  getHello(): string {
    return 'Hello World!';
  }

  //hitting to 2nd server 
  async transferData(body){
    return await this.http.post("http://localhost:3002",body,{
      headers:{
        "Content-Type":"application/json"
      }
    }).pipe(
      map((res) => {
     return res.data
      }),
    )
  }

}
