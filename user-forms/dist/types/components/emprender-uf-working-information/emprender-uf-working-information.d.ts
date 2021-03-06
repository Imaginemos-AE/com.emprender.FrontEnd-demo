import { EventEmitter } from '../../stencil-public-runtime';
import { WorkingInformation } from '../../module/models';
export declare class EmprenderUfWorkingInformation {
  model: WorkingInformation;
  viewRegistration: boolean;
  requiredData: string;
  infoSaved: EventEmitter<WorkingInformation>;
  back: EventEmitter<WorkingInformation>;
  upgradeInfo: EventEmitter<WorkingInformation>;
  _setModel(field: string, value: string): void;
  _checkSubmitInfo(): void;
  render(): any;
}
