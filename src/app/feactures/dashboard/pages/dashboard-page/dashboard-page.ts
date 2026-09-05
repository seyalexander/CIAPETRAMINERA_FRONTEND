import { Component } from '@angular/core';
import { AppStatswidget } from '../../components/app-statswidget/app-statswidget';
import { AppRecentsaleswidget } from '../../components/app-recentsaleswidget/app-recentsaleswidget';
import { AppBestsellingwidget } from '../../components/app-bestsellingwidget/app-bestsellingwidget';
import { AppRevenuestreamwidget } from '../../components/app-revenuestreamwidget/app-revenuestreamwidget';
import { AppNotificationswidget } from '../../components/app-notificationswidget/app-notificationswidget';
import { AppBienvenida } from "../../components/app-bienvenida/app-bienvenida";


@Component({
  selector: 'app-dashboard-page',
  imports: [AppStatswidget, AppRecentsaleswidget, AppBestsellingwidget, AppRevenuestreamwidget, AppNotificationswidget, AppBienvenida],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {}
