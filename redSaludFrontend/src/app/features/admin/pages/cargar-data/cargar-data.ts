import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { DataServices } from '../../../../core/services/data-services';


@Component({
  selector: 'app-cargar-data',
  imports: [],
  templateUrl: './cargar-data.html',
  styleUrl: './cargar-data.css'
})
export class CargarData {

  verEjemplo: boolean = false;
  isDragging = signal(false);
  errorMsg = signal<string | null>(null);
  successMsg = signal<string | null>(null);
  file:any;
  respuesta=signal(null);
  cargando=signal(false);
constructor( 
  private dataService:DataServices,
  private cdr: ChangeDetectorRef
){}
  private validTypes = [
    'application/vnd.ms-excel', // .xls
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // .xlsx
  ];

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(true);
  }

  onDragLeave() {
    this.isDragging.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);

    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.validateFile(file);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.validateFile(file);
      this.file=file;
    }
  }

  private validateFile(file: File) {
    if (!this.validTypes.includes(file.type)) {
      this.errorMsg.set(' Solo se permiten archivos Excel (.xls, .xlsx)');
      this.successMsg.set(null);
      
    } else {
      this.successMsg.set(` Archivo válido: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`);
      this.errorMsg.set(null);
    }
  }
  verejemplo() {
    this.verEjemplo = !this.verEjemplo
  }

  subirExcel(){
    this.cargando.set(true)
    this.cdr.detectChanges()
    if(this.file){
      this.dataService.uploadExcel(this.file).subscribe({
        next:data=>{
          this.respuesta.set(data)
          console.log(this.respuesta)
          this.cargando.set(false)
          this.cdr.detectChanges()
        },
        error:e=>{
          
          this.respuesta.set(e)
          this.cargando.set(false)
          this.cdr.detectChanges()
          console.error(e)
        }
      })
    }

  }
}
