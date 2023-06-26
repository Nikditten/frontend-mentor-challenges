'use client';

import { useState } from 'react';
import Input from './components/Input';
import { NextPage } from 'next';
import IconButton from './components/IconButton';
import ResultText from './components/ResultText';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

const AgeCalculatorApp: NextPage = () => {
  interface datesSchema {
    day: number | undefined;
    month: number | undefined;
    year: number | undefined;
  }

  const initValues: datesSchema = {
    day: undefined,
    month: undefined,
    year: undefined,
  };

  const validation = Yup.object().shape({
    day: Yup.number()
      .required('This field is required')
      .max(31, 'Not valid date')
      .min(1, 'Not valid date'),
    month: Yup.number()
      .required('This field is required')
      .max(12, 'Not valid month')
      .min(1, 'Not valid month'),
    year: Yup.number()
      .required('This field is required')
      .max(moment().year(), "It can't be in the future!"),
  });

  const [timeSince, setTimeSince] = useState<datesSchema>();

  const onSubmit = (day: number, month: number, year: number) => {
    const dob = moment([year, month - 1, day]);
    const today = moment();

    const years = dob.diff(today, 'year');
    today.add(years, 'years');

    const months = dob.diff(today, 'months');
    today.add(months, 'months');

    const days = dob.diff(today, 'days');

    setTimeSince({
      day: Math.abs(days),
      month: Math.abs(months),
      year: Math.abs(years),
    });
  };

  return (
    <main className="h-screen w-screen bg-[#F0F0F0] flex justify-center items-center">
      <div className="h-[425px] md:h-[550px] w-[90%] sm:w-[500px] md:w-[650px] bg-white rounded-t-2xl rounded-bl-2xl rounded-br-[100px] md:rounded-br-[200px] p-8 flex flex-col items-center gap-3">
        <Formik
          initialValues={initValues}
          validationSchema={validation}
          onSubmit={(values, actions) => {
            onSubmit(values.day!, values.month!, values.year!);
            actions.setSubmitting(false);
          }}
        >
          <Form className="w-full">
            <div className="w-full h-24 flex flex-row justify-start items-start gap-4">
              <Input key="day" name="day" />
              <Input key="month" name="month" />
              <Input key="year" name="year" />
            </div>

            <div className="w-full flex flex-row items-center">
              <span className="h-[0.5px] w-full bg-gray-400/25" />
              <IconButton />
              <span className="h-[0.5px] w-full bg-gray-400/25 md:hidden" />
            </div>
          </Form>
        </Formik>

        <div className="w-full">
          <ResultText label="years" value={timeSince?.year} />
          <ResultText label="months" value={timeSince?.month} />
          <ResultText label="days" value={timeSince?.day} />
        </div>
      </div>
    </main>
  );
};

export default AgeCalculatorApp;
