/**
 * Contact Page - Mulyam Jewels
 *
 * URL: /contact
 *
 * How customers reach you:
 * - WhatsApp (primary for orders)
 * - Instagram DM
 * - Contact form (inquiries) → Connected to Formspree
 *
 * Form submissions go to Formspree and you receive an email notification.
 */

'use client'; // Required for useState (form submission state)

import Link from 'next/link';
import { useState, FormEvent } from 'react';

/**
 * Contact methods data
 */
const contactMethods = [
  {
    name: 'WhatsApp',
    description: 'Fastest way to order',
    value: '+91 XXXXX XXXXX',
    href: 'https://wa.me/91XXXXXXXXXX',
    icon: '💬',
    cta: 'Chat Now',
  },
  {
    name: 'Instagram',
    description: 'DM us to order',
    value: '@Mulyam_jewels',
    href: 'https://instagram.com/Mulyam_jewels',
    icon: '📸',
    cta: 'Send DM',
  },
  {
    name: 'Email',
    description: 'For business inquiries',
    value: 'hello@mulyam.in',
    href: 'mailto:hello@mulyam.in',
    icon: '✉️',
    cta: 'Send Email',
  },
];

export default function ContactPage() {
  /**
   * Form submission states:
   * - 'idle': Form ready to submit
   * - 'submitting': Form is being sent
   * - 'success': Form submitted successfully
   * - 'error': Something went wrong
   */
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  /**
   * Handle form submission
   * Uses fetch to submit to Formspree without page redirect
   */
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent default form redirect
    setFormStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      // Send to Formspree
      const response = await fetch('https://formspree.io/f/mwvkvoon', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset(); // Clear the form
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 py-16 bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-500">
              <li>
                <Link href="/" className="hover:text-neutral-900">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900">Contact</li>
            </ol>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900">
            Get in Touch
          </h1>

          <p className="mt-4 text-neutral-600 max-w-xl mx-auto">
            Have a question or ready to order? We're here to help!
            Reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-neutral-50 rounded-2xl text-center hover:bg-neutral-100 transition-colors"
              >
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {method.icon}
                </div>

                {/* Name */}
                <h3 className="text-lg font-medium text-neutral-900">
                  {method.name}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm text-neutral-500">
                  {method.description}
                </p>

                {/* Value */}
                <p className="mt-3 text-brand font-medium">
                  {method.value}
                </p>

                {/* CTA */}
                <span className="inline-block mt-4 text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                  {method.cta} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="px-6 py-16 bg-neutral-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
              Place an Order
            </h2>
            <p className="mt-3 text-neutral-600">
              Fill out the form below and we'll get back to you on WhatsApp within 2 hours.
            </p>
          </div>

          {/* Success Message - Shows after form is submitted */}
          {formStatus === 'success' ? (
            <div className="text-center py-12 px-6 bg-green-50 rounded-2xl">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-medium text-green-800">
                Message Sent!
              </h3>
              <p className="mt-2 text-green-700">
                Thank you for reaching out. We'll contact you on WhatsApp within 2 hours.
              </p>
              <button
                onClick={() => setFormStatus('idle')}
                className="mt-6 text-sm text-green-700 hover:text-green-900 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            /* Order Form - Connected to Formspree */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                />
              </div>

              {/* Email - Required for Formspree */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                />
              </div>

              {/* City & Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    placeholder="Your city"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Pincode *
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    required
                    placeholder="XXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  />
                </div>
              </div>

              {/* Category Interest */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Interested In *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors bg-white"
                >
                  <option value="">Select category</option>
                  <option value="pets">Pet Jewelry</option>
                  <option value="women">Women's Jewelry</option>
                  <option value="kids">Kids' Jewelry</option>
                  <option value="matching">Matching Sets (Pet + Owner)</option>
                  <option value="multiple">Multiple Categories</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what you're looking for, any specific products, or questions you have..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors resize-none"
                />
              </div>

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">
                  Something went wrong. Please try again or contact us via WhatsApp.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide rounded-full hover:bg-neutral-800 transition-colors disabled:bg-neutral-400 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Note */}
              <p className="text-xs text-neutral-500 text-center">
                By submitting, you agree to be contacted via WhatsApp.
                We typically respond within 2 hours during business hours.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-light text-neutral-900">
            Have Questions?
          </h2>
          <p className="mt-3 text-neutral-600">
            Check out our frequently asked questions for quick answers about
            shipping, returns, and sizing.
          </p>
          <Link
            href="/faq"
            className="inline-block mt-6 text-sm text-brand hover:text-brand-dark transition-colors"
          >
            View FAQs →
          </Link>
        </div>
      </section>
    </main>
  );
}