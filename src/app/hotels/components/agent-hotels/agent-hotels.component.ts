import { Component, DestroyRef, computed, inject } from '@angular/core';

import { HotelsService } from '../../../shared/services';

import { Hotel } from '../../../shared/models';


@Component({
  selector: 'agent-hotels',
  templateUrl: './agent-hotels.component.html',
  styles: ''
})
export class AgentHotelsComponent {

  private hotelsService = inject(HotelsService)
  

  hotels = computed<Hotel[]>(() => this.hotelsService.agentHotels())


  constructor() {
    this.hotelsService.getAgentHotels().subscribe()
  }

}
