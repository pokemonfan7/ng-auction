import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Product } from '../product/product.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductResolve implements Resolve<Product> {

    constructor(
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product {
        const productId: number = route.params['id'];

        if ( productId === 1 ) {
            return new Product(1, 'NS');
        } else {
            this.router.navigate(['/home']);
            return undefined;
        }
    }
}
