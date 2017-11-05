import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListFooterComponent } from './location-list-footer/location-list-footer.component';
import { LocationListHeaderComponent } from './location-list-header/location-list-header.component';
import { LocationDataService } from './location-data.service';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

@NgModule({
  declarations: [
    AppComponent,
    LocationListComponent,
    LocationListFooterComponent,
    LocationListHeaderComponent,
    LocationListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LocationDataService, ApiMockService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
