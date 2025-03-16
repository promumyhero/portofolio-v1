"use client";
import React, { useState, useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { IconMail, IconPhone, IconSend } from "@tabler/icons-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_m5w0dpe",
        "template_pyxzz5q",
        {
          from_name: form.name,
          to_name: "Ridho Hery Winarto",
          from_email: form.email,
          to_email: "ridhoheryw@gmail.com",
          message: form.message,
          subject: form.subject,
          phone: form.phone || "Not provided", // Include phone if available
          date: new Date().toLocaleString(),
        },
        "U-FLmPsIfImgvxDrY" // Add your EmailJS public key here
      );

      console.log("Email sent successfully");

      // Reset form after successful submission
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
      });

      // Show success message
      toast.success("Message sent!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        action: {
          label: "Dismiss",
          onClick: () => console.log("Dismissed"),
        },
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message", {
        description:
          "There was an error sending your message. Please try again later.",
        action: {
          label: "Try Again",
          onClick: () => formRef.current?.requestSubmit(),
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20" id="Contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-100 via-black-300 to-black-500 opacity-90"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="contact-container z-10 w-full max-w-2xl mx-auto p-6">
          <h3 className="text-4xl font-bold text-center mb-2 text-white">
            Contact Me
          </h3>

          <p className="text-lg text-white-600 mt-3 mb-8 text-center">
            Interested in working together? Fill out the form below and I'll get
            back to you as soon as possible.
          </p>

          <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-lg bg-black-300/50 backdrop-blur-md border border-white/10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <LabelInputContainer>
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    type="text"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    type="email"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </LabelInputContainer>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <LabelInputContainer>
                  <Label htmlFor="phone" className="text-white">
                    Phone (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    type="text"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and budget..."
                  rows={5}
                  required
                  className="min-h-[120px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white shadow-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </LabelInputContainer>

              <button
                type="submit"
                disabled={loading}
                className="relative group/btn bg-gradient-to-br from-blue-600 to-blue-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] flex items-center justify-center"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <span className="mr-2">Send Message</span>
                    <IconSend className="h-4 w-4" />
                  </>
                )}
                <BottomGradient />
              </button>

              <div className="flex items-center justify-center space-x-6 mt-6">
                <a
                  href="mailto:ridhoherywinarto@gmail.com"
                  className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <IconMail className="h-5 w-5" />
                  <span>Email</span>
                </a>
                <a
                  href="tel:+6282158606330"
                  className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <IconPhone className="h-5 w-5" />
                  <span>Call</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;
