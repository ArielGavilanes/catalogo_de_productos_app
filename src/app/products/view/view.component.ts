import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  product: any = {};

  id_producto: any;

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
      console.log(response)
      this.product = response;
    });
  }
}
