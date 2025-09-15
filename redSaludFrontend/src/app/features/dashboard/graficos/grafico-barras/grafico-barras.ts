import { Component, AfterViewInit, ElementRef, ViewChild, Input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { ClientOnlyDirective } from '../../../../shared/directives/client-only.directive';
import { indicadoresService } from '../../../../core/services/indicadores-service';
import { IndicadoresResponse } from '../../../../shared/models/datagrafico';
Chart.register(...registerables);

@Component({
  selector: 'app-grafico-barras',
  standalone: true,
  imports: [CommonModule, ClientOnlyDirective],
  template: `
    <div class="chart-container" *clientOnly>
      @if(dataIndicadorResponse()){

      <canvas #chart></canvas>
      
    <button (click)="downloadChart()">Descargar gráfico</button>
      }
    </div>
  `,
  styles: [`
    .chart-container {
      width: 100%;
      max-width: 600px;
      margin: auto;
    }
  `]
})
export class GraficoBarras implements AfterViewInit {


  @ViewChild('chart') chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
  @Input() dataIndicadorResponse = signal<IndicadoresResponse>({
    "labels": [],
    "values": []
  })
  constructor() {
    effect(() => {
      const data = this.dataIndicadorResponse();
      if (this.chartRef && data.labels.length > 0) {
        this.renderChart(data);
      }
    });
  }
  ngAfterViewInit() {
    const data = this.dataIndicadorResponse();
    if (data.labels.length > 0) {
      this.renderChart(data);
    }
  }


  private renderChart(data: IndicadoresResponse) {
    if (this.chart) {
      this.chart.destroy(); // 👈 destruir gráfico anterior para evitar duplicados
    }
    const colors = this.generateRandomColors(data.labels.length);

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Indicadores de Salud',
          data: data.values,
          backgroundColor: colors.background,
          borderColor:colors.border,
          borderWidth:1,
          hoverBackgroundColor:colors.border,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top',
            display:true,
            labels:{
              color:'rgb(8,8,8,8)'
            }
            
           },
          title: { display: true, text: 'Indicadores del Área de Salud' },
          
        }
      }
    };

    this.chart = new Chart(this.chartRef.nativeElement, config);



  }

  //generar color aleatorio
  private generateRandomColors(count: number): { background: string[], border: string[] } {
  const background: string[] = [];
  const border: string[] = [];

  for (let i = 0; i < count; i++) {
    const [r, g, b] = this.randomRGB();

    background.push(`rgba(${r}, ${g}, ${b}, 0.4)`); // semi-transparente
    border.push(`rgba(${r}, ${g}, ${b}, 1)`);       // opaco
  }

  return { background, border };
}
//genera rgb aleatorio
private randomRGB(): [number, number, number] {
  return [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  ];
}
  downloadChart() {
    const url = this.chartRef.nativeElement.toDataURL('image/jpeg', 1.0);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grafico.jpg';
    a.click();
  }

}
