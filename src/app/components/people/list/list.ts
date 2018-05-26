import { Component, OnInit } from '@angular/core';
import { StarwarsPeople } from '../../../models/starwarsPeople';
import { StarwarsService } from '../../../services/starwars';

@Component({
    selector: 'app-people-list',
    templateUrl: 'list.html',
})
export class PeopleListComponent implements OnInit {
    public list: Array<StarwarsPeople>;

    constructor(private _starwarsService: StarwarsService) {
    }

    public ngOnInit(): void {
        this._starwarsService.list()
            .subscribe(list => this.list = list);
    }
}
