import { Component,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-panel',
  imports: [CommonModule],
  templateUrl: './upload-panel.component.html',
  styleUrl: './upload-panel.component.scss'
})
export class UploadPanelComponent {
  previewUrls: string[] = [];

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
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
}
