import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ifood } from '../foods';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  Cart : Array <ifood> = [];

  constructor(private CS: CartService){


  }

  ngOnInit(): void {
    this.Cart = this.CS.getCart();
  }
}