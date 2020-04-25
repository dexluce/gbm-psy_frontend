import { Injectable } from '@angular/core';
import { IAppService, AppDatatableOption, AppDatatableResponse } from '../core/type/app-service.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EventDto } from './dto/event.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService implements IAppService<EventDto> {

  constructor(private http: HttpClient) { }

  public getList(params: AppDatatableOption) {
    return this.http.get<AppDatatableResponse<EventDto>>(environment.backendUrl + '/event',
    {
      params: new HttpParams()
      .set('filter', params.filter)
      .set('sortBy', params.sortBy)
      .set('sortOrder', params.sortOrder)
      .set('pageNumber', params.pageNumber.toString())
      .set('pageSize', params.pageSize.toString())
    });
  }
}
