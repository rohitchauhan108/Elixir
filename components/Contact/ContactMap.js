export default function ContactMap() {
  return (
    <div className="flex flex-col rounded-xl bg-white p-6 shadow-lg sm:p-8">
      <h2 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
        Find Us on the Map
      </h2>
      <p className="mb-6 text-gray-600">
        Visit our office or contact us for medical and product inquiries.
      </p>
      <div className="min-h-[320px] flex-1 overflow-hidden rounded-lg shadow-sm">
        <iframe
          title="Elixir Far LLP office location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4869.602717531469!2d78.0570384271522!3d30.341595478149163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929d43ab92d57%3A0x128eb697c057ec78!2sParsvnath%20Complex!5e0!3m2!1sen!2sin!4v1767008926784!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full min-h-[320px] w-full border-0"
        />
      </div>
    </div>
  );
}
