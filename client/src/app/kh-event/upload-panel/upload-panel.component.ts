import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionService } from '../service/exhibtion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-panel',
  imports: [CommonModule,FormsModule],
  templateUrl: './upload-panel.component.html',
  styleUrl: './upload-panel.component.scss'
})
export class UploadPanelComponent {
  previewUrls: string[] = [];
  selectedFiles: File[] = [];

  exhibitionName: string = '';
  exhibitionArtist: string = '';
  exhibitionDescription: string = '';
  exhibitionDate: Date | null = null;

  constructor(private exhibitionService: ExhibitionService) { }

  onFilesSelected(event: Event) {
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
  }

  @Output() cancel = new EventEmitter<void>();

  onCancelClick() {
    this.cancel.emit();
  }

  uploadEvent() {
    const formData = new FormData();
    formData.append('exhibition_name', this.exhibitionName);
    formData.append('exhibition_artist', this.exhibitionArtist);
    formData.append('exhibition_desc', this.exhibitionDescription);
  
    // Ensure that exhibitionDate is a valid Date and convert it to ISO string
    const exhibitionDateFormatted = this.exhibitionDate ? new Date(this.exhibitionDate).toISOString() : '';
  
    formData.append('exhibition_date', exhibitionDateFormatted);
  
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
  }  
}
