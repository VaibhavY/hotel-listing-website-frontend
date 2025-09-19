import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';
declare var $: any;
import 'owl.carousel';
import 'slick-carousel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  destroy$ = new Subject();
  blogs:any = [];
  testimonials:any = [];
  latestHotels:any = [];
  sectionOne:any = [];
  sectionTwo:any = [];
  sectionThree:any = [];
  sectionFour:any = [];
  sectionFive:any = [];
  sectionSix:any = [];
  sectionSeven:any = [];

  constructor(
    private appService: ServiceService,
  ) { }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.getTestimonials();
    this.getHeroSection();
    this.getSectionTwo();
    this.getSectionThree();
    this.getSectionFour();
    this.getSectionFive();
    this.getSectionSix();
    this.getSectionSeven();
    this.getLatestProperty();
    this.getProfile();
    this.getBlogs();
    //$('html, body').animate({ scrollTop: 0 }, 'slow');
  }
  getLatestProperty(){
    const data = {};
    this.appService.login('latest/property/list',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.latestHotels = r.hotels;
      }else{

      }
    },error =>{

    });
  }
  getHeroSection(){
    const data = {id:1};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.sectionOne = r.record;
      }else{

      }
    },error =>{

    });
  }
  getSectionTwo(){
    const data = {id:2};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.sectionTwo = r.record;
      }else{

      }
    },error =>{

    });
  }
  getSectionThree(){
    const data = {id:3};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.sectionThree = r.record;
      }else{

      }
    },error =>{

    });
  }
  getSectionFour(){
    const data = {id:4};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.sectionFour = r.record;
      }else{

      }
    },error =>{

    });
  }
  getSectionFive(){
    const data = {id:6};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.sectionFive = r.record;
      }else{

      }
    },error =>{

    });
  }
  getSectionSix(){
    const data = {id:7};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.sectionSix = r.record;
      }else{

      }
    },error =>{

    });
  }
  getSectionSeven(){
    const data = {id:8};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.sectionSeven = r.record;
      }else{

      }
    },error =>{

    });
  }
  getProfile(){
    const data = {
      token:'nitm',
    };
    this.appService.postData('blogs/list',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
    },error =>{
      /* Swal.fire(
        'Error',
        'Internal server error',
        'error'
      ) */
    });
  }
  getBlogs(){
    const data = {
      type:'Blog',
      page:'InnerPage'
    };
    this.appService.login('blogs/list',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.blogs = r.blogs;
      }else{

      }
    },error =>{

    });
  }
  getTestimonials(){
    const data = {};
    this.appService.login('testimonials/list',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.testimonials = r.testimonials;
      }else{

      }
    },error =>{

    });
  }

}
