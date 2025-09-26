import { Component, AfterViewInit, ElementRef, ViewChild, Input, signal, effect, OnChanges, SimpleChanges, input, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { ClientOnlyDirective } from '../../../../shared/directives/client-only.directive';
import { IndicadoresResponse } from '../../../../shared/models/datagrafico';

Chart.register(...registerables);

@Component({
  selector: 'app-grafico-barras',
  standalone: true,
  imports: [CommonModule, ClientOnlyDirective],
  templateUrl: './grafico-barras.html',
  styles: [`
    .chart-container {
      width: 100%;
      max-width: 800px;
      margin: auto;
    }
  `]
})
export class GraficoBarras implements AfterViewInit {


  @ViewChild('chart', { static: false }) chartRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  dataIndicadorResponse = input.required<IndicadoresResponse>();
  titleGrafico = input.required<string>;



  ngAfterViewInit() {
    const data = this.dataIndicadorResponse();
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        if (this.chartRef?.nativeElement) {
          this.renderChart(data);
          this.cd.detectChanges();
        }
      })
    }
    /*if (data?.labels?.length > 0) {
      this.renderChart(data);
    }*/
  }
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cd: ChangeDetectorRef
  ) {
    // 👇 reaccionamos cuando el input cambia
    effect(() => {
      const data = this.dataIndicadorResponse();
      if (this.chartRef && data?.labels?.length > 0) {
        this.renderChart(data);
      }
    });
  }


  private renderChart(data: IndicadoresResponse) {
    if (this.chart) {
      this.chart.destroy(); // 👈 destruir gráfico anterior para evitar duplicados
    }
    const colors = this.generateRandomColors(data.labels.length);
    const colors2 = this.generateRandomColors(data.labels.length);    
    const colors3 = this.generateRandomColors(data.labels.length);

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'atendidos establecimiento de salud',
          data: data.atendidosEess,
          backgroundColor: colors.background,
          borderColor: colors.border,
          borderWidth: 3,
          hoverBackgroundColor: colors.border,
        }, {
          label: 'atenciones servicios',
          data: data.atencionesServ,
          backgroundColor: colors2.background,
          borderColor: colors2.border,
          borderWidth: 3,
          hoverBackgroundColor: colors2.border,
        },{
          label: 'atendidos servicios',
          data: data.atendidosServ,
          backgroundColor: colors3.background,
          borderColor: colors3.border,
          borderWidth: 3,
          hoverBackgroundColor: colors3.border,
          hidden:true
        }

      ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            display: true,
            labels: {
              color: 'rgb(8,8,8,8)',
              font: {
                size: 14
              },
              usePointStyle: true,
              padding: 20
            }

          },
          title: {
            display: true,
            text: "INDICADORES",
            font: {
              size: 16,
              weight: 'bold'
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },

          
        }
      },
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
    const url = this.chartRef.nativeElement.toDataURL('image/png', 1.0);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grafico.png';
    a.click();
  }

}
