import { ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { useMultiFormContext } from './multi-step-form';

export const FormTracker = () => {
  const { steps, goTo, activeStep } = useMultiFormContext();
  return (
    <div className='flex gap-4 w-full justify-center'>
      {steps.map((e, index) => (
        <div
          onClick={() => {
            goTo(index);
          }}
          key={e.title}
          className='flex items-center gap-4'
        >
          <div className={cn(index === 0 ? 'hidden' : 'block')}>
            <ArrowRight
              className={cn(
                activeStep === index ? 'text-indigo-600' : 'text-gray-600'
              )}
            />
          </div>
          <div className='flex gap-4 items-center'>
            <div
              className={cn(
                'size-12 flex items-center justify-center rounded-full  text-xl font-medium',
                activeStep === index
                  ? 'bg-indigo-100 border border-indigo-400 text-indigo-600'
                  : 'bg-transparent border border-gray-400 text-gray-600'
              )}
            >
              {index + 1}
            </div>
            <div>
              <h4
                className={cn(
                  'text-lg font-medium ',
                  activeStep === index ? 'text-indigo-600' : 'text-gray-600'
                )}
              >
                {e.title}
              </h4>
              <p
                className={cn(
                  'text-base ',
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
