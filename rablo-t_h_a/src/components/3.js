import React from "react";

export const Three = ({ formData, setFormData })=>{
    return (
        <div className="Three">
        <label>Address Line 1</label>
        <br/>
          <input
            type="text"
            placeholder="Address Line 1"
            value={formData.adressLine1}
            onChange={(event) =>
              setFormData({ ...formData, adressLine1: event.target.value })
            }
          /><br/>
            <label>Address Line 1</label>
        <br/>
          <input
            type="text"
            placeholder="Address Line 2"
            value={formData.adressLine2}
            onChange={(event) =>
              setFormData({ ...formData, adressLine2: event.target.value })
            }
          /><br/>
            <label>Other</label>
        <br/>
           <input
            type="text"
            placeholder="Other..."
            value={formData.other}
            onChange={(event) =>
              setFormData({ ...formData, other: event.target.value })
            }
          /><br/>
        </div>
      );
    }
