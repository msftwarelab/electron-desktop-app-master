import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ProductModel} from '../Models/product';

@Injectable()
export class DataBusService {

  private _selectedProduct: BehaviorSubject<ProductModel>;
  private _dataIsLoading: BehaviorSubject<boolean>;
  private _cartProducts: BehaviorSubject<ProductModel[]>;
  private _numberOfItemsInCart: BehaviorSubject<number>;

  constructor() {
    this._selectedProduct = new BehaviorSubject<ProductModel>(new ProductModel());
    this._dataIsLoading = new BehaviorSubject<boolean>(false);
    this._cartProducts = new BehaviorSubject<ProductModel[]>([]);
    this._numberOfItemsInCart = new BehaviorSubject<number>(0);
  }

  setNewProduct(product: ProductModel) {
    this._selectedProduct.next(product);
    window.localStorage.setItem('currentProductUrl', product.url);
  }

  get currentProduct() {
    return this._selectedProduct.asObservable();
  }

  setDataLoadingStatus(status: boolean) {
    this._dataIsLoading.next(status);
  }

  get dataLoadingStatus() {
    return this._dataIsLoading.asObservable();
  }

  setNewCartProduct(product: ProductModel[]) {
    this._cartProducts.next(product);
  }

  get cartProducts() {
    return this._cartProducts.asObservable();
  }

  setNumberOfItemsInCart = (numberOfItems: number) => {
    this._numberOfItemsInCart.next(numberOfItems);
  }

  get numberOfItemsInCart() {
    return this._numberOfItemsInCart.asObservable();
  }
}
