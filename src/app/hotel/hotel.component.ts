import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router,ActivatedRoute } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit,OnDestroy {

  destroy$ = new Subject();
  blogs:any = [];
  property_images:any = [];
  hotelData:any;
  slug:any;
  sectionOne:any;

  constructor(
    private router: Router,
    private appService: ServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.slug = this.route.snapshot.params['slug'];
    this.getHotel();
    this.getMostBenifits();
  }
  getMostBenifits(){
    const data = {id:22};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.sectionOne = r.record;
      }else{

      }
    },error =>{

    });
  }
  getHotel(){
    const data = {
      type:'Blog',
      slug:this.slug
    };
    this.appService.login('property/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
        this.hotelData = r.blogData;
        this.property_images = r.propertyImages;
      }else{

      }
    },error =>{

    });
  }

}

