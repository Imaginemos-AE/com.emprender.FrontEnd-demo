import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class EmprenderUserBiometricsResult implements ComponentInterface {
  continue: EventEmitter<string>;
  componentWillLoad(): Promise<void>;
  state: 'initial' | 'loading' | 'failure' | 'success';
  renderLoading(): HTMLElement;
  renderStatus(): any;
  render(): any;
}
