import { Shield, Eye, Database, Network, Search, Activity } from "lucide-react"

export const skills = [
  { name: "Wazuh", description: "Threat Detection & Active Response", icon: Shield },
  { name: "Splunk", description: "SIEM, Dashboard, SPL", icon: Database },
  { name: "Analyse de logs & investigations SOC", description: "Security Operations Center", icon: Search },
  { name: "Suricata", description: "Network Security Monitoring", icon: Network },
  { name: "Zeek", description: "Network Analysis Framework", icon: Eye },
  { name: "Snort", description: "Intrusion Detection System", icon: Shield },
  { name: "Sysmon", description: "System Activity Monitoring", icon: Activity },
  { name: "Falco", description: "Runtime Security & Threat Detection", icon: Activity },
  { name: "Wireshark", description: "Network Protocol Analyzer & Forensics", icon: Network },
]

export const projects = [
  {
    id: 1,
    title: "Détection comportementale réseau avec Wazuh & Splunk",
    description: "Dashboard Splunk en live, corrélation d'alertes Wazuh",
    tags: ["Wazuh", "Splunk", "Network Analysis"],
    details:
      "Mise en place d'un système de détection comportementale avancé utilisant Wazuh pour la collecte d'événements et Splunk pour l'analyse et la visualisation en temps réel.",
  },
  {
    id: 2,
    title: "SOC Simulé — Détection et réponse automatique",
    description: "Détection d'attaque SSH et blocage automatique",
    tags: ["SOC", "Wazuh", "Splunk", "Active Response"],
    details:
      "Simulation complète d'un SOC avec détection automatisée des tentatives d'intrusion SSH et mise en place de réponses automatiques pour bloquer les attaquants.",
  },
  {
    id: 3,
    title: "Mise en place d'un Lab SIEM",
    description: "Splunk + Suricata + Wazuh",
    tags: ["SIEM", "Splunk", "Suricata", "Wazuh"],
    details:
      "Création d'un laboratoire SIEM complet intégrant Splunk comme plateforme centrale, Suricata pour la détection réseau et Wazuh pour la surveillance des endpoints.",
  },
  {
    id: 4,
    title: "Défense en profondeur contre injection SQL",
    description: "pfsense, snort, suricata inline, Splunk",
    tags: ["Defense in Depth", "SQL Injection", "pfSense", "Snort"],
    details:
      "Implémentation d'une stratégie de défense multicouche contre les attaques par injection SQL utilisant pfSense, Snort, Suricata et Splunk.",
  },
  {
    id: 5,
    title: "Analyse comportementale du réseau",
    description: "Surveillance trafic, détection anomalies, Splunk + Wazuh",
    tags: ["Network Analysis", "Anomaly Detection", "Splunk", "Wazuh"],
    details:
      "Développement d'un système d'analyse comportementale pour détecter les anomalies réseau et les menaces avancées persistantes.",
  },
  {
    id: 6,
    title: "Active Response",
    description: "Blocage SSH bruteforce avec Wazuh & Splunk",
    tags: ["Active Response", "SSH", "Bruteforce", "Wazuh"],
    details: "Mise en place de réponses automatiques pour bloquer les attaques par force brute SSH en temps réel.",
  },
  {
    id: 7,
    title: "FIM — Surveillance fichiers critiques",
    description: "File Integrity Monitoring avec Wazuh",
    tags: ["FIM", "Wazuh", "File Monitoring"],
    details:
      "Implémentation d'un système de surveillance de l'intégrité des fichiers critiques pour détecter les modifications non autorisées.",
  },
  {
    id: 8,
    title: "Intégration Wazuh à Splunk",
    description: "Centralisation des événements",
    tags: ["Integration", "Wazuh", "Splunk", "SIEM"],
    details:
      "Configuration avancée pour centraliser tous les événements Wazuh dans Splunk pour une analyse et corrélation optimales.",
  },
  {
    id: 9,
    title: "SOC Analyst Lab",
    description: "Détection et réponse automatisée avec Splunk et Wazuh",
    tags: ["SOC", "Automation", "Splunk", "Wazuh"],
    details: "Laboratoire complet de formation SOC avec scénarios d'attaque réalistes et réponses automatisées.",
  },
  {
    id: 10,
    title: "CTF Blue Team Splunk",
    description: "Maîtrise SPL, recherche IOC, analyse temps réel",
    tags: ["CTF", "Blue Team", "Splunk", "SPL", "IOC"],
    details:
      "Participation à des challenges CTF Blue Team axés sur Splunk avec maîtrise du langage SPL pour la recherche d'indicateurs de compromission et l'analyse de logs en temps réel.",
  },
  {
    id: 11,
    title: "Stage 3 mois - Entreprise AKATA GOAVANA",
    description: "SOC Cloud-Native : Surveillance Proactive de Kubernetes avec Falco, Wazuh et Splunk",
    tags: ["Stage", "SOC", "Cloud-Native", "Kubernetes", "Falco", "Wazuh", "Splunk"],
    details:
      "Stage de 3 mois en tant que SOC Analyst dans un environnement cloud-native. Mise en place et optimisation de la surveillance proactive de clusters Kubernetes avec Falco pour la détection en temps réel, Wazuh pour la corrélation d'événements et Splunk pour l'analyse centralisée et la création de dashboards de sécurité avancés.",
  },
]

export const certifications = {
  microsoft: [
    {
      id: 1,
      title: "Defend against Cyberthreats with Microsoft Defender XDR lab exercises",
      image: "/microsoft-defender-certificate.jpg",
    },
    {
      id: 2,
      title: "Perform device investigations in Microsoft Defender for Endpoint",
      image: "/microsoft-cert-1.png",
    },
    {
      id: 3,
      title: "Configure and manage automation using Microsoft Defender for Endpoint",
      image: "/microsoft-cert-2.png",
    },
    {
      id: 4,
      title: "Deploy the Microsoft Defender for Endpoint environment",
      image: "/microsoft-cert-3.png",
    },
    {
      id: 5,
      title: "Configure for alerts and detections in Microsoft Defender for Endpoint",
      image: "/microsoft-cert-4.png",
    },
    {
      id: 6,
      title: "Mitigate incidents using Microsoft Defender",
      image: "/microsoft-cert-5.png",
    },
    {
      id: 7,
      title: "Describe cloud computing",
      image: "/microsoft-cert-6.png",
    },
    {
      id: 8,
      title: "Introduction to Microsoft Sentinel",
      image: "/microsoft-cert-7.png",
    },
  ],
  cyberini: [
    {
      id: 1,
      title: "6 Façons de se faire Pirater en 5 minutes(Gratuit)",
      image: "https://via.placeholder.com/600x400?text=Cyberini+Certificate+1",
    },
    {
      id: 2,
      title: "MOOC Cybersécurité de Cyberini",
      image: "https://via.placeholder.com/600x400?text=Cyberini+MOOC",
    },
  ],
  splunk: [
    { id: 1, title: "Intro to Splunk (eLearning)", image: "https://via.placeholder.com/600x400?text=Intro+to+Splunk" },
    { id: 2, title: "Introduction to Dashboards (eLearning)", image: "https://via.placeholder.com/600x400?text=Splunk+Dashboards" },
    { id: 3, title: "Search Under the Hood (eLearning)", image: "https://via.placeholder.com/600x400?text=Search+Under+Hood" },
    { id: 4, title: "Using Fields (eLearning)", image: "https://via.placeholder.com/600x400?text=Using+Fields" },
    { id: 5, title: "Visualizations (eLearning)", image: "https://via.placeholder.com/600x400?text=Visualizations" },
    { id: 6, title: "Introduction to Enterprise Security (eLearning)", image: "https://via.placeholder.com/600x400?text=Enterprise+Security" },
    { id: 7, title: "ES 8.0 Updates for the Splunk SOC (eLearning)", image: "https://via.placeholder.com/600x400?text=ES+8.0+Updates" },
    { id: 8, title: "The Cybersecurity Landscape (eLearning)", image: "https://via.placeholder.com/600x400?text=Cybersecurity+Landscape" },
    { id: 9, title: "Understanding Threats and Attacks (eLearning)", image: "https://via.placeholder.com/600x400?text=Threats+and+Attacks" },
    { id: 10, title: "Security Operations and the Defense Analyst (eLearning)", image: "https://via.placeholder.com/600x400?text=Defense+Analyst" },
    { id: 11, title: "Data and Tools for Defense Analysts (eLearning)", image: "https://via.placeholder.com/600x400?text=Defense+Tools" },
    { id: 12, title: "The Art of Investigation (eLearning)", image: "https://via.placeholder.com/600x400?text=Investigation+Art" },
    { id: 13, title: "SOC Essentials: Investigating with Splunk (free eLearning)", image: "https://via.placeholder.com/600x400?text=SOC+Essentials" },
    { id: 14, title: "Introduction to Detection Engineering with Splunk", image: "https://via.placeholder.com/600x400?text=Detection+Engineering" },
  ],
  cisco: [
    {
      id: 1,
      title: "Ethical Hacker",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ethical%20Hacker-cLTm1gEMbw5tc3dw3rCfDO1w6JUG2x.png",
    },
  ],
  securityBlueTeam: [
    {
      id: 1,
      title: "Blue Team Junior Analyst Training Pathway",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue-uJ9Z0s8xbahnmzF1mrAnHUGQbOfeXj.png",
    },
  ],
}

export const microsoftCertificates = {
  "Defend against Cyberthreats with Microsoft Defender XDR lab exercises": "/microsoft-defender-certificate.jpg",
  "Perform device investigations in Microsoft Defender for Endpoint": "/microsoft-cert-1.png",
  "Configure and manage automation using Microsoft Defender for Endpoint": "/microsoft-cert-2.png",
  "Deploy the Microsoft Defender for Endpoint environment": "/microsoft-cert-3.png",
  "Configure for alerts and detections in Microsoft Defender for Endpoint": "/microsoft-cert-4.png",
  "Mitigate incidents using Microsoft Defender": "/microsoft-cert-5.png",
  "Describe cloud computing": "/microsoft-cert-6.png",
  "Introduction to Microsoft Sentinel": "/microsoft-cert-7.png",
}
