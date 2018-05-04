import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MocksService {

	rapidPage: string;
	
	constructor(private http: HttpClient) { 

		let opt = { responseType: 'text' as 'text' };
		
		this.http.get('/index.html', opt).subscribe( data => {
			this.rapidPage = JSON.stringify(data);
		});

	}

	getMocks() { return this.rapidPage; }

}
