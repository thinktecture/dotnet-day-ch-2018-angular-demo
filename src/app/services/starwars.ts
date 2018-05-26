import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StarwarsPeople } from '../models/starwarsPeople';

@Injectable()
export class StarwarsService {
    private readonly _baseUrl = 'https://swapi.co/api';

    constructor(private _http: HttpClient) {
    }

    public list(): Observable<StarwarsPeople[]> {
        return this._http.get<{ results: StarwarsPeople[] }>(`${this._baseUrl}/people`)
            .pipe(map(json => json.results));
    }

    public people(id: number): Observable<StarwarsPeople> {
        return this._http.get<StarwarsPeople>(`${this._baseUrl}/people/${id}`);
    }
}
