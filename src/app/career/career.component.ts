import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  destroy$ = new Subject();
  pageData:any;

  constructor(
    private router: Router,
    private appService: ServiceService,
  ) { }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.getPageData();
  }
  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  getPageData(){
    $('#regBtn').val('Processing...');
    const data = {id:19};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
         this.pageData = r.record;
      }else{
        Swal.fire(
          'Error!',
          r.message,
          'error'
        ); 
      }
    },error =>{

    });
  }

}







