import { Component, DestroyRef, computed, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { HotelsService } from '../../../shared/services';


@Component({
  selector: 'agent-hotels',
  templateUrl: './agent-hotels.component.html',
  styleUrl: './agent-hotels.component.scss'
})
export class AgentHotelsComponent {

  private hotelsService = inject(HotelsService)

  hotels = computed(() => this.hotelsService.agentHotels())

  constructor() {
    this.hotelsService.getAgentHotels()
      .pipe(takeUntilDestroyed())
      .subscribe()
  }

}
