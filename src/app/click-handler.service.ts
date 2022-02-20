import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClickHandlerService {
  constructor(private http: HttpClient) {}

  searchHandler() {
    return this.http.get('http://localhost:3000/home', {
      observe: 'body',
      responseType: 'json',
    });
  }

  query = 'music';
  maxResults = '40';
  apikey = '[Your API KEY]';
  url =
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' +
    this.maxResults +
    '&q=' +
    this.query +
    '&type=video&key=' +
    this.apikey;

  dbPopulate() {
    return this.http.get(this.url);
  }

  paginateButton(token: string) {
    return this.http.get(this.url + '&pageToken=' + token);
  }

  postData(obj: any, count: number) {
    return this.http.post('http://localhost:3000/postData/' + count, obj);
  }

  getData(count: number) {
    return this.http.get('http://localhost:3000/getData/' + count);
  }
}
