import { useState } from 'react';
import { class9Summaries } from './content/class9Summaries';
import { BookOpen, Heart, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Language = 'en' | 'hi';

function App() {
  const [language, setLanguage] = useState<Language>('en');

  const scrollToSubject = (subjectId: string) => {
    const element = document.getElementById(subjectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/assets/generated/study-vibes-logo.dim_512x512.png" 
              alt="Study Vibe Logo" 
              className="h-12 w-12 rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Study Vibe
              </h1>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Your Complete Study Companion' : 'आपका संपूर्ण अध्ययन साथी'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Languages className="h-4 w-4" />
              {language === 'en' ? 'हिंदी' : 'English'}
            </Button>
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden border-b border-border/40">
        <div className="relative h-48 md:h-64">
          <img 
            src="/assets/generated/study-vibes-hero.dim_1600x600.png" 
            alt="Study Vibe Hero" 
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        </div>
      </div>

      {/* Quick Navigation */}
      <nav className="sticky top-20 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {class9Summaries.map((subject) => (
              <button
                key={subject.id}
                onClick={() => scrollToSubject(subject.id)}
                className="whitespace-nowrap rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-all hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {subject.title[language]}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {class9Summaries.map((subject) => (
            <article
              key={subject.id}
              id={subject.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
            >
              {/* Subject Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted">
                <img 
                  src={subject.image}
                  alt={subject.imageAlt[language]}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-card-foreground">
                    {subject.title[language]}
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {subject.content[language].split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-3 leading-relaxed last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-border/40 bg-muted/30 px-6 py-3">
                <p className="text-xs text-muted-foreground">
                  {language === 'en' ? 'Class 9' : 'कक्षा 9'} • {subject.title[language]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border/40 bg-muted/30">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026. Built with <Heart className="inline h-4 w-4 fill-primary text-primary" /> using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
