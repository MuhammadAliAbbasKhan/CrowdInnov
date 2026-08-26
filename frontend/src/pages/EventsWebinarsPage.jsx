import React from 'react';
import { Calendar, Video, MapPin, User, CheckCircle2 } from 'lucide-react';
import { MOCK_EVENTS } from '../data/mockData';
import { useToast } from '../components/ToastContext';

export const EventsWebinarsPage = () => {
  const { addToast } = useToast();

  const handleRegister = (title) => {
    addToast(`Successfully registered for '${title}'! Check your email for Zoom calendar invite.`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Live Community Events</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Events & Innovation Webinars</h1>
        <p className="text-slate-600 text-sm">Join global keynotes, challenge launch workshops, and solver office hours.</p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {MOCK_EVENTS.map((ev) => (
          <div key={ev.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <Calendar className="w-4 h-4 text-brand-navy" />
                <span>{ev.date} at {ev.time}</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">{ev.type}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{ev.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{ev.description}</p>
              <p className="text-xs font-semibold text-brand-navy">Featured Speaker: {ev.speaker}</p>
            </div>

            <button
              onClick={() => handleRegister(ev.title)}
              className="bg-brand-navy text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-brand-navyDark transition shrink-0 shadow-sm"
            >
              Reserve Seat Free
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const EventsWebinarsPageComponent = EventsWebinarsPage;
export default EventsWebinarsPage;
