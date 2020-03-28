import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CountryService } from 'src/app/service/country.service';
import { Observable, range } from 'rxjs';
import { map, filter, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnChanges {

    public page: number = 0;
    public countries: Array<any>;
    //public pages: any;

    @Input() offset: number = 0;
    @Input() limit: number = 1;
    @Input() size: number = 1;
    @Input() range: number = 3;

    //pages: <any[]>;

    currentPage: number;
    totalPages: number;




    public startIndex = 0;
    public endIndex = 10;
    public pageIndex: number;
    //public activePage: number = 0;
    //public totalRecords: number;
    public btnLeft = true;
    public btnRight = true;




    @Input() totalRecords: number = 0;  
    @Input() recordsPerPage: number = 0;  
  
    @Output() onPageChange: EventEmitter<number> = new EventEmitter();  
  
    public pages: number [] = [];  
    activePage: number; 


    constructor(private countrieService: CountryService) { }

    ngOnInit(): void {
        this.getCountries();

        //this.getPages(this.offset, this.limit, this.size);
    }

    ngOnChanges() {
        //this.getPages(this.offset, this.limit, this.size);
        const pageCount = this.getPageCount();  
        this.pages = this.getArrayOfPage(pageCount);  
        this.activePage = 1;  
        this.onPageChange.emit(1); 
    }

    getCountries() {
        this.countrieService.getCountries(this.page)
            .subscribe((data: any) => {
                console.log('Data User Countries', data);
                this.countries = data;
                //this.pages = this.totalPages;

                /* const pageCount = this.getPageCount();  
                this.pages = this.getArrayOfPage(pageCount);   */
                this.totalRecords = data.length;

                console.log('this.pagesssssssssssss9999', this.pages);
            })
    }

    getPageCount(): number {  
        let totalPage:number = 0;  
          
        if(this.totalRecords > 0 && this.recordsPerPage > 0){  
          const pageCount = this.totalRecords / this.recordsPerPage;  
          const roundedPageCount = Math.floor(pageCount);  
    
          totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;  
        }  
    
        return totalPage;  
      } 

    /* getPages(offset: number, limit: number, size: number) {
        this.currentPage = this.getCurrentPage(offset, limit);
        this.totalPages = this.getTotalPages(limit, size);

        this.pages = range(-this.range, this.range * 2 + 1)
            .pipe(
                map(offset => this.currentPage + offset),
                filter(page => this.isValidPageNumber(page, this.totalPages)),
                toArray()
            )

        console.log('this.currentPage', this.currentPage);
        console.log('this.totalPages', this.totalPages);
        console.log('this.pages', this.pages);
    } */

    getCurrentPage(offset: number, limit: number): number {
        return Math.floor(offset / limit) + 1;
    }

    getTotalPages(limit: number, size: number): number {
        return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
    }

    isValidPageNumber(page: number, totalPages: number): boolean {
        return page > 0 && page <= totalPages;
    }




   




    // Pagination
    getPagination(length: any) {
        return new Array(length % 10)
    }

    getArrayOfPage(pageCount: number): number[] {
        let pageArray: number[] = [];

        if (pageCount > 0) {
            for (var i = 1; i <= pageCount; i++) {
                pageArray.push(i);
            }
        }

        return pageArray;
    }





    // Update Pagination
    updateIndex(pageIndex: number) {
        this.startIndex = pageIndex * 10;
        this.endIndex = this.startIndex + 10

        //if(pageIndex < 1) return;
        //if(pageIndex > this.countries.length) return;

        this.activePage = pageIndex;
    }

    onClickPage(pageNumber: number) {
        this.startIndex = pageNumber * 10;
        this.endIndex = this.startIndex + 10

        if (pageNumber < 1) return;
        if (pageNumber > this.pages.length) return;
        this.activePage = pageNumber;
        this.onPageChange.emit(this.activePage);  

        console.log('this.activePage', this.activePage,
                    'pageNumber', pageNumber);
    }
}
