import { Component } from '@angular/core';
import { Item } from './item.model';
import { TechService } from './tech.service';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent {
  
  items:Array<Item>

  constructor(private ts:TechService){

  }

  ngOnInit(){
    this.ts.fetchData().subscribe((data:Array<Item>)=>this.items=data)
  }
}
