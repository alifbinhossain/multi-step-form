import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface IStep {
  title: string;
  description: string;
}

interface IFormContext<IValues> {
  activeStep: number;
  steps: IStep[];
  previousStep: () => void;
  nextStep: () => void;
  goTo: (step: number) => void;
  values: IValues;
  setValues: (values: IValues) => void;
  reset: () => void;
}

const FormContext = createContext<IFormContext<any>>({} as IFormContext<any>);

export function useMultiFormContext<IValues>() {
  const context = useContext<IFormContext<IValues>>(FormContext);

  if (!context || !Object.keys(context).length) {
    throw new Error('useFormContext can not be used outside the provider');
  }

  return context;
}

interface IProps {
  steps: IStep[];
  children: React.ReactNode;
}

export const MultiStepForm: React.FC<IProps> = ({ steps, children }) => {
  const totalSteps = steps.length;
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState<any>();

  const nextStep = useCallback(() => {
    if (activeStep >= totalSteps) {
      return;
    }
    setActiveStep((cur) => cur + 1);
  }, [activeStep, totalSteps]);

  const previousStep = useCallback(() => {
    if (activeStep === 0) return;
    setActiveStep((cur) => cur - 1);
  }, [activeStep]);

  const goTo = useCallback(
    (step: number) => {
      if (step < 0 || step > totalSteps) return;
      setActiveStep(step);
    },
    [totalSteps]
  );

  const reset = () => {
    setValues({});
  };

  const context = useMemo((): IFormContext<any> => {
    return {
      activeStep,
      goTo,
      nextStep,
      steps,
      previousStep,
      values,
      setValues,
      reset,
    };
  }, [activeStep, steps, goTo, previousStep, nextStep]);

  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  );
};
