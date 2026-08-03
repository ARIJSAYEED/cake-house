"use client";

import { useState } from "react";
import Link from "next/link";

const mealOptions = [
  "Classic Chocolate Cake",
  "Strawberry Shortcake",
  "Birthday Celebration Cake",
  "Red Velvet Dream",
  "Weekly Tiffin — Lunch",
  "Weekly Tiffin — Dinner",
  "Custom Order",
];

const allergyOptions = [
  "Nuts",
  "Dairy",
  "Gluten",
  "Eggs",
  "Shellfish",
  "Soy",
];

const dietaryOptions = [
  "Vegetarian",
  "Vegan",
  "Halal",
  "Jain",
  "Diabetic-friendly",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  orderType: "delivery",
  mealSelection: "",
  quantity: "",
  weightLbs: "",
  shortDescription: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  postcode: "",
  deliveryDate: "",
  deliveryTime: "",
  deliveryInstructions: "",
  mealType: "veg",
  allergies: [],
  dietaryPreferences: [],
  spiceLevel: "medium",
  paymentMethod: "cod",
  specialInstructions: "",
  agreeToTerms: false,
};

function Field({ label, required, children, hint }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
      {hint && <span className="block text-xs text-neutral-500">{hint}</span>}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function OrderForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCheckboxList = (field, value) => {
    setForm((prev) => {
      const list = prev[field];
      return {
        ...prev,
        [field]: list.includes(value)
          ? list.filter((item) => item !== value)
          : [...list, value],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(form);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10">
          <p className="text-5xl">✓</p>
          <h1 className="mt-4 text-2xl font-semibold">Order received!</h1>
          <p className="mt-2 text-neutral-600">
            Thanks, {form.fullName}. We&apos;ll confirm your order by email or
            phone shortly.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Online Order
          </p>
          <h1 className="mt-2 text-4xl font-semibold sm:text-4xl">
            Place your <span className="text-primary">order</span>
          </h1>
          <p className="mt-3 text-neutral-600">
            Fill in the details below and we&apos;ll prepare your fresh
            homemade meal for delivery or pickup.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 sm:p-10"
        >
          {/* Customer details */}
          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold">Your details</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" required>
                <input
                  type="text"
                  required
                  className={inputClass}
                  placeholder="John Smith"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                />
              </Field>
              <Field label="Phone number" required>
                <input
                  type="tel"
                  required
                  className={inputClass}
                  placeholder="+880 1XXX-XXXXXX"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </Field>
            </div>
            <Field label="Email address" required>
              <input
                type="email"
                required
                className={inputClass}
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </Field>
          </fieldset>

          {/* Order details */}
          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold">Order details</legend>
            <Field label="Meal / item" required>
              <select
                required
                className={inputClass}
                value={form.mealSelection}
                onChange={(e) => updateField("mealSelection", e.target.value)}
              >
                <option value="">Select a meal or cake</option>
                {mealOptions.map((meal) => (
                  <option key={meal} value={meal}>
                    {meal}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Quantity (servings)" required hint="Number of portions or boxes">
                <input
                  type="number"
                  required
                  min="1"
                  className={inputClass}
                  placeholder="e.g. 2"
                  value={form.quantity}
                  onChange={(e) => updateField("quantity", e.target.value)}
                />
              </Field>
              <Field label="Weight (lbs)" hint="Approximate weight if ordering by weight">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  className={inputClass}
                  placeholder="e.g. 2.5 lbs"
                  value={form.weightLbs}
                  onChange={(e) => updateField("weightLbs", e.target.value)}
                />
              </Field>
            </div>

            <Field label="Meal type" required>
              <div className="flex flex-wrap gap-4">
                {["veg", "non-veg"].map((type) => (
                  <label
                    key={type}
                    className="flex cursor-pointer items-center gap-2 text-sm"
                  >
                    <input
                      type="radio"
                      name="mealType"
                      value={type}
                      checked={form.mealType === type}
                      onChange={(e) => updateField("mealType", e.target.value)}
                      className="accent-primary"
                    />
                    {type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Short description" required hint="Describe your order, flavours, or custom requests">
              <textarea
                required
                rows={3}
                className={inputClass}
                placeholder="e.g. Chocolate cake with happy birthday message, less sugar..."
                value={form.shortDescription}
                onChange={(e) => updateField("shortDescription", e.target.value)}
              />
            </Field>
          </fieldset>

          {/* Delivery / pickup */}
          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold">Delivery or pickup</legend>
            <Field label="Order type" required>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "delivery", label: "Home delivery" },
                  { value: "pickup", label: "Pickup" },
                ].map(({ value, label }) => (
                  <label
                    key={value}
                    className="flex cursor-pointer items-center gap-2 text-sm"
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value={value}
                      checked={form.orderType === value}
                      onChange={(e) => updateField("orderType", e.target.value)}
                      className="accent-primary"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </Field>

            {form.orderType === "delivery" && (
              <>
                <Field label="Street address" required>
                  <input
                    type="text"
                    required
                    className={inputClass}
                    placeholder="House / flat, street name"
                    value={form.addressLine1}
                    onChange={(e) => updateField("addressLine1", e.target.value)}
                  />
                </Field>
                <Field label="Area / landmark">
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Area, building name, landmark"
                    value={form.addressLine2}
                    onChange={(e) => updateField("addressLine2", e.target.value)}
                  />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="City" required>
                    <input
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Chattogram"
                      value={form.city}
                      onChange={(e) => updateField("city", e.target.value)}
                    />
                  </Field>
                  <Field label="Postcode">
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="4000"
                      value={form.postcode}
                      onChange={(e) => updateField("postcode", e.target.value)}
                    />
                  </Field>
                </div>
              </>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Delivery date" required>
                <input
                  type="date"
                  required
                  className={inputClass}
                  min={new Date().toISOString().split("T")[0]}
                  value={form.deliveryDate}
                  onChange={(e) => updateField("deliveryDate", e.target.value)}
                />
              </Field>
              <Field label="Delivery time" required>
                <input
                  type="time"
                  required
                  className={inputClass}
                  value={form.deliveryTime}
                  onChange={(e) => updateField("deliveryTime", e.target.value)}
                />
              </Field>
            </div>

            <Field label="Delivery instructions" hint="Gate code, floor, contactless delivery, etc.">
              <textarea
                rows={2}
                className={inputClass}
                placeholder="Leave at door, call on arrival..."
                value={form.deliveryInstructions}
                onChange={(e) =>
                  updateField("deliveryInstructions", e.target.value)
                }
              />
            </Field>
          </fieldset>

          {/* Dietary */}
          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold">Dietary & allergies</legend>
            <Field label="Allergies">
              <div className="flex flex-wrap gap-3">
                {allergyOptions.map((allergy) => (
                  <label
                    key={allergy}
                    className="flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm has-checked:border-primary has-checked:bg-primary/5"
                  >
                    <input
                      type="checkbox"
                      checked={form.allergies.includes(allergy)}
                      onChange={() => toggleCheckboxList("allergies", allergy)}
                      className="accent-primary"
                    />
                    {allergy}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Dietary preferences">
              <div className="flex flex-wrap gap-3">
                {dietaryOptions.map((pref) => (
                  <label
                    key={pref}
                    className="flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm has-checked:border-primary has-checked:bg-primary/5"
                  >
                    <input
                      type="checkbox"
                      checked={form.dietaryPreferences.includes(pref)}
                      onChange={() =>
                        toggleCheckboxList("dietaryPreferences", pref)
                      }
                      className="accent-primary"
                    />
                    {pref}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Spice level">
              <select
                className={inputClass}
                value={form.spiceLevel}
                onChange={(e) => updateField("spiceLevel", e.target.value)}
              >
                <option value="mild">Mild</option>
                <option value="medium">Medium</option>
                <option value="hot">Hot</option>
                <option value="extra-hot">Extra hot</option>
              </select>
            </Field>
          </fieldset>

          {/* Payment & notes */}
          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold">Payment & notes</legend>
            <Field label="Payment method" required>
              <select
                required
                className={inputClass}
                value={form.paymentMethod}
                onChange={(e) => updateField("paymentMethod", e.target.value)}
              >
                <option value="cod">Cash on delivery</option>
                <option value="card">Card on delivery</option>
                <option value="bkash">bKash / mobile payment</option>
                <option value="bank">Bank transfer</option>
              </select>
            </Field>
            <Field label="Special instructions for the kitchen">
              <textarea
                rows={2}
                className={inputClass}
                placeholder="Extra napkins, no onions, gift wrap..."
                value={form.specialInstructions}
                onChange={(e) =>
                  updateField("specialInstructions", e.target.value)
                }
              />
            </Field>
            <label className="flex cursor-pointer items-start gap-3 text-sm">
              <input
                type="checkbox"
                required
                checked={form.agreeToTerms}
                onChange={(e) => updateField("agreeToTerms", e.target.checked)}
                className="mt-0.5 accent-primary"
              />
              <span>
                I agree to the terms of service and understand that order
                confirmation will be sent via email or phone.
              </span>
            </label>
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90 sm:text-base"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}
