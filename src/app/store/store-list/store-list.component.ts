import { Component, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent {
  itemService = inject(ItemService)

  // One list to always have full list locally, and one for showing on page (since list is reduced when filtered)
  items: Item[] = [];
  itemsToShow: Item[] = [];

  filterType: string = '';
  sortType: string = '';
  
  async ngOnInit() {
    // Call the method in itemService for getting items from API
    const todoFromApi = await this.itemService.getItems();
    this.items = todoFromApi;
    this.itemsToShow = this.items;
  }

  filterAndSort() {
    this.itemsToShow = this.items;
    if (this.filterType !== "") {
      this.filterItems()
    }
    if (this.sortType !== "") {
      this.sortItems()
    }
  }

  filterItems() {
    this.itemsToShow = this.itemsToShow.filter((item) => item.type === this.filterType.toLocaleLowerCase());
  }

  sortItems() {
    if (this.sortType === 'Price DESC') {
      this.itemsToShow.sort((a, b) => b.price - a.price);
    } else if (this.sortType === 'Price ASC') {
      this.itemsToShow.sort((a, b) => a.price - b.price);
    } else if (this.sortType === 'Name DESC') {
      this.itemsToShow.sort((a, b) => b.name.localeCompare(a.name));
    } else if (this.sortType === 'Name ASC') {
      this.itemsToShow.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

}
