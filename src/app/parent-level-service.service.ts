import { Injectable } from '@angular/core';

import { ParentLevelService } from './parent-level-service';
import { PARENTLEVELSERVICES } from './mock-parent-level-services';

@Injectable()
export class ParentLevelServiceService {
  getParentLevelServices(): Promise<ParentLevelService[]> {
    return Promise.resolve(PARENTLEVELSERVICES);
  }
}
