import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id_producto: any;
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id_producto = params['id_producto'];
      this.getProductsById(this.id_producto);
    });
  }

  getProductsById(id_producto: number) {
    this.databaseService.getProductsById(id_producto).subscribe((response) => {
      this.product = response;
    });
  }

  updateProduct() {
    const id_producto = this.id_producto;
    const product = this.product;
    console.log(id_producto, product)
    return this.databaseService.updateProduct(id_producto, product).subscribe();
  }
}
