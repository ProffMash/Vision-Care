import React, { useState } from 'react';
import { Calendar, Clock, Check, ChevronRight, User, Phone } from 'lucide-react';

const Appointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    date: '',
    time: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  if (submitted) {
    return (
      <section id="appointment" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Appointment Scheduled!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for choosing VisionCare. We'll contact you shortly to confirm your appointment.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Book an Appointment</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex">
          {/* Left Content */}
          <div className="w-1/2 p-8 bg-gray-100">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
            <p className="text-gray-600 mb-4">
              At VisionCare, we provide the best eye care services with a team of experienced professionals.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Comprehensive eye exams</li>
              <li>Advanced diagnostic technology</li>
              <li>Personalized treatment plans</li>
              <li>Friendly and knowledgeable staff</li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="w-1/2 p-8">
            {/* Progress Indicator */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`flex items-center ${step >= num ? 'text-blue-600' : 'text-gray-400'}`}>
                    {step > num ? (
                      <Check size={20} className="shrink-0" />
                    ) : (
                      <span className="font-medium text-sm">{num}</span>
                    )}
                    {num !== 3 && <ChevronRight size={20} className="mx-2" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                      <User size={18} className="text-gray-500" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                      <Phone size={18} className="text-gray-500" />
                      <span>Contact Number</span>
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="+1 (555) 000-0000"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                      <Calendar size={18} className="text-gray-500" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                      <Clock size={18} className="text-gray-500" />
                      <span>Preferred Time</span>
                    </label>
                    <input
                      type="time"
                      name="time"
                      className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center">
                  <p className="text-lg font-medium mb-6">Review your appointment details:</p>
                  <div className="space-y-4 text-left max-w-md mx-auto">
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>Contact:</strong> {formData.contactNumber}</p>
                    <p><strong>Date:</strong> {formData.date}</p>
                    <p><strong>Time:</strong> {formData.time}</p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-6 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition duration-200"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition duration-200"
                  >
                    Confirm Appointment
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;