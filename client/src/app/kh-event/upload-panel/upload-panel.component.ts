import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionService } from '../service/exhibtion.service';
import { FormsModule } from '@angular/forms';
import { Console } from 'node:console';
import { read } from 'node:fs';

@Component({
  selector: 'app-upload-panel',
  imports: [CommonModule,FormsModule],
  templateUrl: './upload-panel.component.html',
  styleUrl: './upload-panel.component.scss'
})
export class UploadPanelComponent {
  exhibitionName: string = '';
  exhibitionArtist: string = '';
  exhibitionOrganizer: string = '';
  exhibitionDescription: string = '';
  exhibitionDateStart: Date | null = null;
  exhibitionDateEnd: Date | null = null;
  artDescription: string = '';
  artworkName: string = '';
  constructor(private exhibitionService: ExhibitionService) { }

  /*onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      this.selectedFiles = Array.from(files);
      this.previewUrls = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            this.previewUrls.push(reader.result);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  }*/
  previewImage: string | null = null;
  selectedFiles: File | null = null;
  artworks: { file: File; name: string; desc: string; url: string }[] = [];

  onPhotoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const photo = input.files?.[0];

    if (!photo) { 
      return; }

    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result as string;
    }

    this.selectedFiles = photo

    reader.readAsDataURL(photo);
  }

  @Output() cancel = new EventEmitter<void>();

  cancelUpload() {
    this.cancel.emit();
  }

  uploadEvent() {
    this.artworks.forEach((artwork, index) => {
      console.log(`Artwork ${index + 1}:`);
      console.log('  File:', artwork.file);
      console.log('  Name:', artwork.name);
      console.log('  Description:', artwork.desc);
    });
  }

  removeImage(artworkToRemove: { file: File; name: string; desc: string }) {
    this.artworks = this.artworks.filter(artwork => artwork !== artworkToRemove);
  }
  

  uploadImage() {
    if (!this.selectedFiles) { return }
    console.log(this.exhibitionName)
    console.log(this.artworkName)
    if (!this.artworkName) { return }

    const url = this.previewImage as string;

    this.artworks.push({
      file: this.selectedFiles,
      name: this.artworkName,
      desc: 'test',
      url: url
    })
    this.previewImage = null;
  }

  /*uploadEvent() {
    const formData = new FormData();
    formData.append('exhibition_name', this.exhibitionName);
    formData.append('exhibition_artist', this.exhibitionArtist);
    formData.append('exhibition_desc', this.exhibitionDescription);
  
    // Ensure that exhibitionDate is a valid Date and convert it to ISO string
    const exhibitionDateStartFormatted = this.exhibitionDateStart ? new Date(this.exhibitionDateStart).toISOString() : '';
    const exhibitionDateEndFormatted = this.exhibitionDateEnd ? new Date(this.exhibitionDateEnd).toISOString() : '';
  
    // Fix the parameter name to 'exhibition_date_start' instead of 'exhition_date_start'
    formData.append('exhibition_date_start', exhibitionDateStartFormatted); // Corrected
    formData.append('exhibition_date_end', exhibitionDateEndFormatted); // Corrected
    
    // Append files
    this.selectedFiles.forEach(file => {
      formData.append('photos', file, file.name);
    });
  
    console.log('FormData contents:');
    formData.forEach((value, key) => {
      console.log(key, value);
    });
  
    // Call the service to upload files
    this.exhibitionService.uploadFiles(formData).subscribe({
      next: (res) => {
        console.log('Upload successful', res);
      },
      error: (err) => {
        console.error('Upload failed', err);
      }
    });
  }*/
  
}
