import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo funciona la comparación de seguros?",
    answer:
      "Nuestro sistema analiza las ofertas de las principales aseguradoras en tiempo real basándose en tus datos y necesidades específicas. En cuestión de minutos, te presentamos las mejores opciones disponibles.",
  },
  {
    question: "¿Qué información necesito para cotizar?",
    answer:
      "Para obtener una cotización básica, necesitarás el número de placas de tu vehículo (o los datos del auto), tu edad y código postal. Para la cotización definitiva, se requerirán algunos datos adicionales.",
  },
  {
    question: "¿Es seguro contratar el seguro en línea?",
    answer:
      "Sí, totalmente. Trabajamos directamente con las aseguradoras y utilizamos sistemas de pago seguros. Además, recibirás tu póliza de manera inmediata por correo electrónico.",
  },
  {
    question: "¿Qué pasa si tengo un siniestro?",
    answer:
      "Tu póliza incluye asistencia 24/7. En caso de siniestro, puedes contactar directamente a tu aseguradora o llamarnos para orientarte en el proceso.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

