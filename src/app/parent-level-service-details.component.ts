import { Component, Input } from '@angular/core';

import { ParentLevelService } from './parent-level-service';

@Component({
  selector: 'parent-level-service-details',
  templateUrl: 'parent-level-service-details.component.html'
})
export class ParentLevelServiceDetailsComponent {
  @Input() selected_parent_level_service = ParentLevelService;

}
