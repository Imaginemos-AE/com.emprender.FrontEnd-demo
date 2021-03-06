import { Credit } from './../../modules/credit-simulator.module';
export interface CurrencyValue {
  key: string;
  label: string | ((value: string) => string);
  subLabel?: string | ((credit: Credit) => string);
  tooltip?: string;
  space?: boolean;
}
export interface SliderConfig {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number | ((value: string) => number);
  labelType: 'currency' | 'day';
  formatter?: (value: number) => string;
  infoLabel: boolean;
}
export declare function termFormatter(value: any): string;
/**
 * variables
 */
export declare const DEFAULT_SLIDER_VALUES: Array<SliderConfig>;
export declare const DEFAULT_CURRENCY_VALUES: Array<CurrencyValue>;
export declare const CREDIT_DATA: Array<CurrencyValue>;
