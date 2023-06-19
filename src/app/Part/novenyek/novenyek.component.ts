import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/Service/base.service';

@Component({
  selector: 'app-novenyek',
  templateUrl: './novenyek.component.html',
  styleUrls: ['./novenyek.component.css']
})
export class NovenyekComponent {
  novenyek:any;
  phrase="";
  constructor(private base:BaseService){
      this.base.getNovenyek().snapshotChanges().pipe(
        map(ch => ch.map((c)=>({key:c.payload.key, ...c.payload.val()}))
      )).subscribe(
        (adatok)=>this.novenyek=adatok
      )
  }
  addTetel(key:string,db:string){
    this.base.addTetel({novenyKey:key, db:db})

  }
}
