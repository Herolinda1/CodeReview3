import { Component, OnInit} from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { foods, ifood } from '../foods';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {

  foods: ifood = {} as ifood;
  id: number = 0;

  constructor(private route: ActivatedRoute,private cs: CartService){
  }
  
  ngOnInit(): void{
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.foods = foods[this.id]
    });
  }

  food: Array<ifood> = [];
  
  addToCart(obj: ifood){
    alert("added from detail page")
    this.cs.addToCart(obj);
  }
}