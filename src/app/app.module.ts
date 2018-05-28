import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app';
import { HeaderComponent } from './components/header/header';
import { HomeComponent } from './components/home/home';
import { MenuComponent } from './components/menu/menu';
import { ROUTES } from './routes';
import { WindowRef } from './services/windowRef';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HeaderComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
    ],
    providers: [
        WindowRef,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
