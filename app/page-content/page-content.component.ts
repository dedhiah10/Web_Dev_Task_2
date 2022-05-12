import { Component, ViewEncapsulation } from "@angular/core";
import { AllRows, TableRow } from "../table-row";


@Component({
    selector: 'page-content',
    templateUrl: 'page-content.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PageContentComponent {
    tableHeaders: string[] = ["Patient ID", "Patient", "Date of Upload", "FilesUploaded", "Processing Status", ""];

    pageQuantity = 7;

    tableRows: TableRow[] = []

    totalPages: number;
    private currentPage: number = 1;

    allRows: TableRow[];

    constructor() {
        setInterval(() => { this.incrementToHundred() }, 400);
        this.allRows = AllRows.allRows;
        this.totalPages = this.calculatePages();
        this.refreshTableRows();
    }

    incrementToHundred(): void {
        let itr = this.tableRows[0]?.filesUploaded;
        if (itr) {
            for (let i of itr) {
                if (i.fileProgress < 100) {
                    i.fileProgress += (8 * Math.random());
                }
            }
        }
    }

    //Only required to set
    setCurrentPage(currentPage: number) {
        if(currentPage > 0 && currentPage <= this.totalPages) {
            this.currentPage = currentPage;
            this.refreshTableRows();
        }
    }

    getCurrentPage():number {return this.currentPage;}

    isIncrAvail():boolean {
        if(this.currentPage + 1 <= this.totalPages) {
            return true;
        } else { return false; }
    }

    isDecrAvail():boolean {
        if(this.currentPage - 1 > 0) {
            return true;
        } else { return false; }
    }

    refreshTableRows():void {
        let maxItr:number = 0;
        let minItr:number = this.pageQuantity * (this.currentPage-1);

        let tableRows: TableRow[] = []

        if(this.allRows.length > this.pageQuantity * this.currentPage) {
            maxItr = this.pageQuantity * this.currentPage;
        } else {
            maxItr = this.allRows.length;
        }

        for (let i = minItr; i < maxItr; i++) {
            tableRows.push(this.allRows[i]);
        }
        
        this.tableRows = tableRows; console.log(this.totalPages, tableRows,this.currentPage)

    }

    calculatePages(): number {
        let addedNum: number;
        (this.allRows.length % this.pageQuantity == 0) ? addedNum = 0 : addedNum = 1;
        return Math.floor(this.allRows.length / this.pageQuantity) + addedNum;
    }

    pageIncrement(): void {
        this.setCurrentPage(this.currentPage+1);
    }

    
    pageDecrement(): void {
        this.setCurrentPage(this.currentPage-1);
    }

    changePage(pageNum:number) {
        this.setCurrentPage(pageNum+1);
    }


}