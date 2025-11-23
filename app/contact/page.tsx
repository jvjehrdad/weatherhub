'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form Data:', data);
      
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Send us a message
            </h2>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Name"
                type="text"
                placeholder="John Doe"
                error={errors.name?.message}
                required
                {...register('name')}
              />

              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                error={errors.email?.message}
                required
                {...register('email')}
              />

              <Input
                label="Phone (Optional)"
                type="tel"
                placeholder="+1 (555) 123-4567"
                error={errors.phone?.message}
                helperText="Include country code for international numbers"
                {...register('phone')}
              />

              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us what you're thinking..."
                  className={`
                    w-full px-4 py-2 rounded-lg border
                    bg-white dark:bg-gray-800
                    text-gray-900 dark:text-gray-100
                    placeholder-gray-400 dark:placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-200
                    ${errors.message 
                      ? 'border-red-500 dark:border-red-400 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600'
                    }
                  `}
                  {...register('message')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    ✓ Message sent successfully! We'll be in touch soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    ✗ Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => reset()}
                  disabled={isSubmitting}
                >
                  Reset
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

