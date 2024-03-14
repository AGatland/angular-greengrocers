import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/models/item';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  http = inject(HttpClient);
  items: Item[] = [];

  // Get grociery items from API
  async getItems() {
    const result = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}groceries`)
    );
    this.items = result;
    return this.items;
  }


}
