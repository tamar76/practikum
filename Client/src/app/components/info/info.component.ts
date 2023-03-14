import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit,OnDestroy {
  userName=" ";
  sub:Subscription;
  constructor(private userSvc:UserService) { }

  
  ngOnInit(): void {
    this.sub=this.userSvc.currentUser.subscribe(succ=>{
      this.userName=succ?succ.firstName+'  '+succ.lastName:"";
      
    })
}
ngOnDestroy():void{
  this.sub.unsubscribe();
}
}
