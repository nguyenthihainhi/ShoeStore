import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';

@NgModule({
  declarations: [
    AppComponent, 
    ShoeListComponent,
    ShoeDetailComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterOutlet, 
    HttpClientModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [
  ],
   
  bootstrap: [AppComponent],
})
export class AppModule {}