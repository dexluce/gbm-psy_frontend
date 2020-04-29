import { Injectable } from '@angular/core';
import { MeetingFragment } from 'src/generated/graphql';
import { environment } from 'src/environments/environment';

declare var JitsiMeetExternalAPI: any;

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor() { }

  getJitsiClient(meeting: MeetingFragment, el: HTMLElement) {
    return new JitsiMeetExternalAPI(environment.jitsiMeetApiUrl, {
      roomName: meeting.virtualAddress,
      jwt: meeting.jitsiMeetToken,
      noSSL: true,
      parentNode: el
    });
  }
}
