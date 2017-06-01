import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyDataService {

  constructor(private http : Http) { }
  
  fetchData(){
	return this.http.get('https://myproject-1abb2.firebaseio.com/.json').map(
		(res) => res.json()
	);
  }

}
