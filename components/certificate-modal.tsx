"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificateImage: string
  title: string
}

export function CertificateModal({ isOpen, onClose, certificateImage, title }: CertificateModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gray-800 border-gray-700 p-0">
        <div className="relative w-full h-[600px]">
          <Image
            src={certificateImage || "/placeholder.svg"}
            alt={`Certificat ${title}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
