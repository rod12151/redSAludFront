import { Component, AfterViewInit, ElementRef, ViewChild, Input, signal } from '@angular/core';
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
  @Input() dataIndicadorResponse = signal<IndicadoresResponse>({"labels": ["Atención", "Seguimiento", "Metas", "Controles", "Vacunación"],
  "values": [0, 0, 0, 0, 0]})

  ngAfterViewInit() {
    
      if (!this.chartRef) return;
      const colors = this.generateRandomColors(this.dataIndicadorResponse().labels.length);
      
      const config: ChartConfiguration = {
        type: 'bar',
        data: {
          labels: this.dataIndicadorResponse().labels,
          datasets: [{
            label: 'Indicadores de Salud',
            data: this.dataIndicadorResponse().values,
            backgroundColor: colors
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Indicadores del Área de Salud (dinámico con servicio)' }
          }
        }
      };

      this.chart = new Chart(this.chartRef.nativeElement, config);
    
  }
  private generateRandomColors(count: number): string[] {
  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    colors.push(`rgba(${r}, ${g}, ${b}, 0.7)`); // con transparencia
  }
  return colors;
}
downloadChart() {
  const url = this.chartRef.nativeElement.toDataURL('image/jpeg', 1.0);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'grafico.jpg';
  a.click();
}

}
