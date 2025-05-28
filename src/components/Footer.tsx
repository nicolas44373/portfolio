import React from 'react'
import { Github, Linkedin, Mail,   } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} Nicolas Alurralde. Todos los derechos reservados.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          
          <Button variant="ghost" size="icon">
            <a
              href="https://www.linkedin.com/in/nicolas-alurralde-366939255/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>

          <Button variant="ghost" size="icon">
            <a
              href="https://github.com/nicolas44373"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </a>
          </Button>

          <Button variant="ghost" size="icon">
            <a
              href="mailto:nicolasalurralde39@gmail.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer