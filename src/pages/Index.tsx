import samuelAvatar from "@/assets/samuel-avatar.jpeg";
import sailingImage from "@/assets/sailing.png";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Linkedin } from "lucide-react";
const Index = () => {
  const interests = ["Entrepreneurship", "Health & Wellness", "Mental Health", "Ecology", "Education", "Personal Development", "AI", "Community Building"];
  return <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-background to-background" />
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-medium tracking-wide uppercase text-sm">
                  Entrepreneur & Innovator
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-serif">Hi, I'm Samuel</h1>
              </div>

              <div className="flex gap-6 items-start">
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed flex-1">
                  <p>
                    I founded{" "}
                    <a href="https://mosalingua.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors inline-flex items-center gap-1">
                      MosaLingua
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    , an EdTech company I bootstrapped from zero to{" "}
                    <span className="text-foreground font-semibold">
                      11 million app downloads
                    </span>{" "}
                    and a dozen online courses.
                  </p>
                  <p>
                    Now, I'm channeling my passion into new ventures that create
                    meaningful impact.
                  </p>
                </div>
                <div className="hidden sm:block flex-shrink-0">
                  <img src={sailingImage} alt="Samuel sailing - embracing adventure and exploration" className="w-32 lg:w-40 h-auto rounded-xl shadow-lg ring-1 ring-border" />
                </div>
              </div>

              {/* Current Projects */}
              <div className="pt-2">
                <p className="text-sm font-medium text-secondary mb-3">
                  Currently building:
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://asyncoaching.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      AsynCoaching
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </a>
                  <a href="https://myinnercenter.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      My Inner Center
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
                <a href="https://www.linkedin.com/in/smichelot/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">Contact me</span>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent rounded-2xl blur-xl opacity-60" />
                <img src={samuelAvatar} alt="Samuel Michelot - Entrepreneur and EdTech Founder" className="relative rounded-2xl shadow-xl w-full h-auto object-cover ring-1 ring-border" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-12 lg:py-16 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm font-medium text-secondary uppercase tracking-wide mb-4">
            Areas of Interest
          </h2>
          <div className="flex flex-wrap gap-2">
            {interests.map(interest => <Badge key={interest} variant="secondary" className="px-3 py-1.5 text-sm font-normal bg-accent text-accent-foreground hover:bg-accent/80 transition-colors">
                {interest}
              </Badge>)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-muted-foreground text-center">
            Building the future, one project at a time.
          </p>
        </div>
      </footer>
    </main>;
};
export default Index;