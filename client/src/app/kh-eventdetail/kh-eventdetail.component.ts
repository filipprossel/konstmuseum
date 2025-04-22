import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from "./carousel/carousel.component";
import { Exhibition } from "../kh-event/service/exhibition.model";
import { ExhibitionService } from "../kh-event/service/exhibtion.service";
import { CommonModule } from '@angular/common';
import {NgxScannerQrcodeComponent, LOAD_WASM, ScannerQRCodeConfig, ScannerQRCodeSelectedFiles, NgxScannerQrcodeService, ScannerQRCodeResult } from 'ngx-scanner-qrcode';


@Component({
  selector: 'app-kh-event-detail',
  templateUrl: './kh-eventdetail.component.html',
  styleUrls: ['./kh-eventdetail.component.scss'],
  imports: [CarouselComponent, CommonModule, NgxScannerQrcodeComponent]
})


export class KhEventDetailComponent implements OnInit {
  eventId: string | null = null;
  exhibition: Exhibition | null = null;

  constructor(
    private route: ActivatedRoute,
    private exhibitionService: ExhibitionService,
    private qrcode: NgxScannerQrcodeService
  ) {}

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];

  public config: ScannerQRCodeConfig = {
    isBeep: false, 
    constraints: {
      video: {
        width: window.innerWidth
      }      
    },
  }
  hasScanned = false;

  @Output() getScanner = new EventEmitter<string>();


  onScan(res: ScannerQRCodeResult[], action?: any): void {
    if (res && res.length) {
      const { value } = res[0];
      value && action && action.stop();
    
      this.closeQrcodeDialog();

      this.getScanner.emit(value);
      window.location.href = value;
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

  
  isActive = true;
  
  ngOnInit(): void {
LOAD_WASM('assets/wasm/ngx-scanner-qrcode.wasm').subscribe();

    this.eventId = this.route.snapshot.paramMap.get('id');
    if (this.eventId) {
      const id = Number(this.eventId);
      this.exhibitionService.getExhibitionById(id).subscribe({
        next: (data) => {
          this.exhibition = data;
        },
        error: (err) => {
          console.error('Failed to load exhibition', err);
        }
      });
    }
  }

  openStateQrCodeDialog: boolean = false;

  openQrcodeDialog(): void {
    this.openStateQrCodeDialog = true;
  }

  closeQrcodeDialog(): void {
    this.openStateQrCodeDialog = false;
  }
}