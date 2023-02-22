import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(url: string) {
    // const message = 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-rozovyi-105681243/?c=750000000#!/item';
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}`;
    window.open(telegramUrl);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
