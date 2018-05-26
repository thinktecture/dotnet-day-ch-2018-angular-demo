import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { fromPromise } from 'rxjs/internal-compatibility';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class NotificationService {
    constructor(@Optional() private _swPush: SwPush, private _http: HttpClient) {
    }

    public register(): void {
        if (!this._swPush) {
            return;
        }

        // Key generation: https://web-push-codelab.glitch.me/
        fromPromise(this._swPush.requestSubscription({
            serverPublicKey: 'BPBc2Ei5rc3cDBa6899wa_Oem87Vm0pB2N9Al2j8dqioxpoLKwMnb3Rk7F6u9A8WnchLcnqNFgzkIjXpN1ylrJg',
        }))
            .pipe(
                switchMap(
                    subscription => console.log(subscription) || this._http.post('http://localhost:9090/push/register', subscription)),
            )
            .subscribe();
    }
}
