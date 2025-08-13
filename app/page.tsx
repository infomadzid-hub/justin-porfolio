"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Mail, Phone, Youtube, MessageCircle, CheckCircle } from "lucide-react"
import Image from "next/image"
import { skills, projects, microsoftCertificates } from "@/lib/portfolio-data"
import { CertificateModal } from "@/components/certificate-modal"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("header")
  const [selectedCertificate, setSelectedCertificate] = useState<{
    image: string
    title: string
  } | null>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ["header", "skills", "projects", "certifications", "formations", "contact"]
          const scrollPosition = window.scrollY + 100

          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const { offsetTop, offsetHeight } = element
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section)
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleCertificateClick = (title: string) => {
    const certificateImage = microsoftCertificates[title as keyof typeof microsoftCertificates]
    if (certificateImage) {
      setSelectedCertificate({ image: certificateImage, title })
    }
  }

  const handleCyberiniCertificateClick = (title: string) => {
    const cyberiniCertificates = {
      "6 Façons de se faire Pirater en 5 minutes(Gratuit)": "/cyberini-6facons.png",
      "MOOC Cybersécurité de Cyberini": "/cyberini-mooc.png",
    }

    const certificateImage = cyberiniCertificates[title as keyof typeof cyberiniCertificates]
    if (certificateImage) {
      setSelectedCertificate({ image: certificateImage, title })
    }
  }

  const handleSplunkCertificateClick = (title: string) => {
    const splunkCertificates = {
      "Intro to Splunk (eLearning)": "/splunk-intro.png",
      "Introduction to Dashboards (eLearning)": "/splunk-dashboards.png",
      "Search Under the Hood (eLearning)": "/splunk-search-hood.png",
      "Using Fields (eLearning)": "/splunk-fields.png",
      "Visualizations (eLearning)": "/splunk-visualizations.png",
      "Introduction to Enterprise Security (eLearning)": "/splunk-enterprise-security.png",
      "ES 8.0 Updates for the Splunk SOC (eLearning)": "/splunk-es-updates.png",
      "The Cybersecurity Landscape (eLearning)": "/splunk-cybersecurity-landscape.png",
      "Understanding Threats and Attacks (eLearning)": "/splunk-threats-attacks.png",
      "Security Operations and the Defense Analyst (eLearning)": "/splunk-security-operations.png",
      "Data and Tools for Defense Analysts (eLearning)": "/splunk-data-tools.png",
      "The Art of Investigation (eLearning)": "/splunk-art-investigation.png",
      "SOC Essentials: Investigating with Splunk (free eLearning)": "/splunk-soc-essentials.png",
      "Introduction to Detection Engineering with Splunk": "/splunk-detection-engineering.png",
    }

    const certificateImage = splunkCertificates[title as keyof typeof splunkCertificates]
    if (certificateImage) {
      setSelectedCertificate({ image: certificateImage, title })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation fixe */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-400">Justin Marius</h1>
            <div className="hidden md:flex space-x-6">
              {[
                { id: "header", label: "Accueil" },
                { id: "skills", label: "Compétences" },
                { id: "projects", label: "Projets" },
                { id: "certifications", label: "Certifications" },
                { id: "formations", label: "Formations" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 ${
                    activeSection === item.id ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section id="header" className="pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/abstract-tech-particles-dark-blue.png" alt="Background" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Image de profil en haut */}
            <div className="mb-8">
              <div className="relative">
                <div className="w-80 h-80 rounded-full border-4 border-blue-400 overflow-hidden shadow-2xl">
                  <Image
                    src="/profile-justin-new.jpg"
                    alt="Justin Marius"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Contenu textuel en dessous */}
            <div className="max-w-4xl">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Justin Marius
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-300 font-semibold">
                  SOC Analyst | Cybersecurity Enthusiast
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Passionné par la cybersécurité défensive spécialisé en SIEM, détection de menaces, analyse de logs et
                  réponses aux incidents.
                </p>
                <div className="text-xl text-blue-400 font-medium italic">
                  "Je détecte, analyse et neutralise les menaces pour protéger vos systèmes."
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => window.open("/Justin-Marius CV.pdf", "_blank")}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 bg-transparent"
                  onClick={() => scrollToSection("contact")}
                >
                  Me contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <IconComponent className="h-6 w-6 text-blue-400 mr-3" />
                    <CardTitle className="text-lg text-white">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{skill.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-900 text-blue-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                      >
                        Voir détails
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-800 border-gray-700">
                      <DialogHeader>
                        <DialogTitle className="text-white">{project.title}</DialogTitle>
                        <DialogDescription className="text-gray-300">{project.details}</DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Certifications</h2>
          <Tabs defaultValue="microsoft" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-700">
              <TabsTrigger value="microsoft" className="data-[state=active]:bg-blue-600">
                Microsoft Learn
              </TabsTrigger>
              <TabsTrigger value="cyberini" className="data-[state=active]:bg-blue-600">
                Cyberini
              </TabsTrigger>
              <TabsTrigger value="splunk" className="data-[state=active]:bg-blue-600">
                Splunk Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="microsoft" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Defend against Cyberthreats with Microsoft Defender XDR lab exercises",
                  "Perform device investigations in Microsoft Defender for Endpoint",
                  "Configure and manage automation using Microsoft Defender for Endpoint",
                  "Deploy the Microsoft Defender for Endpoint environment",
                  "Configure for alerts and detections in Microsoft Defender for Endpoint",
                  "Mitigate incidents using Microsoft Defender",
                  "Describe cloud computing",
                  "Introduction to Microsoft Sentinel",
                ].map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 cursor-pointer"
                    onClick={() => handleCertificateClick(cert)}
                  >
                    <CardContent className="p-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-white text-sm">{cert}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cyberini" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["6 Façons de se faire Pirater en 5 minutes(Gratuit)", "MOOC Cybersécurité de Cyberini"].map(
                  (cert, index) => (
                    <Card
                      key={index}
                      className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 cursor-pointer"
                      onClick={() => handleCyberiniCertificateClick(cert)}
                    >
                      <CardContent className="p-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-white text-sm">{cert}</span>
                      </CardContent>
                    </Card>
                  ),
                )}
              </div>
            </TabsContent>

            <TabsContent value="splunk" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Intro to Splunk (eLearning)",
                  "Introduction to Dashboards (eLearning)",
                  "Search Under the Hood (eLearning)",
                  "Using Fields (eLearning)",
                  "Visualizations (eLearning)",
                  "Introduction to Enterprise Security (eLearning)",
                  "ES 8.0 Updates for the Splunk SOC (eLearning)",
                  "The Cybersecurity Landscape (eLearning)",
                  "Understanding Threats and Attacks (eLearning)",
                  "Security Operations and the Defense Analyst (eLearning)",
                  "Data and Tools for Defense Analysts (eLearning)",
                  "The Art of Investigation (eLearning)",
                  "SOC Essentials: Investigating with Splunk (free eLearning)",
                  "Introduction to Detection Engineering with Splunk",
                ].map((cert, index) => (
                  <Card
                    key={index}
                    className={`bg-gray-800 border-gray-700 transition-all duration-300 ${
                      cert === "Intro to Splunk (eLearning)" ||
                      cert === "Introduction to Dashboards (eLearning)" ||
                      cert === "Search Under the Hood (eLearning)" ||
                      cert === "Using Fields (eLearning)" ||
                      cert === "Visualizations (eLearning)" ||
                      cert === "Introduction to Enterprise Security (eLearning)" ||
                      cert === "ES 8.0 Updates for the Splunk SOC (eLearning)" ||
                      cert === "The Cybersecurity Landscape (eLearning)" ||
                      cert === "Understanding Threats and Attacks (eLearning)" ||
                      cert === "Security Operations and the Defense Analyst (eLearning)" ||
                      cert === "Data and Tools for Defense Analysts (eLearning)" ||
                      cert === "The Art of Investigation (eLearning)" ||
                      cert === "SOC Essentials: Investigating with Splunk (free eLearning)" ||
                      cert === "Introduction to Detection Engineering with Splunk"
                        ? "hover:border-blue-400 cursor-pointer"
                        : ""
                    }`}
                    onClick={() => {
                      if (
                        cert === "Intro to Splunk (eLearning)" ||
                        cert === "Introduction to Dashboards (eLearning)" ||
                        cert === "Search Under the Hood (eLearning)" ||
                        cert === "Using Fields (eLearning)" ||
                        cert === "Visualizations (eLearning)" ||
                        cert === "Introduction to Enterprise Security (eLearning)" ||
                        cert === "ES 8.0 Updates for the Splunk SOC (eLearning)" ||
                        cert === "The Cybersecurity Landscape (eLearning)" ||
                        cert === "Understanding Threats and Attacks (eLearning)" ||
                        cert === "Security Operations and the Defense Analyst (eLearning)" ||
                        cert === "Data and Tools for Defense Analysts (eLearning)" ||
                        cert === "The Art of Investigation (eLearning)" ||
                        cert === "SOC Essentials: Investigating with Splunk (free eLearning)" ||
                        cert === "Introduction to Detection Engineering with Splunk"
                      ) {
                        handleSplunkCertificateClick(cert)
                      }
                    }}
                  >
                    <CardContent className="p-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-white text-sm">{cert}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Formations */}
      <section id="formations" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Formations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Tryhackme SOC Level 1</CardTitle>
                <CardDescription className="text-gray-300">TryHackMe Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">Formation complète</p>
                <p className="text-gray-300 text-sm mt-2">Formation pratique en analyse SOC et détection de menaces</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">STEP : Splunk Training and Enablement Plateform</CardTitle>
                <CardDescription className="text-gray-300">The Cybersecurity Defense Analyst Learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">Formation spécialisée</p>
                <p className="text-gray-300 text-sm mt-2">Formation avancée en analyse de sécurité avec Splunk</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:madzidmarius@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    madzidmarius@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Téléphone</h3>
                  <a href="tel:+261380930739" className="text-blue-400 hover:text-blue-300 transition-colors">
                    +261 38 09 307 39
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Youtube className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">YouTube</h3>
                  <a
                    href="https://youtube.com/@MadzidInfo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    @MadzidInfo
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                  <a href="https://wa.me/261093073939" className="text-blue-400 hover:text-blue-300 transition-colors">
                    +261 09 307 39
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => window.open("mailto:madzidmarius@gmail.com")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Envoyer un message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Justin Marius. Tous droits réservés.</p>
        </div>
      </footer>

      {selectedCertificate && (
        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          certificateImage={selectedCertificate.image}
          title={selectedCertificate.title}
        />
      )}
    </div>
  )
}
