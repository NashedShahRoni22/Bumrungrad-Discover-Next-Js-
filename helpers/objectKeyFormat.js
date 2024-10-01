export const formatKeys = (obj) => {
  const formattedObj = {};
  for (const key in obj) {
    // Add space before uppercase letters
    let formattedKey = key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
    // Capitalize the first character
    formattedKey = formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);
    formattedObj[formattedKey] = obj[key];
  }
  return formattedObj;
};


// Specify the keys you want to remove

// const fields = {
//   inquery: '',
//   doctorName: 'Dr. Smith',
//   treatmentInterest: '',
//   question: 'What is the treatment?',
//   hospitalNumber: null,
//   firstName: 'John',
//   lastName: 'Doe',
//   email: '',
//   phoneNumber: undefined,
//   birtDate: '',
//   gender: 'Male',
//   citizenship: '',
//   country: ''
// };

// Function to format keys and remove specific keys
export const formatKeysWithRemoveKeys = (obj, keysToRemove) => {
  const formattedObj = {};
  for (const key in obj) {
    // Skip the keys that need to be removed
    if (keysToRemove.includes(key)) {
      continue;
    }

    // Format the key (handle snake_case, camelCase, and capitalize first character)
    let formattedKey = key
      .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/([A-Z])/g, ' $1') // Add space before uppercase letters
      .trim(); // Trim any extra spaces
    
    // Capitalize the first character
    formattedKey = formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);
    
    // Add formatted key-value pair to the result object
    formattedObj[formattedKey] = obj[key];
  }
  return formattedObj;
};

// Specify the keys you want to remove
// const keysToRemove = ['email', 'birtDate', 'phoneNumber'];

// const formattedFields = formatKeys(fields, keysToRemove);

