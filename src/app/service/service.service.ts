import { Injectable } from '@angular/core';
import { ends } from './end_point';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data:string;
  listUser:string[] = ['Jerry', 'Marcela', 'Lucas'];
  constructor(private http:HttpClient) { 
  }

getProduct() {
  var myData = JSON.stringify({"id":"10213891993762092","name":"Lagos Sebas","lname":"Sebas","correo":"je_seman@hotmail.com","domain":"2"});
  var url = ends.endPoint+'/getInfoPrueba';
  return this.http.post(url, myData);
}

getEnds(){
  return ends.endPoint;
}

getUser(position) {
  return this.listUser[position];
}

endReal() {
  return ends.endReal;
}
}
