"use client";

import { useState, type FormEvent } from "react";
import styles from "./contact.module.css";

type Field = "name" | "email" | "category" | "message";
type Values = Record<Field, string> & { organization: string };
type Errors = Partial<Record<Field, string>>;

const categories = [
  "General enquiry",
  "Software and digital systems",
  "Artificial intelligence and automation",
  "Cloud, infrastructure and IT",
  "Product enquiry",
  "Partnership and collaboration",
  "Research and innovation",
  "Other",
];

const initialValues: Values = { name: "", organization: "", email: "", category: "", message: "" };
const messageLimit = 1200;

function validateField(field: Field, values: Values): string | undefined {
  const value = values[field].trim();
  if (!value) {
    if (field === "name") return "Enter your full name.";
    if (field === "email") return "Enter your email address.";
    if (field === "category") return "Choose an enquiry category.";
    return "Write a short message to get started.";
  }
  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) return "Enter a valid email address.";
  if (field === "message" && values.message.length > messageLimit) return `Keep your message within ${messageLimit} characters.`;
  return undefined;
}

function validate(values: Values): Errors {
  const errors: Errors = {};
  ( ["name", "email", "category", "message"] as const).forEach((field) => {
    const error = validateField(field, values);
    if (error) errors[field] = error;
  });
  return errors;
}

export default function InquiryForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [checked, setChecked] = useState(false);
  const [attempted, setAttempted] = useState(false);

  function updateValue(field: keyof Values, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    setChecked(false);
    if (field !== "organization" && (touched[field] || attempted)) {
      const error = validateField(field, nextValues);
      setErrors((current) => {
        const next = { ...current };
        if (error) next[field] = error;
        else delete next[field];
        return next;
      });
    }
  }

  function handleBlur(field: Field) {
    setTouched((current) => ({ ...current, [field]: true }));
    const error = validateField(field, values);
    setErrors((current) => {
      const next = { ...current };
      if (error) next[field] = error;
      else delete next[field];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (checked) return;
    setAttempted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, category: true, message: true });
    if (Object.keys(nextErrors).length > 0) {
      setChecked(false);
      const firstInvalid = document.getElementById(`${Object.keys(nextErrors)[0]}-field`);
      firstInvalid?.focus();
      return;
    }
    setChecked(true);
  }

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label htmlFor="name-field">Full name <span>*</span></label>
          <input id="name-field" name="name" autoComplete="name" required maxLength={100} value={values.name} onChange={(event) => updateValue("name", event.target.value)} onBlur={() => handleBlur("name")} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p className={styles.fieldError} id="name-error" role="alert">{errors.name}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="organization-field">Business or organisation <span className={styles.optional}>(optional)</span></label>
          <input id="organization-field" name="organization" autoComplete="organization" maxLength={120} value={values.organization} onChange={(event) => updateValue("organization", event.target.value)} />
        </div>
        <div className={styles.field}>
          <label htmlFor="email-field">Email address <span>*</span></label>
          <input id="email-field" name="email" type="email" autoComplete="email" inputMode="email" required maxLength={254} value={values.email} onChange={(event) => updateValue("email", event.target.value)} onBlur={() => handleBlur("email")} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && <p className={styles.fieldError} id="email-error" role="alert">{errors.email}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="category-field">Subject / enquiry category <span>*</span></label>
          <select id="category-field" name="category" required value={values.category} onChange={(event) => updateValue("category", event.target.value)} onBlur={() => handleBlur("category")} aria-invalid={Boolean(errors.category)} aria-describedby={errors.category ? "category-error" : undefined}>
            <option value="">Choose a category</option>
            {categories.map((category) => <option value={category} key={category}>{category}</option>)}
          </select>
          {errors.category && <p className={styles.fieldError} id="category-error" role="alert">{errors.category}</p>}
        </div>
        <div className={`${styles.field} ${styles.messageField}`}>
          <label htmlFor="message-field">Message <span>*</span></label>
          <textarea id="message-field" name="message" required maxLength={messageLimit} rows={6} value={values.message} onChange={(event) => updateValue("message", event.target.value)} onBlur={() => handleBlur("message")} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error message-counter" : "message-counter"} />
          <div className={styles.messageMeta}>
            {errors.message ? <p className={styles.fieldError} id="message-error" role="alert">{errors.message}</p> : <span>Share the context that will help us understand.</span>}
            <span className={styles.counter} id="message-counter" aria-live="polite">{values.message.length} / {messageLimit}</span>
          </div>
        </div>
      </div>
      <div className={styles.formAction}>
        <p>No message is sent from this form. Delivery will be enabled when an official contact channel is configured.</p>
        <button className={styles.submitButton} type="submit" disabled={checked}>
          {checked ? "Details reviewed" : "Review inquiry"}<span aria-hidden="true">&#8594;</span>
        </button>
      </div>
      {checked && <p className={styles.formStatus} role="status">Your required details are complete. Delivery is not configured yet, so your message has not been sent.</p>}
    </form>
  );
}
