import { Eye, Glasses, Calendar, Award, Users, Heart, Shield, Clock } from 'lucide-react';
import Appointment from './components/Appointments';
import Contact from './components/contac';
import Navbar from './components/navbar';
import Footer from './components/footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Eye examination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Vision, Our Priority
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Experience exceptional eye care with our team of expert optometrists. 
              We provide comprehensive vision services using state-of-the-art technology.
            </p>
            <a
              href="#appointment"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Modern eye clinic"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Leading Eye Care Specialists Since 2003</h2>
              <p className="text-lg text-gray-600">
                At VisionCare, we've been dedicated to providing exceptional eye care services for over two decades. Our commitment to excellence and patient care has made us a trusted name in optical health.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Patient-Centered</h3>
                    <p className="text-sm text-gray-500">Personalized care for every patient</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Certified Experts</h3>
                    <p className="text-sm text-gray-500">Board-certified optometrists</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Award-Winning</h3>
                    <p className="text-sm text-gray-500">Recognized for excellence</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Convenient Hours</h3>
                    <p className="text-sm text-gray-500">Flexible scheduling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eye Examinations</h3>
              <p className="text-gray-600">Comprehensive eye health and vision assessments</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Glasses className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eyewear Fitting</h3>
              <p className="text-gray-600">Premium frames and precision lens fitting</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Lenses</h3>
              <p className="text-gray-600">Expert contact lens fitting and follow-up care</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vision Therapy</h3>
              <p className="text-gray-600">Specialized treatments for vision problems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Our experienced optometrists provide personalized care tailored to your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">We use the latest diagnostic equipment for accurate eye examinations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calendar className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Convenient Care</h3>
              <p className="text-gray-600">Flexible scheduling and comprehensive eye care services under one roof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <Appointment />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;