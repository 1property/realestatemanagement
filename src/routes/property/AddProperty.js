import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import DateInput from "../../components/DateInput";
import Card from "../../components/Card";
import CardContent from "../../components/CardContent";
import Textarea from "../../components/Textarea";
import { supabase, propertyTable } from "../../clients/supabaseClient";

const AddProperty = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    location: "",
    type: "",
    size: "",
    tenure: "",
    houseType: "",
    bedroom: "",
    bathroom: "",
    landTitle: "",
    description: "",
    notes: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.price) newErrors.price = "Price is required";
    return newErrors;
  };

  const addLead = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const { error } = await supabase.from(propertyTable).insert([form]);

    setLoading(false);

    if (error) {
      console.error("Error inserting data:", error);
      return;
    }

    setForm({
      name: "",
      price: "",
      location: "",
      type: "",
      size: "",
      tenure: "",
      houseType: "",
      bedroom: "",
      bathroom: "",
      landTitle: "",
      description: "",
      notes: ""
    });
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Property</h1>
      <Card>
        <CardContent className="p-4">
          <Input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? "is-invalid" : ""}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          <Input
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className={errors.price ? "is-invalid" : ""}
          />
          {errors.price && (
            <div className="invalid-feedback">{errors.price}</div>
          )}
          <Input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />
          <Input
            name="type"
            placeholder="Type"
            value={form.type}
            onChange={handleChange}
          />
          <Input
            name="size"
            placeholder="Size (sqft)"
            value={form.size}
            onChange={handleChange}
          />
          <Input
            name="tenure"
            placeholder="tenure"
            value={form.tenure}
            onChange={handleChange}
          />
          <DateInput
            name="houseType"
            placeholder="House Type"
            value={form.houseType}
            onChange={handleChange}
          />
          <Input
            name="bedroom"
            placeholder="No. of Bedrooms"
            value={form.bedroom}
            onChange={handleChange}
          />
          <Input
            name="bathroom"
            placeholder="No. of Bathrooms"
            value={form.bathroom}
            onChange={handleChange}
          />
          <Textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />
          <Textarea
            name="notes"
            placeholder="Notes"
            value={form.notes}
            onChange={handleChange}
          />
          <Button
            type="button"
            onClick={addLead}
            label={loading ? "Saving..." : "Save"}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProperty;
