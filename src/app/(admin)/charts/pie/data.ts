import { ApexOptions } from 'apexcharts'
import small1 from '@/assets/images/small/small-1.jpg'
import small2 from '@/assets/images/small/small-2.jpg'
import small3 from '@/assets/images/small/small-3.jpg'
import small4 from '@/assets/images/small/small-4.jpg'

export const simplePieChartOpts: ApexOptions = {
  chart: {
    height: 320,
    type: 'pie',
  },
  series: [44, 55, 41, 17, 15],
  labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
  colors: ['#727cf5', '#6c757d', '#0acf97', '#fa5c7c', '#e3eaef'],
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    // verticalAlign: 'middle',
    floating: false,
    fontSize: '14px',
    offsetX: 0,
    offsetY: 7,
  },
}

export const simpleDonutChartOpts: ApexOptions = {
  chart: {
    height: 320,
    type: 'donut',
  },
  series: [44, 55, 41, 17, 15],
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    // verticalAlign: 'middle',
    floating: false,
    fontSize: '14px',
    offsetX: 0,
    offsetY: 7,
  },
  labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
  colors: ['#39afd1', '#ffbc00', '#313a46', '#fa5c7c', '#0acf97'],
}

export const monochromePieChartOpts: ApexOptions = {
  chart: {
    height: 320,
    type: 'pie',
  },
  series: [25, 15, 44, 55, 41, 17],
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    // verticalAlign: 'middle',
    floating: false,
    fontSize: '14px',
    offsetX: 0,
    offsetY: 7,
  },
  theme: {
    monochrome: {
      enabled: true,
    },
  },
}

export const gradientDonutChartOpts: ApexOptions = {
  chart: {
    height: 320,
    type: 'donut',
  },
  series: [44, 55, 41, 17, 15],
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    // verticalAlign: 'middle',
    floating: false,
    fontSize: '14px',
    offsetX: 0,
    offsetY: 7,
  },
  labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
  colors: ['#727cf5', '#6c757d', '#0acf97', '#fa5c7c', '#e3eaef'],

  fill: {
    type: 'gradient',
  },
}

export const patternedDonutChartOpts: ApexOptions = {
  chart: {
    height: 320,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    show: true,
    width: 2,
  },
  series: [44, 55, 41, 17, 15],
  colors: ['#39afd1', '#ffbc00', '#313a46', '#fa5c7c', '#0acf97'],
  labels: ['Comedy', 'Action', 'SciFi', 'Drama', 'Horror'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8,
    },
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      // enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      // enabled: false
    },
  },
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    // verticalAlign: 'middle',
    floating: false,
    fontSize: '14px',
    offsetX: 0,
    offsetY: 7,
  },
}

export const imagePieChartOpts: ApexOptions = {
  chart: {
    height: 320,
    type: 'pie',
  },
  labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4'],
  colors: ['#39afd1', '#ffbc00', '#727cf5', '#0acf97'],
  series: [44, 33, 54, 45],
  fill: {
    type: 'image',
    opacity: 0.85,
    image: {
      src: [small1, small2, small3, small4],
      width: 25,
      // imagedHeight: 25
    },
  },
  stroke: {
    width: 4,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    // verticalAlign: 'middle',
    floating: false,
    fontSize: '14px',
    offsetX: 0,
    offsetY: 7,
  },
}

export const donutUpdateOpts: ApexOptions = {
  chart: {
    height: 320,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },
  series: [44, 55, 13, 33],
  colors: ['#727cf5', '#6c757d', '#0acf97', '#fa5c7c'],
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    // verticalAlign: "middle",
    floating: false,
    fontSize: '14px',
    offsetX: 0,
    offsetY: 7,
  },
}
