import { MultiStepForm } from './components/multi-step-form';
import { FormTracker } from './components/form-tracker';
import { stepsData } from './data/steps-data';

const App = () => {
  return (
    <div className='min-h-screen bg-indigo-50'>
      <div className='container border mx-auto py-12 sm:py-20'>
        <h1 className='text-center text-4xl sm:text-6xl lg:text-8xl font-bold text-indigo-600 mb-4 md:mb-10'>
          CV Maker
        </h1>
        <MultiStepForm steps={stepsData}>
          <FormTracker />
        </MultiStepForm>
      </div>
    </div>
  );
};

export default App;
