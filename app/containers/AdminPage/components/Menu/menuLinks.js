const baseUrl = '/admin';

export const menuLinks = [
  {
    content: 'Dashboard',
    icon: 'home',
    iconColor: '#0f9aee',
    to: baseUrl,
  },
  {
    content: 'Email',
    icon: 'mail',
    iconColor: '#795548',
    to: baseUrl,
  },
  {
    content: 'Compose',
    icon: 'share-alt',
    iconColor: '#2196f3',
    to: baseUrl,
  },
  {
    content: 'Calender',
    icon: 'calendar',
    iconColor: '#ff5722',
    to: baseUrl,
  },
  {
    content: 'Chat',
    icon: 'wechat',
    iconColor: '#673ab7',
    to: baseUrl,
  },
  {
    content: 'Charts',
    icon: 'bar-chart',
    iconColor: '#3f51b5',
    to: baseUrl,
  },
  {
    content: 'Forums',
    icon: 'edit',
    iconColor: '#03a9f4',
    to: baseUrl,
  },
  {
    content: 'Tables',
    icon: 'table',
    iconColor: '#ff9800',
    subLinks: [
      {
        content: 'Basic Table',
        to: baseUrl,
      },
      {
        content: 'Data Table',
        to: baseUrl,
      },
    ],
  },
  {
    content: 'Maps',
    icon: 'environment',
    iconColor: '#9c27b0',
    to: baseUrl,
  },
];
