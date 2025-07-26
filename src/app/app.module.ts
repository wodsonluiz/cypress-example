import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { AdventureCardComponent } from './components/adventure-card/adventure-card.component';
import { AdventureInfoComponent } from './components/adventure-info/adventure-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdventureDetailsComponent } from './components/adventure-details/adventure-details.component';
import { AdventureGridComponent } from './components/adventure-grid/adventure-grid.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentModalComponent } from './components/comment-modal/comment-modal.component';
import { TransformArrayForGrid } from './pipes/TransformArrayForGrid';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    AdventureCardComponent,
    AdventureInfoComponent,
    CommentModalComponent,
    AdventureDetailsComponent,
    AdventureGridComponent,
    ToolbarComponent,
    AboutComponent,
    TransformArrayForGrid
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ NgbActiveModal ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
