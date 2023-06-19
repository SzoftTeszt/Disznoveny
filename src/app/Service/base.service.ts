import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Noveny } from '../Model/noveny';
import { Megrendeles } from '../Model/megrendeles';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refNovenyek: AngularFireList<Noveny>;
  refMegrendelesek: AngularFireList<Megrendeles>;
  tetelek:any=[];
  constructor(private db:AngularFireDatabase) {
      this.refNovenyek=this.db.list('/novenyek')
      this.refMegrendelesek=this.db.list('/megrendelesek')
   }

   getNovenyek(){
    return this.refNovenyek;
   }
   getMegrendelesek(){
    return this.refMegrendelesek;
   }

   addMegrendelesek(body:any){
    return this.refMegrendelesek.push(body);
   }
   updateMegrendelesek(body:any){
    return this.refMegrendelesek.update(body.key, body);
   }

   addTetel(body:any){
      console.log("bsaddTetel",body)
      return this.tetelek.push(body);
   }
   getTetel(){
    return of(this.tetelek);
   }
   deleteAllTetelek(){
    this.tetelek=[];
   }

   deleteTetel(tetel:any){
    this.tetelek.splice(this.keres(tetel.key),1);
   }

   keres(key:string){
    return this.tetelek.findIndex((tetel:any)=> tetel.key==key)
  }
}
