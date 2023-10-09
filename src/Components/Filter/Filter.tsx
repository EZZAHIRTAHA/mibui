import {Filter as FilterType, FilterProps} from './Filter.types.ts';
import Compound from './Filter.Compound.tsx';
import Property from './Filter.Property.tsx';
import {FormikProvider, useFormik} from 'formik';
import {twMerge} from 'tailwind-merge';
import {useEffect} from 'react';


const Filter = <T extends {}>({value, onChange, defaultProperty, className}: FilterProps<T>) => {
  const formik = useFormik<FilterType<T>>({
    initialValues: value,
    onSubmit: () => {

    }
  });
  const {values} = formik;

  useEffect(()=>{
    onChange(value)
  }, [values])

  return (
    <FormikProvider value={formik}>
      <div className={twMerge('flex flex-col space-y-5', className)}>
        {'property' in values ?
          <Property filter={values}/> :
          <Compound
            name='filters'
            filter={values}
            defaultProperty={defaultProperty}
          />
        }
      </div>
    </FormikProvider>
  );
};

export default Filter;