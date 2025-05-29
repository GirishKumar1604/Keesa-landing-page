import { useState, useEffect, FormEvent } from 'react';

interface WaitlistFormProps {
  visible: boolean;
  onClose: () => void;
}

export default function WaitlistForm({ visible, onClose }: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);

  // Auto-close logic
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;;
    if (submitted) {
      timeout = setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500); // Close after 2.5s
    }
    return () => clearTimeout(timeout);
  }, [submitted, onClose]);

  if (!visible) return null;

  // Form submission handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      body: formData,
    })
      .then(() => setSubmitted(true))
      .catch(() => alert('Something went wrong. Please try again!'));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl hover:text-pink-400 transition"
        >
          &times;
        </button>

        {!submitted ? (
          <form
            name="waitlist"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-5 text-white"
          >
            <input type="hidden" name="form-name" value="waitlist" />

            <h2 className="text-xl font-semibold text-center">Join the waitlist</h2>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            />

            <select
              name="intent"
              required
              className="w-full px-5 py-3 rounded-lg bg-black border border-white/20 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            >
              <option value="">What would you love Keesa to help with?</option>
              <option value="track_spending">Track where my money flows</option>
              <option value="fraud_alerts">Get notified about fraud or missed bills</option>
              <option value="product_recommendation">Get the best credit cards and loans for me</option>
              <option value="effortless_money">Make managing money feel effortless</option>
            </select>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg tracking-wide hover:opacity-90 transition"
            >
              Join waitlist
            </button>
          </form>
        ) : (
          <div className="text-center text-white py-12 space-y-3">
            <h2 className="text-2xl font-bold">You’re early. We like that.</h2>
            <p className="text-sm opacity-80">We’ll notify you as soon as Keesa is ready.</p>
            <p className="text-xs text-white/60">Closing in 2 seconds...</p>
          </div>
        )}
      </div>
    </div>
  );
}
