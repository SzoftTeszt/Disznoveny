import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { map } from 'rxjs';
import { BaseService } from 'src/app/Service/base.service';

@Component({
  selector: 'app-uj-rendeles',
  templateUrl: './uj-rendeles.component.html',
  styleUrls: ['./uj-rendeles.component.css']
})
export class UjRendelesComponent {
  tetelek:any;
  megrendeles:any={};
  novenyek:any;

  constructor(private  base:BaseService, private router:Router){
    this.base.getTetel().subscribe(
      a=>this.tetelek=a
    )

    this.base.getNovenyek().snapshotChanges().pipe(
      map(ch => ch.map((c)=>({key:c.payload.key, ...c.payload.val()}))
    )).subscribe(
      (adatok)=>this.novenyek=adatok
    )
  }
delete(tetel:any){
  this.base.deleteTetel(tetel)
}

megrendel(){
  if (this.tetelek && this.tetelek.length>0)
  {
    this.megrendeles.statusz=false;
    this.megrendeles.datum=(new Date()).toLocaleString();
    this.megrendeles.rendeles=this.tetelek;
    // console.log(this.megrendeles);
    this.base.addMegrendelesek(this.megrendeles).then(
      ()=>{
        this.base.deleteAllTetelek();
        this.router.navigate(['/novenyek'])}
    )
  }

}

keres(key:string):number{
  
  return this.novenyek.findIndex((noveny:any)=> noveny.key==key)
  
}

fizetendo(){
  let osszesen=0;
  for (let i = 0; i < this.tetelek.length; i++) {
    osszesen+= this.tetelek[i].db*
    this.novenyek[this.keres(this.tetelek[i].novenyKey)].ar;    
  }
  return osszesen;
}
}
