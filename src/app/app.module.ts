import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {rootReducer} from './redux/reducers';
import { TotalAmountComponent } from './total-amount/total-amount.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoinInfoComponent } from './coin-info/coin-info.component';
import {HttpClientModule} from '@angular/common/http';
import {FetchService} from './service/fetch.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CoinPricePipe } from './service/coin-price.pipe';
import { NameLengthPipe } from './service/name-length.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TotalAmountComponent,
    SidebarComponent,
    CoinInfoComponent,
    CoinPricePipe,
    NameLengthPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
