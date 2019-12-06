export const options = {
  selectedRegions: ['VN', 'US', 'AU', 'SA'],
  backgroundColor: 'white',
  zoomOnScroll: false,
  map: 'world_mill',
  hoverOpacity: 0.5,
  hoverColor: true,
  zoomStep: 2,
  containerStyle: {
    width: '100%',
    height: '100%',
  },
  containerClassName: 'map',
  regionStyle: {
    initial: {
      fill: '#e4ecef',
      'fill-opacity': 1,
    },
    selected: {
      fill: '#00a7f1',
      'fill-opacity': 1,
    },
  },
  markerStyle: {
    initial: {
      'stroke-opacity': 0.4,
      'stroke-width': 2,
      stroke: '#000',
      fill: 'white',
      r: 6.5,
    },
  },
  markers: [
    { latLng: [47.14, 9.52], name: 'Liechtenstein' },
    { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
    { latLng: [3.2, 73.22], name: 'Maldives' },
    { latLng: [35.88, 14.5], name: 'Malta' },
    { latLng: [12.05, -61.75], name: 'Grenada' },
    { latLng: [-4.61, 55.45], name: 'Seychelles' },
    { latLng: [7.35, 134.46], name: 'Palau' },
    { latLng: [42.5, 1.51], name: 'Andorra' },
    { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
  ],
};
