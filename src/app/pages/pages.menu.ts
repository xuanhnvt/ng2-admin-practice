export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'areas',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Areas', // menu title
            icon: 'ion-ios-world-outline', // menu icon
            //pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 900
          }
        }
      },
      {
        path: 'banks',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Banks', // menu title
            icon: 'ion-cash', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 950
          }
        }
      },
      {
        path: 'posts',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Posts', // menu title
            icon: 'ion-share', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 955
          }
        }
      }
    ]
  }
];
