import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { filter, map } from 'rxjs/operators';
// import { checkServerIdentity } from 'tls';

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit () {

    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map(route => {
        while (route.firstChild) { route = route.firstChild }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {

        const snapshot = this.router.routerState.snapshot;
        this.breadcrumbs = [];
        const url = snapshot.url;
        const routeData = route.snapshot.data;

        console.log(routeData);

        const label = routeData.breadcrumb;
        const params = snapshot.root.params;

        const crumb:IBreadcrumb = {
          url,
          label,
          params
        };

        this.breadcrumbs.push(crumb);

      });

  }

}
