import DefaultLayout from '@/(components)/Layouts/DefaultLayout'
import AvailabilityTable from '@/(components)/availabilityTable/AvailabilityTable'
import Link from 'next/link'
import React from 'react'

export default function Availability() {
  return (
    <DefaultLayout>
        <h1 className="font-bold text-[25px]">Availabality</h1>
        <AvailabilityTable/>
      </DefaultLayout>
  )
}
