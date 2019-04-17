import { Component } from '@angular/core';
import { TreeService } from './tree/tree.service';
import { Sport, League } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TreeService]
})
export class AppComponent {
  sports: Sport[] = [];

  constructor(private dataService: TreeService){}

  ngOnInit(){
    this.dataService.getTreeData()
      .subscribe((response => {
          this.sports = response['data'].sort((a, b) => { return b -a ;});
      }));
  }
    
}
