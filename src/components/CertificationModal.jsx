"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Image from "next/image";
import React from "react";
import { X } from "lucide-react";

const CertificationModal = ({ isOpen, onClose, certificate }) => {
  if (!certificate) return null;

  const isPDF = certificate.file.endsWith(".pdf");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-primary border border-white/20 w-full max-w-4xl max-h-[90vh]">
        <DialogHeader className="border-white/10 border-b">
          <DialogTitle className="text-accent text-2xl">
            {certificate.title}
          </DialogTitle>
          <DialogClose className="top-4 right-4 absolute text-white/60 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </DialogClose>
        </DialogHeader>

        <div className="flex flex-1 justify-center items-center bg-black/30 p-4 rounded-lg min-h-[500px] overflow-auto">
          {isPDF ? (
            <iframe
              src={`/assets/certificates/${certificate.file}`}
              className="rounded-lg w-full h-[500px]"
              title={certificate.title}
            />
          ) : (
            <Image
              src={`/assets/certificates/${certificate.file}`}
              alt={certificate.title}
              width={800}
              height={600}
              className="rounded-lg max-w-full max-h-full object-contain"
              priority
            />
          )}
        </div>

        <div className="pt-4 border-white/10 border-t">
          <p className="text-white/80 text-sm">
            <span className="font-semibold text-accent">Issued by:</span>{" "}
            {certificate.issuer}
          </p>
          <p className="mt-1 text-white/80 text-sm">
            <span className="font-semibold text-accent">Date:</span>{" "}
            {certificate.date}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationModal;
