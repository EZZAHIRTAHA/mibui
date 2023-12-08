import {InputProps} from '../../../Forms/Input/Input.types.ts';
import {FieldProps, UseFieldProps, FieldSlotProps} from '../Field.types.tsx';

export type DatePickerFieldProps = InputProps & UseFieldProps

export type DatePickerFieldGroupProps = {
  slotProps?: {
    root?: FieldSlotProps<FieldProps>
    // input?: FieldSlotProps<InputFieldProps>
    input?: InputProps
  }
} & FieldProps