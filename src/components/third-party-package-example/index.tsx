import { format } from 'date-fns';

export default function Example() {
  return  <div className="flex max-w-sm gap-x-4 rounded-xl bg-sky-200"><p>Using 'date-fns' package:</p> <time>{format(new Date(), 'MM/dd/yyyy')}</time></div>;
}
