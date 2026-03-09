// C:\Users\Hope\Desktop\Project_package\mysite\src\components\Contact.tsx
import { Mail, MapPin, Phone, Send, Linkedin, Github, Facebook, MessageCircle, Code2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'sending'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'peterhope935@gmail.com',
      link: 'mailto:peterhope935@gmail.com',
      color: 'red'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 916 225 842',
      link: 'tel:+251916225842',
      color: 'green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: null,
      color: 'blue'
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      value: '@tesfa935',
      link: 'https://t.me/tesfa935',
      color: 'blue'
    }
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Tesfalegnp', label: 'GitHub', color: 'slate' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/developertesfalegn/', label: 'LinkedIn', color: 'blue' },
    { icon: Facebook, link: 'https://web.facebook.com/tesfalegn.petrosson', label: 'Facebook', color: 'blue' },
    { icon: MessageCircle, link: 'https://t.me/tesfa935', label: 'Telegram', color: 'blue' },
    { icon: Code2, link: 'https://leetcode.com/u/Tesfish-12/', label: 'LeetCode', color: 'orange' },
    { icon: Code2, link: 'https://codeforces.com/profile/Tesfalegn', label: 'CodeForces', color: 'red' }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900">
            Get In Touch
          </h2>
          <p className="text-center text-slate-600 mb-12 text-base sm:text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`bg-${item.color}-100 p-2 rounded-lg`}>
                          <Icon className={`text-${item.color}-600`} size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{item.label}</p>
                          {item.link ? (
                            <a
                              href={item.link}
                              target={item.link.startsWith('http') ? '_blank' : undefined}
                              rel="noopener noreferrer"
                              className="text-slate-900 hover:text-purple-600 font-medium text-sm sm:text-base break-all"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-slate-900 font-medium text-sm sm:text-base">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  Social Profiles
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center gap-1 p-3 bg-${social.color}-50 rounded-lg hover:bg-${social.color}-100 transition-colors group`}
                        title={social.label}
                      >
                        <Icon className={`text-${social.color}-600 group-hover:scale-110 transition-transform`} size={20} />
                        <span className="text-xs text-slate-600 truncate w-full text-center">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100">
                <h4 className="font-semibold text-slate-900 mb-3">Open to Opportunities</h4>
                <p className="text-slate-700 text-sm">
                  I'm currently open to new opportunities in AI Engineering, Machine Learning,
                  and Full Stack Development. Let's build something amazing together!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6 text-slate-900">
                  Send Me a Message
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${
                      status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    <Send size={20} />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm animate-fade-in">
                      ✓ Thank you for your message! I'll get back to you soon.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm animate-fade-in">
                      ✗ Something went wrong. Please try again or contact me directly via email.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}