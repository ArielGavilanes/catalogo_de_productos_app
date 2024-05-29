import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, CreateComponent, UpdateComponent, ViewComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RouterModule,
    FormsModule
  ],
})
export class ProductsModule {}
