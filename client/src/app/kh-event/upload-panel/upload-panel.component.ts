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
  exhibitionName: string = '';
  exhibitionOrganizer: string = '';
  exhibitionDescription: string = '';
  exhibitionDateStart: Date | null = null;
  exhibitionDateEnd: Date | null = null;
  artDescription: string = '';
  artworkName: string = '';
  constructor(private exhibitionService: ExhibitionService) {}

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
    this.nullify();
    this.artworks = [];
    this.exhibitionName = '';
    this.exhibitionOrganizer = '';
    this.exhibitionDescription = '';
    this.exhibitionDateStart = null;
    this.exhibitionDateEnd = null;
    this.cancel.emit();
  }

  removeImage(artworkToRemove: { file: File; name: string; desc: string }) {
    this.artworks = this.artworks.filter(artwork => artwork !== artworkToRemove);
  }
  
  nullify() {
    this.artworkName = '';
    this.artDescription = '';
    this.selectedFiles = null;
    this.previewImage = null;
  }

  isImageFormValid(): boolean {
    return (
      this.artworkName.trim() !== '' &&
      this.artDescription.trim() !== ''
    );
  }

  isFormValid(): boolean {
    return (
      this.exhibitionName.trim() !== '' &&
      this.exhibitionOrganizer.trim() !== '' &&
      this.exhibitionDescription.trim() !== '' &&
      this.exhibitionDateStart !== null &&
      this.exhibitionDateEnd !== null &&
      this.artworks.length > 0
    );
  }  

  removeUpload() {
    this.nullify();
  }

  uploadImage() {
    if (!this.selectedFiles) { return }
    if (!this.artworkName) { return }

    const url = this.previewImage as string;

    this.artworks.push({
      file: this.selectedFiles,
      name: this.artworkName,
      desc: this.artDescription,
      url: url
    })

    this.nullify();
  }

  uploadEvent() {
    const formData = new FormData();
    formData.append('exhibition_name', this.exhibitionName);
    formData.append('exhibition_organizer', this.exhibitionOrganizer);
    formData.append('exhibition_desc', this.exhibitionDescription);

    const exhibitionDateStartFormatted = this.exhibitionDateStart ? new Date(this.exhibitionDateStart).toISOString() : '';
    const exhibitionDateEndFormatted = this.exhibitionDateEnd ? new Date(this.exhibitionDateEnd).toISOString() : '';

    formData.append('exhibition_date_start', exhibitionDateStartFormatted);
    formData.append('exhibition_date_end', exhibitionDateEndFormatted);

    this.artworks.forEach((artwork, index) => {
      formData.append('artfile', artwork.file, artwork.name); // Multiple files
      formData.append(`artname[${index}]`, artwork.name);
      formData.append(`artdesc[${index}]`, artwork.desc);
    });

    this.exhibitionService.uploadFiles(formData).subscribe({
      next: (res) => {
        console.log('Success', res);
      },
      error: (err) => {
        console.error('Fail', err);
      }
    })
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
