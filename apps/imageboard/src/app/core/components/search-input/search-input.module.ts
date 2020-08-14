import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchInputComponent } from './search-input.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchInputComponent],
  exports: [SearchInputComponent],
})
export class SearchInputModule {}
