import { createFileRoute } from '@tanstack/react-router'
import AppointmentCalendar from './-AppointmentsCalendar'

export const Route = createFileRoute('/admin/role-staff/_role-staff-layout/appointments/')({
  component: () => <Appointments/>
})

function Appointments(){
  return (
    <div className='flex flex-col flex-1 p-6 overflow-auto text-main_primary'>
      <AppointmentCalendar/>
    </div>
  )
}