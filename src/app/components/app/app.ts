import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    styleUrls: ['app.scss'],
})
export class AppComponent implements OnInit {
    constructor(private readonly notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.notificationService.register();
    }
}
