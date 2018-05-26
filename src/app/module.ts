import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './components/app/app';
import { HeaderComponent } from './components/header/header';
import { HomeComponent } from './components/home/home';
import { MenuComponent } from './components/menu/menu';
import { PeopleDetailComponent } from './components/people/detail/detail';
import { PeopleListComponent } from './components/people/list/list';
import { ROUTES } from './routes';
import { NotificationService } from './services/notification';
import { StarwarsService } from './services/starwars';
import { WindowRef } from './services/windowRef';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HeaderComponent,
        HomeComponent,
        PeopleListComponent,
        PeopleDetailComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    ],
    providers: [
        StarwarsService,
        WindowRef,
        NotificationService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
