import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-24 bg-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Get in touch with our team for inquiries, partnerships, or investment opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-neutral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Corporate Headquarters</h3>
                    <p className="text-neutral">
                      Blacksand Towers, 1 Energy Drive<br />
                      CBD, Abuja, Nigeria
                    </p>
                    <p className="text-neutral mt-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      info@blacksand.com
                    </p>
                    <p className="text-neutral">
                      <Phone className="w-4 h-4 inline mr-1" />
                      +234 9 461 5000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-neutral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">West Africa Operations</h3>
                    <p className="text-neutral">
                      Lagos & Port Harcourt, Nigeria
                    </p>
                    <p className="text-neutral mt-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      africa@blacksand.com
                    </p>
                    <p className="text-neutral">
                      <Phone className="w-4 h-4 inline mr-1" />
                      +234 1 270 5000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-neutral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Middle East</h3>
                    <p className="text-neutral">
                      Dubai, United Arab Emirates
                    </p>
                    <p className="text-neutral mt-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      middleeast@blacksand.com
                    </p>
                    <p className="text-neutral">
                      <Phone className="w-4 h-4 inline mr-1" />
                      +971 4 567 8900
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-neutral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Europe</h3>
                    <p className="text-neutral">
                      London, United Kingdom
                    </p>
                    <p className="text-neutral mt-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      europe@blacksand.com
                    </p>
                    <p className="text-neutral">
                      <Phone className="w-4 h-4 inline mr-1" />
                      +44 20 7123 4500
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-neutral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Americas</h3>
                    <p className="text-neutral">
                      Houston, Texas, USA
                    </p>
                    <p className="text-neutral mt-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      americas@blacksand.com
                    </p>
                    <p className="text-neutral">
                      <Phone className="w-4 h-4 inline mr-1" />
                      +1 713 456 7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-neutral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Asia-Pacific</h3>
                    <p className="text-neutral">
                      Singapore
                    </p>
                    <p className="text-neutral mt-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      apac@blacksand.com
                    </p>
                    <p className="text-neutral">
                      <Phone className="w-4 h-4 inline mr-1" />
                      +65 6789 0123
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Office Hours</h3>
              <div className="text-neutral space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM WAT</p>
                <p>Saturday: 9:00 AM - 2:00 PM WAT</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-clean"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-clean"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-clean"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none bg-clean"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-clean py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
