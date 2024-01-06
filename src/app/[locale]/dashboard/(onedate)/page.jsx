import pick from 'lodash/pick';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {useTranslations} from 'next-intl';
import { DatePicker } from '@/app/ui/dashboard/datepicker';
import { AccordionImages } from '@/app/ui/dashboard/accordionimages';
import { DetailsPanel } from '@/app/ui/dashboard/detailspanel';

const Page = () => {
  // Important for translations
  const t = useTranslations('Dash');
  const messages = useMessages();

  return (
    <div className='w-full h-screen flex flex-col md:p-2'>
        <div id="nav" className="w-full h-fit flex flex-col mb-4 md:flex-row md:justify-between md:items-center">
            <div id="titleContainer">
                <h1 id='titleOneDate' className='text-3xl text-on-background dark:text-on-background-dark'>{t('title')}</h1>
            </div>
            <div id="dateContainer" className='flex mt-2 md:mt-0'>
                <DatePicker/>
            </div>
        </div>
        <AccordionImages title={t('titleImages')}/>
        <NextIntlClientProvider messages={pick(messages, 'Dash')}>
          <DetailsPanel />
        </NextIntlClientProvider>
    </div>
  )
}

export default Page