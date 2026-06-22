"use client";

import { useForm } from "react-hook-form";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

import { ContactFormData } from "@/types/contact";
import { FaTelegram } from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-card p-6 rounded-xl"
    >
      <h2 className="text-text font-semibold text-2xl">Send us a Message</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Full Name"
          placeholder="John Doe"
          error={errors.fullName?.message}
          {...register("fullName", {
            required: "Full Name is required",
          })}
        />

        <Input
          label="Company Name"
          placeholder="Acme Corp"
          {...register("companyName")}
        />

        <Input
          label="Email Address"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
        />

        <Input
          label="Phone / WhatsApp"
          placeholder="+92 300000000"
          error={errors.phone?.message}
          {...register("phone", {
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Phone number must be at least 10 digits",
            },
          })}
        />

        <Select
          label="Primary Service Needed"
          error={errors.service?.message}
          options={[
            {
              label: "Select a service",
              value: "",
            },
            {
              label: "Web Development",
              value: "web-development",
            },
            {
              label: "SEO",
              value: "seo",
            },
            {
              label: "Digital Marketing",
              value: "marketing",
            },
          ]}
          {...register("service", {
            required: "Please select a service",
          })}
        />

        <Select
          label="Estimated Budget"
          error={errors.budget?.message}
          options={[
            {
              label: "Select a range",
              value: "",
            },
            {
              label: "$500 - $1000",
              value: "500-1000",
            },
            {
              label: "$1000 - $5000",
              value: "1000-5000",
            },
            {
              label: "$5000+",
              value: "5000+",
            },
          ]}
          {...register("budget", {
            required: "Please select a budget",
          })}
        />
      </div>

      <Textarea
        label="Project Details"
        placeholder="Tell us about your project..."
        error={errors.projectDetails?.message}
        {...register("projectDetails", {
          required: "Project details are required",
          minLength: {
            value: 20,
            message: "Please enter at least 20 characters",
          },
        })}
      />

      <Button type="submit">
        Submit Inquiry <FaTelegram size={20} />
      </Button>
    </form>
  );
};

export default ContactForm;
