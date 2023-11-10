import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.component.html',
  styleUrls: ['./shopping-search.component.css']
})
export class ShoppingSearchComponent {
  @Output() input = new EventEmitter();
  @Output() search = this.input.pipe(debounceTime(400))

  inputSearch(text: string){
    this.input.emit(text);
  }
}
