export const mailBody = (data) => {
    // Generate the field HTML dynamically based on the keys in the data object
    const fieldHtml = Object.keys(data)
        .filter((key) => data[key]) // Only include fields that have a value
        .map((key) => {
            // Capitalize the first letter of the key to use as the label
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            return `<p><span class="label">${label}:</span> <span class="value">${data[key]}</span></p>`;
        })
        .join(""); // Join all fields together into a single HTML string

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${data.subject || "Submitted Form"}</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  max-width: 100%;
                  margin: 0;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h2 {
                  color: #333;
              }
              p {
                  font-size: 14px;
                  color: #555;
                  line-height: 0.5;
              }
              .label {
                  font-weight: bold;
                  color: #333;
                  font-size: 12px;
              }
              .value {
                  margin-left: 10px;
              }
          </style>
      </head>
      <body>
      
      <div class="container">
          <h2>${data.subject || "Submitted Form"}</h2>
          ${fieldHtml}
      </div>
      
      </body>
      </html>
    `;
};

export const comapanyMailBody = (data, mail_title) => {
    // Generate the table rows dynamically based on the keys in the data object
    const rowsHtml = Object.keys(data)
        .filter((key) => data[key]) // Only include fields that have a value
        .map((key) => {
            // Capitalize the first letter of the key to use as the label
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            return `<tr><td class="label">${label}:</td><td class="value">${data[key]}</td></tr>`;
        })
        .join(""); // Join all rows together into a single HTML string

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <title>${mail_title || "Submitted Form"}</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  max-width: 100%;
                  margin: 0;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h2 {
                  color: #333;
              }
              table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 10px;
              }
              table, th, td {
                  border: 1px solid #ddd;
                  padding: 8px;
              }
              th, td {
                  text-align: left;
              }
              .label {
                  font-weight: bold;
                  color: #333;
                  font-size: 12px;
              }
              .value {
                  margin-left: 10px;
                  color: #555;
                  font-size: 12px;
              }
              .company-info, .footer {
                  margin-top: 20px;
                  padding: 10px;
                  background-color: #f9f9f9;
                  border-radius: 8px;
              }
              .footer p {
                  font-size: 12px;
                  color: #777;
                  margin: 0;
              }
                  .flex_container {
                    display: flex;
                    align-items: center;
                    gap: 10px;   
                  }
          </style>
      </head>
      <body>
      
      <!-- Company Information Section -->
      <div class="company-info">
          <h3><strong> Bumrungrad International Hospital</strong></h3>
          <p><strong>Phone:</strong> (+880) 1324418100</p>
          <p><strong>Phone:</strong> (+880) 1847284860</p>
          <p><strong>Email:</strong> support@bumrungraddiscover.com</p>
      </div>

      <!-- Main Content Section -->
      <div class="container">
          <h2>${mail_title || "Submitted Form"}</h2>
          <table>
              ${rowsHtml}
          </table>
      </div>

      <!-- Footer Section -->
      <div class="footer">
          <p>If you have any questions or need further assistance, please don't hesitate to contact us at support@bumrungraddiscover.com.</p>
          <p>Thank you for choosing Bumrungrad International Hospital!</p>
         <div class="flex_container">
          <div class="company-info">
            <h4 class="font-bold">Dhanmondi Office</h4>
            <p>Rupayan Prime Tower</p>
            <p>10th Floor (Lift-9)</p>
            <p>House:02,Road: 07, Green Road</p>
            <p>Dhanmondi, Dhaka-1205</p>
            <p>Phone: <a href="tel:+8801847284860"> +8801847284860 </a></p>
            <p>Phone: <a href="tel:+8801324-418100">+8801324418100</a></p>
        </div>
        <div class="company-info">
            <h4 class="font-bold">Uttara Office</h4>
            <p>Sector-13, House: 01</p>
            <p>Janapadd Road</p>
            <p>Opposite of Bata Showroom</p>
            <p></p>
            <p>Phone: <a href="tel:+8801601284300">+8801601284300</a></p>
            <p>Phone: <a href="tel:+8801977284861">+8801977284861</a></p>
        </div>
        <div class="company-info">
            <h4>Banani Office</h4>
            <p>Alamin Park Panorama (Beside Banani Post Office)
            <p>8th Floor (Lift-5)</p>
            <p>Road 13/A, Block - C, House 105</p>
            <p> Banani, Dhaka - 1213</p>
            <p>Phone: <a href="tel:+8801977284860">+8801977284860</a><br>
         Phone: <a href="tel:+8801847284862">+8801847284862</a></p>
    </div>
    <div class="company-info">
        <h4>Chattogram Office</h4>
        <p>Daar E Shahidi Building</p>
        <p>3rd Floor, (Lift-3)</p>
        <p>House: 69, Agrabad C/A</p>
        <p>Chattogram-4100</p>
        <p>Phone: <a href="tel:+8801847284863">+8801847284863</a></p>
        <p>Phone: <a href="tel:+8801847284862">+8801847284862</a></p>
    </div>
         </div>
      </div>

      </body>
      </html>
    `;
};

export const userMailBody = (data, mail_title) => {
    const fieldHtml = Object.keys(data)
        .filter((key) => data[key]) // Only include fields that have a value
        .map((key) => {
            // Capitalize the first letter of the key to use as the label
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            return `<p><span class="label">${label}:</span> <span class="value">${data[key]}</span></p>`;
        })
        .join(""); // Join all fields together into a single HTML string

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <title>${mail_title || "Submitted Form"}</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  max-width: 100%;
                  margin: 0;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h2 {
                  color: #333;
              }
              table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 10px;
              }
              table, th, td {
                  border: 1px solid #ddd;
                  padding: 8px;
              }
              th, td {
                  text-align: left;
              }
              .label {
                  font-weight: bold;
                  color: #333;
                  font-size: 12px;
              }
              .value {
                  margin-left: 10px;
                  color: #555;
                  font-size: 12px;
              }
              .company-info, .footer {
                  margin-top: 20px;
                  padding: 10px;
                  background-color: #f9f9f9;
                  border-radius: 8px;
              }
              .footer p {
                  font-size: 12px;
                  color: #777;
                  margin: 0;
              }
                  .flex_container {
                      display: flex;
                      align-items: center;
                      gap: 10px;
                  }
          </style>
      </head>
      <body>
      
      <!-- Company Information Section -->
      <div class="company-info">
          <h3><strong> Bumrungrad International Hospital</strong></h3>
          <p><strong>Phone:</strong> (+880) 1324418100</p>
          <p><strong>Phone:</strong> (+880) 1847284860</p>
          <p><strong>Email:</strong> support@bumrungraddiscover.com</p>
      </div>

      <!-- Main Content Section -->
      <div class="container">
          <h2>${mail_title || "Submitted Form"}</h2>
          <div >
              ${fieldHtml}
          </div>
      </div>

      <!-- Footer Section -->
      <div class="footer">
          <p>If you have any questions or need further assistance, please don't hesitate to contact us at support@bumrungraddiscover.com</p>
          <p>Thank you for choosing Bumrungrad International Hospital!</p>
         <div class="flex_container">
          <div class="company-info">
            <h4 class="font-bold">Dhanmondi Office</h4>
            <p>Rupayan Prime Tower</p>
            <p>10th Floor (Lift-9)</p>
            <p>House:02,Road: 07, Green Road</p>
            <p>Dhanmondi, Dhaka-1205</p>
            <p>Phone: <a href="tel:+8801847284860">+8801847284860</a></p>
            <p>Phone: <a href="tel:+8801324-418100">+8801324-418100</a></p>
        </div>
        <div class="company-info">
            <h4 class="font-bold">Uttara Office</h4>
            <p>Sector-13, House: 01</p>
            <p>Janapadd Road</p>
            <p>Opposite of Bata Showroom</p>
            <p></p>
            <p>Phone: <a href="tel:+8801601284300">+8801601284300</a></p>
            <p>Phone: <a href="tel:+8801977284861">+8801977284861</a></p>
        </div>
        <div class="company-info">
            <h4>Banani Office</h4>
            <p>Alamin Park Panorama (Beside Banani Post Office)
            <p>8th Floor (Lift-5)</p>
            <p>Road 13/A, Block - C, House 105</p>
            <p> Banani, Dhaka - 1213</p>
            <p>Phone: <a href="tel:+8801977284860">+8801977284860</a><br>
         Phone: <a href="tel:+8801847284862">+8801847284862</a></p>
    </div>
    <div class="company-info">
        <h4>Chattogram Office</h4>
        <p>Daar E Shahidi Building</p>
        <p>3rd Floor, (Lift-3)</p>
        <p>House: 69, Agrabad C/A</p>
        <p>Chattogram-4100</p>
        <p>Phone: <a href="tel:+8801847284863">+8801847284863</a></p>
        <p>Phone: <a href="tel:+8801847284862">+8801847284862</a></p>
    </div>

         </div>
      </div>

      </body>
      </html>
    `;
};


export const mailBodyMedicine = (data, mail_title) => {
    // Parse the medicines field as it's a string representation of an array
    let medicinesArray = [];
    if (data.medicines) {
        try {
            medicinesArray = JSON.parse(data.medicines);
        } catch (error) {
            console.error("Failed to parse medicines array", error);
        }
    }

    // Generate the medicines table if the array is valid
    const rowsHtml = medicinesArray.length > 0
        ? medicinesArray
            .map((medicine) => {
                if (Array.isArray(medicine) && medicine.length === 2) {
                    return `<tr><td class="label">Medicine Name:</td><td class="value">${medicine[0]}</td></tr>
                            <tr><td class="label">Quantity:</td><td class="value">${medicine[1]}</td></tr>`;
                }
                return ""; // Return empty string if format is incorrect
            })
            .join("")
        : "<tr><td colspan='2'>No medicines prescribed.</td></tr>";

    // Main HTML template
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <title>${mail_title || "Submitted Form"}</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  max-width: 100%;
                  margin: 0;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h2 {
                  color: #333;
              }
              table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 10px;
              }
              table, th, td {
                  border: 1px solid #ddd;
                  padding: 8px;
              }
              th, td {
                  text-align: left;
              }
              .label {
                  font-weight: bold;
                  color: #333;
                  font-size: 12px;
              }
              .value {
                  margin-left: 10px;
                  color: #555;
                  font-size: 12px;
              }
              .company-info, .footer {
                  margin-top: 20px;
                  padding: 10px;
                  background-color: #f9f9f9;
                  border-radius: 8px;
              }
              .footer p {
                  font-size: 12px;
                  color: #777;
                  margin: 0;
              }
              .flex_container {
                  display: flex;
                  align-items: center;
                  gap: 10px;
              }
          </style>
      </head>
      <body>
      
      <!-- Company Information Section -->
      <div class="company-info">
          <h3><strong> Bumrungrad International Hospital</strong></h3>
          <p><strong>Phone:</strong> (+880) 1324418100</p>
          <p><strong>Phone:</strong> (+880) 1847284860</p>
          <p><strong>Email:</strong> support@bumrungraddiscover.com</p>
      </div>

      <!-- Main Content Section -->
      <div class="container">
          <h2>${mail_title || "Submitted Form"}</h2>
          <table>
              <tr><td class="label">Name:</td><td class="value">${data.name || "N/A"}</td></tr>
              <tr><td class="label">Address:</td><td class="value">${data.address || "N/A"}</td></tr>
              <tr><td class="label">Phone Number:</td><td class="value">${data.phoneNumber || "N/A"}</td></tr>
              <tr><td class="label">Email:</td><td class="value">${data.email || "N/A"}</td></tr>
              <tr><td class="label">prescription:</td><td class="value">${data.prescription || "N/A"}</td></tr>
              <tr><td colspan="2"><strong>Medicines Details</strong></td></tr>
              ${rowsHtml}
          </table>
      </div>

      <!-- Footer Section -->
      <div class="footer">
          <p>If you have any questions or need further assistance, please don't hesitate to contact us at support@bumrungraddiscover.com</p>
          <p>Thank you for choosing Bumrungrad International Hospital!</p>
         <div class="flex_container">
          <div class="company-info">
            <h4 class="font-bold">Dhanmondi Office</h4>
            <p>Rupayan Prime Tower</p>
            <p>10th Floor (Lift-9)</p>
            <p>House:02,Road: 07, Green Road</p>
            <p>Dhanmondi, Dhaka-1205</p>
            <p>Phone: <a href="tel:+8801847284860"> +8801847284860 </a></p>
            <p>Phone: <a href="tel:+8801324418100">+8801324418100</a></p>
        </div>
        <div class="company-info">
            <h4 class="font-bold">Uttara Office</h4>
            <p>Sector-13, House: 01</p>
            <p>Janapadd Road</p>
            <p>Opposite of Bata Showroom</p>
            <p></p>
            <p>Phone: <a href="tel:+8801601284300">+8801601284300</a></p>
            <p>Phone: <a href="tel:+8801977284861">+8801977284861</a></p>
        </div>
        <div class="company-info">
            <h4>Banani Office</h4>
            <p>Alamin Park Panorama (Beside Banani Post Office)
            <p>8th Floor (Lift-5)</p>
            <p>Road 13/A, Block - C, House 105</p>
            <p> Banani, Dhaka - 1213</p>
            <p>Phone: <a href="tel:+8801977284860">+8801977284860</a><br>
         Phone: <a href="tel:+8801847284862">+8801847284862</a></p>
    </div>
    <div class="company-info">
        <h4>Chattogram Office</h4>
        <p>Daar E Shahidi Building</p>
        <p>3rd Floor, (Lift-3)</p>
        <p>House: 69, Agrabad C/A</p>
        <p>Chattogram-4100</p>
        <p>Phone: <a href="tel:+8801847284863">+8801847284863</a></p>
        <p>Phone: <a href="tel:+8801847284862">+8801847284862</a></p>
    </div>
         </div>
      </div>

      </body>
      </html>
    `;
};

 