import {forwardRef} from 'react';
import {InputProps} from './Input.types.ts';
import {UnstyledInput} from './index.ts';
import {twMerge} from 'tailwind-merge';
import {useSizing} from '../../hooks/UseSizing.ts';
import {useInputStyles} from '../../hooks/UseInputStyles.ts';


const Input = forwardRef<HTMLInputElement, InputProps>(({className, size, ...props}, ref) => {
  const sizing = useSizing(size);
  const inputStyles = useInputStyles(props);

  return (
    <UnstyledInput
      ref={ref}
      className={twMerge(
        inputStyles.className,
        sizing.padding,
        sizing.text,
        className
      )}
      {...props}
    />
  )
})

export default Input