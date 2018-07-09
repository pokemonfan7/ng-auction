import { CanDeactivate } from '@angular/router';
import { ProductComponent } from '../product/product.component';
// 路由守卫
export class UnsavedGuard implements CanDeactivate<ProductComponent> {
    canDeactivate(component: ProductComponent) {

        return window.confirm('你还未保存，确定要离开吗？');
    }
}
