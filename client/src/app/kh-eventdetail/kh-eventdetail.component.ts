import { Component, EventEmitter, NgModule, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from "./carousel/carousel.component";
import { Exhibition } from "../kh-event/service/exhibition.model";
import { ExhibitionService } from "../kh-event/service/exhibtion.service";
import { CommonModule } from '@angular/common';
import {NgxScannerQrcodeComponent, LOAD_WASM, ScannerQRCodeConfig, ScannerQRCodeSelectedFiles, NgxScannerQrcodeService, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { formatDate } from '../utils/Timeformater';


@Component({
  selector: 'app-kh-event-detail',
  templateUrl: './kh-eventdetail.component.html',
  styleUrls: ['./kh-eventdetail.component.scss'],
  imports: [CarouselComponent, CommonModule, NgxScannerQrcodeComponent]
})


export class KhEventDetailComponent implements OnInit {
  @ViewChild('action', { static: false }) scanner!: NgxScannerQrcodeComponent;

  eventId: any;
  exhibition: Exhibition | null = null;
  ehibition_start_date: string | null = null;
  ehibition_end_date: string | null = null;
  exhibihitionIsActive: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private exhibitionService: ExhibitionService,
    private qrcode: NgxScannerQrcodeService
  ) {}

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];

  public config: ScannerQRCodeConfig = {
    isBeep: false, 
    canvasStyles: [
      // Style for QR code outline
      
        { lineWidth: 2, strokeStyle: '', fillStyle: '#55f02880' },
        { opacity:"0" }
       ],
      
    constraints: {
      video: {
        height: window.innerHeight

      }      
    },
  }
  hasScanned = false;

  @Output() getScanner = new EventEmitter<string>();


  onScan(res: ScannerQRCodeResult[], action?: any): void {
    if (res && res.length) {
      const { value } = res[0];
      
      this.scanner.pause();

      setTimeout(() => {
        window.location.href=value;
      }, 1000)

      
    }
  }

  isURL(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }
  

  public onSelects(files: any) {
    this.qrcode.loadFiles(files).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
    });
  }
  
  ngOnInit(): void {
    LOAD_WASM('assets/wasm/ngx-scanner-qrcode.wasm').subscribe();

    this.eventId = this.route.snapshot.paramMap.get('id');
    if (this.eventId) {
      const id = Number(this.eventId);
      
      const normalizeDate = (str: string) => {
        return str.replace(/T(\d{2}:\d{2}):(\d{1})(?!\d)/, 'T$1:0$2');
      };

      this.exhibitionService.getExhibitionById(id).subscribe({
          next: (data) => {
            this.exhibition = data;
            this.ehibition_start_date = formatDate(this.exhibition.exhibition_date_start);
            this.ehibition_end_date = formatDate(this.exhibition.exhibition_date_end);

            const start = new Date(normalizeDate(this.exhibition.exhibition_date_start.toString()));
            const end = new Date(normalizeDate(this.exhibition.exhibition_date_end.toString()));
          
            const now = new Date();
            if (start <= now && now <= end) {
              this.exhibihitionIsActive = true;
              console.log(this.exhibihitionIsActive)
            }
          }
      });
    }
  }

  openStateQrCodeDialog: boolean = false;
 
  openQrcodeDialog(): void {
    this.openStateQrCodeDialog = true;
    setTimeout(() => {
      if (this.scanner) {
        this.scanner.start();
      }
    }, 0);
  }

  closeQrcodeDialog(): void {
    this.openStateQrCodeDialog = false;
  }
}