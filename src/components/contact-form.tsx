"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

type FormFields = {
  name: string;
  email: string;
  inquiry: string;
  message: string;
};

const initialFields: FormFields = { name: "", email: "", inquiry: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [status, setStatus] = useState("");

  function update(field: keyof FormFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<FormFields> = {};
    if (!fields.name.trim()) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) nextErrors.email = "Enter a valid email address.";
    if (!fields.inquiry) nextErrors.inquiry = "Choose an inquiry category.";
    if (fields.message.trim().length < 10) nextErrors.message = "Write at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("Please review the highlighted fields.");
      return;
    }
    setStatus("Your details passed the demo form checks. This site is not connected to a submission service, so your message was not sent.");
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <Field label="Name" error={errors.name}>
          <input id="contact-name" autoComplete="name" value={fields.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input id="contact-email" type="email" autoComplete="email" value={fields.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />
        </Field>
      </div>
      <Field label="Inquiry category" error={errors.inquiry}>
        <select id="contact-inquiry" value={fields.inquiry} onChange={(event) => update("inquiry", event.target.value)} aria-invalid={Boolean(errors.inquiry)} aria-describedby={errors.inquiry ? "contact-inquiry-error" : undefined}>
          <option value="">Select a category</option>
          <option value="research">Research</option>
          <option value="education">Education or activities</option>
          <option value="conference">Conferences</option>
          <option value="general">General inquiry</option>
        </select>
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea id="contact-message" value={fields.message} onChange={(event) => update("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />
      </Field>
      <p className="form-footnote">Demo form only. Submissions are not transmitted or stored.</p>
      {status && <p className={`form-status ${Object.keys(errors).length ? "form-status-error" : ""}`} role="status">{status}</p>}
      <button className="button button-primary form-submit" type="submit">Validate message <ArrowRight size={16} aria-hidden="true" /></button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactElement<{ id?: string }>;
}) {
  const id = children.props.id;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="field-error" id={`${id}-error`}>{error}</span>}
    </div>
  );
}
