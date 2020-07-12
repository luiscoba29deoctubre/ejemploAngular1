import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css'],
})
export class DetailsproductComponent implements OnInit {
  public product: any = {};
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log('productId', productId);
    [this.product] = this.dataService.getProductById(productId);
    console.log('this.product', this.product);
    console.log(' [this.product]', [this.product]);
  }

  onGoBack(): void {
    this.location.back();
  }
}
