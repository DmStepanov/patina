import { Component, OnInit } from '@angular/core';

import { MocksService } from '../mocks.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
	rapidPage : string;

	constructor(private mocks: MocksService) {
		this.rapidPage = this.mocks.getMocks();
	}

	ngOnInit() {
		
	}

	saveDev() {
		this.rapidPage = this.mocks.getMocks();
		/*
		let body = new HttpParams();
		body = body.set('val', this.rapidPage);

		this.http.post('/setRapidPage.php', body).subscribe( data => { } );
		*/
	}
}
