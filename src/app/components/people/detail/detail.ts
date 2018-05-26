import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StarwarsPeople } from '../../../models/starwarsPeople';
import { StarwarsService } from '../../../services/starwars';

@Component({
    selector: 'app-people-detail',
    templateUrl: 'detail.html',
    styleUrls: ['detail.scss'],
})
export class PeopleDetailComponent implements OnInit {
    public people: StarwarsPeople;
    private _id: number;

    constructor(private _starwarsService: StarwarsService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    }

    public ngOnInit(): void {
        this._activatedRoute.params
            .pipe(
                switchMap(params => {
                    this._id = +params['id'];
                    return this._starwarsService.people(this._id);
                }),
            ).subscribe(people => this.people = people);
    }

    public next(): void {
        const nextId = this._id % 10 + 1;
        this._router.navigate(['../', nextId], { relativeTo: this._activatedRoute });
    }

    public previous(): void {
        const previousId = (this._id - 1) % 10;
        this._router.navigate(['../', previousId <= 0 ? 10 : previousId], { relativeTo: this._activatedRoute });
    }
}
