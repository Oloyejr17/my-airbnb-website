import ServiceCard from "@/components/ServiceCard";
import { mockServices, Service } from "@/data/services";

export default function ServicesPage() {
  // Group services by category
  const categories = Array.from(new Set(mockServices.map((s) => s.category)));

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      <h1 className="text-2xl font-bold mb-6">Services</h1>

      {categories.map((category) => {
        const services = mockServices.filter((s) => s.category === category);
        return (
          <section key={category}>
            <h2 className="text-xl font-semibold mb-6">{category}</h2>
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {services.map((service: Service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
