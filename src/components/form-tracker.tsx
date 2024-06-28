import { ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { useMultiFormContext } from './multi-step-form';

export const FormTracker = () => {
  const { steps, goTo, activeStep } = useMultiFormContext();
  return (
    <div className='flex gap-2 lg:gap-4   justify-center'>
      {steps.map((e, index) => (
        <div
          onClick={() => {
            goTo(index);
          }}
          key={e.title}
          className='flex items-center gap-2 lg:gap-4'
        >
          <div className={cn(index === 0 ? 'hidden' : 'block')}>
            <ArrowRight
              className={cn(
                activeStep === index ? 'text-indigo-600' : 'text-gray-600'
              )}
            />
          </div>
          <div className='flex flex-col xl:flex-row  gap-2 lg:gap-4 items-center  '>
            <div
              className={cn(
                'size-6 sm:size-8 lg:size-12 flex items-center justify-center rounded-full text-sm sm:text-lg lg:text-xl font-medium',
                activeStep === index
                  ? 'hidden lg:flex bg-indigo-100 border border-indigo-400 text-indigo-600'
                  : 'bg-transparent border border-gray-400 text-gray-600'
              )}
            >
              {index + 1}
            </div>
            <div
              className={cn(
                'text-center xl:text-left',
                activeStep !== index && 'hidden lg:block'
              )}
            >
              <h4
                className={cn(
                  'text-sm sm:text-base lg:text-lg font-medium truncate',
                  activeStep === index ? 'text-indigo-600' : 'text-gray-600'
                )}
              >
                {e.title}
              </h4>
              <p
                className={cn(
                  'text-xs sm:text-sm lg:text-base  truncate',
                  activeStep === index ? 'text-indigo-500' : 'text-gray-500'
                )}
              >
                {e.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
