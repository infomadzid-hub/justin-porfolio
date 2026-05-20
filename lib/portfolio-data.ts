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
]

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
