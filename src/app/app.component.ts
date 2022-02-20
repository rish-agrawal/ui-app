import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ClickHandlerService } from './click-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ui-app';
  object: any;
  items: any;
  next = '';
  prev = '';
  searchItems: any;
  count = 0;
  searchIndex = 0;
  constructor(private _clickService: ClickHandlerService) {}

  ngOnInit(): void {
    console.log('Hello');
    // this._clickService.getUrl().subscribe((data: any) => console.log(data));

    this._clickService.dbPopulate().subscribe((data) => {
      this.object = data;
      this.items = this.object.items;

      this.items.forEach((item: any) => {
        this.count = this.count + 1;
        this._clickService
          .postData(item, this.count)
          .subscribe((data) => console.log(data));
      });
    });
  }

  prevSearch() {
    this.searchIndex -= 10;
    this._clickService.getData(this.searchIndex).subscribe((data) => {
      this.searchItems = data;
    });
  }

  nextSearch() {
    this.searchIndex += 10;
    this._clickService.getData(this.searchIndex).subscribe((data) => {
      this.searchItems = data;
    });
  }
}

// if (this.object.nextPageToken !== null)
//         this.next = this.object.nextPageToken;

//       if (this.object.prevPageToken !== null)
//         this.prev = this.object.prevPageToken;
//       console.log(this.items);
