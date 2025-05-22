import { Instagram, Linkedin, Mail, MapPin, Twitter, } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open to new opportunities — let’s connect and explore how we can work together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="space-y-8 max-w-md mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6 pb-2">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="pl-7">
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:regismak88@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    regismak88@gmail.com
                  </a>
                </div>
              </div>
      
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a 
                  href="https://maps.app.goo.gl/8fwmCUXPkHN8x1nPA"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    San Francisco Bay Area, CA, USA
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me !</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/regismak/" target="_blank">
                  <Linkedin />
                </a>

                <a href="https://www.instagram.com/wegisoutside/" target="_blank">
                  <Instagram />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};