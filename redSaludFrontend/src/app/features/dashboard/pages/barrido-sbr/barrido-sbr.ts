import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { GraficoBarras } from '../../graficos/grafico-barras/grafico-barras';
import { indicadoresService } from '../../../../core/services/indicadores-service';
import { filtroBusquedaIndicadores, IndicadoresResponse } from '../../../../shared/models/datagrafico';
import { microRedService } from '../../../../core/services/microRed-service';
import { microRed } from '../../../../shared/models/microRed';
import { TablaIndicador } from "../../../../shared/components/tabla-indicador/tabla-indicador";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faSquarePollVertical,faFileExcel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barrido-sbr',
  imports: [GraficoBarras, TablaIndicador,FontAwesomeModule],
  templateUrl: './barrido-sbr.html',
  styleUrls: ['./barrido-sbr.css']
})
export class BarridoSBR implements OnInit {
  @ViewChild(GraficoBarras) chartComp!: GraficoBarras;
  iconBar=faSquarePollVertical;
  iconExcel=faFileExcel;

  constructor(private datosService: indicadoresService, private microRedService: microRedService) { }
  dataResponce = signal<IndicadoresResponse>({
    "labels": [],
    "atendidosEess": [],
    "atencionesServ":[],
    "atendidosServ":[]
  });
  titleGrafico = signal<string>("")


  filtros: filtroBusquedaIndicadores = {
    red: 'HUAMANGA',
    anio: 'TODOS',
    mes: '',
    microred: 'TODOS',
    ipress: 'TODOS'
  };
  labelsRed:string[]=["RED HUAMANGA"]
  microRedResponse: microRed[] = []
  labelsMicroRed: string[] = []
  labelsPs: string[] = []
  labelsAnio = ["TODOS", "2023", "2024", "2025"]
  labelsMeses = [
    { value: "", nombre: "TODOS" },
    { value: "1.0", nombre: 'ENERO' },
    { value: "2.0", nombre: 'FEBRERO' },
    { value: "3.0", nombre: 'MARZO' },
    { value: "4.0", nombre: 'ABRIL' },
    { value: "5.0", nombre: 'MAYO' },
    { value: "6.0", nombre: 'JUNIO' },
    { value: "7.0", nombre: 'JULIO' },
    { value: "8.0", nombre: 'AGOSTO' },
    { value: "9.0", nombre: 'SETIEMBRE' },
    { value: "10.0", nombre: 'OCTUBRE' },
    { value: "11.0", nombre: 'NOVIEMBRE' },
    { value: "12.0", nombre: 'DICIEMBRE' },
  ];






  ngOnInit(): void {
    this.buscar()
    this.optenerMicroRed()
  }

  buscar() {
    this.datosService.getData(this.filtros).subscribe({
      next: data => {
        this.dataResponce.set(data)
        const a = "INDICADORES DE LA MICRORED " + this.filtros.microred + " PUESTO DE SALUD " + this.filtros.ipress + "." + this.labelsMeses.find(m => m.value === this.filtros.mes)?.nombre + " DEL " + this.filtros.anio;
        this.titleGrafico.set(a)
        console.log(data)
      },
      error: e => {
        console.error("erorr fue ps", e)
      }
    })

  }
  optenerlabelPs(microred: string) {
    if (microred) {
      const micro = this.microRedResponse.find(item => item.microRed === microred);

      return micro?.centroSalud;

    } else {
      return []
    }






  }

  optenerMicroRed() {
    this.microRedService.obtenerMicroReds().subscribe({
      next: data => {
        this.microRedResponse = data;
        this.labelsMicroRed =["TODOS",...(data.map(item => item.microRed))] ;
      },
      error: e => {
        console.error("fue ps, los microredes")
      }

    })
  }






  changeMicrored(event: Event) {
  const value = (event.target as HTMLSelectElement).value;

  // Construcción de labelsPs
  this.labelsPs = value === "TODOS" 
    ? ["TODOS"] 
    : ["TODOS", ...(this.optenerlabelPs(value) ?? [])];

  // Actualización de filtros
  this.filtros = {
    ...this.filtros,
    microred: value,
    ipress: "TODOS"
  };

  this.buscar();
}

  changeIpress(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.filtros.ipress = value;
    this.buscar();

  }
  changeAnio(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.filtros.anio = value;
    this.buscar();

  }
  changeMes(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.filtros.mes = value;
    this.buscar();

  }
  descargarExcel(){
    this.datosService.downloadExcel(this.filtros)
  }
  descargarGrafico(){
    this.chartComp.downloadChart()
  }
}
