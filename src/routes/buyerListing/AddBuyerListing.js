import { useState } from "react";
import Input from "../../components/Input";
import DateInput from "../../components/DateInput";
import Card from "../../components/Card";
import CardContent from "../../components/CardContent";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import { supabase, buyerListingTable } from "../../clients/supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";
 
function AddBuyerListing() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    property: "",
    source: "",
    followUp: "",
    status: "",
    notes: "",
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
    if (!form.phone) newErrors.phone = "Phone number is required";
    return newErrors;
  };
 
  const addLead = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
 
    setLoading(true);
 
    const { error } = await supabase.from(buyerListingTable).insert([form]);
 
    setLoading(false);
 
    if (error) {
      console.error("Error inserting data:", error);
      return;
    }
 
    setForm({
      name: "",
      phone: "",
      email: "",
      location: "",
      property: "",
      source: "",
      followUp: "",
      status: "",
      notes: "",
    });
  };
 
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Buyer Listing</h1>
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
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? "is-invalid" : ""}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
          <Input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />
          <Input
            name="property"
            placeholder="Property Interested"
            value={form.property}
            onChange={handleChange}
          />
          <Input
            name="source"
            placeholder="Lead Source (e.g. TikTok)"
            value={form.source}
            onChange={handleChange}
          />
          <DateInput
            name="followUp"
            placeholder="Follow-Up Date"
            value={form.followUp}
            onChange={handleChange}
          />
          <Input
            name="status"
            placeholder="Status (e.g. Hot Lead)"
            value={form.status}
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
}
 
export default AddBuyerListing;