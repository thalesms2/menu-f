import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from 'react-select';
import { useLazyPostReservationQuery } from '../services/api';
import { formSchema, options } from '../utils/reservation-data';
import { selectTheme } from "../utils/select-theme";
import type { z } from 'zod';
import type { IFormResult, IReservation } from '../types/reservation';

export default function ReservationPage() {
  const [trigger, result] = useLazyPostReservationQuery();
  const { register, handleSubmit, formState: { errors }, control, watch, reset, setError, clearErrors } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const errorStyle = 'text-[#f70000] text-sm';
  const onSubmit = (data: IFormResult) => {
    const reservation: IReservation = { 
      name: data.name,
      persons: data.persons,
      date: `${data.date}:${data.time}`,
    }
    trigger(reservation)
    reset();
  };
  useEffect(() => {
    const [date, time] = watch(['date', 'time'])
    if(date.length < 1)
      return
    if(time.length < 1)
      return
    const dateTime = new Date(`${date}:${time}`)
    if(dateTime < new Date(Date.now())) {
      setError('date', {
        type: 'custom',
        message: 'Data inválida'
      })
      setError('time', {
        type: 'custom',
        message: 'Horário inválido'
      })
    } else {
      clearErrors()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, watch(['date', 'time']))
  return(
    <section className="flex flex-col justify-center items-center h-[80vh]">
      
      {result.isSuccess ? <h2 className="my-2 text-green-400">Reserva feita!</h2> : <h2 className="my-2">Faça a sua reserva!</h2>}
      <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col w-[400px] p-5 border border-slate-600 rounded-md ">
        <input 
          className="dark:text-white dark:bg-slate-800 border border-slate-600 p-1 rounded-md px-2" 
          placeholder="Nome" 
          {...register("name", { required: true })} 
        />
        {errors.name?.message && <p className={errorStyle}>{errors.name?.message}</p>}
        <Controller 
          control={control}
          name="persons"
          render={({ field: { onChange, value } }) => (
            <Select 
              className={"react-select, mt-2"}
              classNamePrefix={"react-select"}
              placeholder={"Pessoas"} 
              value={options.find(c => c.value === value)}
              onChange={val => onChange(val?.value)}
              options={options}
              theme={selectTheme}
            />
          )}
        />
        <input 
          className="dark:text-white dark:bg-slate-800 border border-slate-600 p-1 rounded-md mt-2" 
          placeholder="Data" 
          type="date" 
          {...register("date", { required: true })}
        />
        {errors.date?.message && <p className={errorStyle}>{errors.date?.message}</p>}
        <input 
          className="dark:text-white dark:bg-slate-800 border border-slate-600 p-1 rounded-md mt-2" 
          placeholder="Horário" 
          type="time" 
          {...register("time", { required: true })}
        />
        {errors.time?.message && <p className={errorStyle}>{errors.time?.message}</p>}
        <input
          type="submit"
          disabled={result.isLoading}
          value={result.isLoading ? "Enviando reserva..." : "Reservar"}
          className="text-black p-2 rounded-md font-bold transition-colors hover:bg-white/80 bg-white disabled:bg-slate-500 disabled:hover:bg-slate-500 mt-2"
        />
      </form>
    </section>
  )
}