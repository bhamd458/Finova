export default function Contact() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Get in Touch</h2>
      <p className="text-center mb-4">Sign up for updates or reach out with investment inquiries.</p>
      <div className="flex justify-center">
        <iframe
          src="https://your-hubspot-form-link"
          width="100%"
          height="500"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
}
