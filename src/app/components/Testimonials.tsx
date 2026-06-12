const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Royal Kingdope',
    quote: 'Matthew transformed our digital presence with exceptional user experience design. The results exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    company: 'Microsoft Solutions',
    quote: 'Outstanding attention to detail and creative problem-solving. A true professional who delivers on time.',
  },
  {
    name: 'Emma Davis',
    company: 'Nvidia Graphics',
    quote: 'Working with Matthew was seamless. His designs significantly improved our user engagement metrics.',
  },
  {
    name: 'David Rodriguez',
    company: 'Apple Inc.',
    quote: 'Impressive portfolio and even better execution. Matthew brings both creativity and strategic thinking to every project.',
  },
  {
    name: 'Lisa Anderson',
    company: 'Reindeer Hub',
    quote: 'The UI/UX work delivered measurable business results. Highly recommend for any digital product design needs.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4">What Clients Say</h2>
        <p className="text-muted-foreground mb-12">
          Trusted by professionals at leading companies
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg"
            >
              <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
              <div>
                <p>{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
