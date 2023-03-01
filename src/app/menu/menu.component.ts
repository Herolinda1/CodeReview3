import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { foods, ifood } from '../foods';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  foods: Array<ifood> = foods;
  
  constructor(private cs: CartService) {
    
  }

  addToCart(ojb: ifood) {
    alert("Your food will prepared");
    this.cs.addToCart(ojb);
  }
}
