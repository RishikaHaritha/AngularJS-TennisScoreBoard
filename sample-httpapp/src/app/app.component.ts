import { Component , OnInit } from '@angular/core';
import { CompanyDataService } from './company-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CompanyDataService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  companies = [];
  constructor (private companydata : CompanyDataService){}
  
  ngOnInit() {
	this.companydata.fetchData().subscribe(
		(data) => this.companies = data
	);
  }
  
}
