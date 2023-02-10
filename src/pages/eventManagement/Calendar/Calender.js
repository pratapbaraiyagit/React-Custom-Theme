import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../../../utils/eventCalendar'

import styled from "@emotion/styled";

export const StyleWrapper = styled.div`
  .fc tr {
    text-align: center;
  }

  .fc .fc-toolbar-title{
    font-size: 14px;
  }

  .fc .fc-button{
    background-color: #F9F9FB;
    color: black;
    border: 0.1px solid gray;
    border-radius: 8px;
  }

  .fc .fc-button:hover{
    background-color: #FD9C40;
    border-color: #FD9C40;
    color: white;
  }

  .fc .fc-button-primary:not(:disabled).fc-button-active{
    background-color: #FD9C40;
    border-color: #FD9C40;
  }

  .fc .fc-daygrid-day-top{
    display: block;
    margin-top: 20px;
  }
`

const Calender = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true)
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }

  }

  const renderEventContent = (eventInfo) => {
    return (
      <div style={{ backgroundColor: '#EB9E1D' }} className='p-1'>
        <i className='text-center'>{eventInfo.event.title}</i><br />
        <b>{eventInfo.timeText}</b>
      </div>
    )
  }

  // const handleEventClick = (clickInfo) => {
  //     if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //         clickInfo.event.remove()
  //     }
  // }

  const handleEvents = (events) => {
    setCurrentEvents(events)

  }
  return (
    <div className='card shadow-sm p-3 me-3 bg-white rounded'>
      <h4>Calendar</h4>
      <StyleWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'title',
            right: 'prev next dayGridMonth timeGridWeek timeGridDay',
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}
          // eventClick={handleEventClick}
          eventsSet={handleEvents}
          height='auto'
        />
      </StyleWrapper>
    </div>
  )
}

export default Calender