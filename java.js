// Global functions to manage contacts

function validateInput(name, phone) {
    return name.trim() !== '' && phone.trim() !== '';
  }
  
  function createContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const errorMessage = document.getElementById('error-message');
  
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
  
    if (!validateInput(name, phone)) {
      errorMessage.textContent = "Får ej skapa tom konkakt.";
      return;
    }
  
    errorMessage.textContent = ""; // Clear error
    addContactToList(name, phone);
  
    // Clear input fields
    nameInput.value = '';
    phoneInput.value = '';
  }
  
  function addContactToList(name, phone) {
    const contactList = document.getElementById('contact-list');
  
    const contactItem = document.createElement('li');
    contactItem.classList.add('contact-item');
  
    const nameField = document.createElement('input');
    nameField.type = 'text';
    nameField.value = name;
    nameField.setAttribute('readonly', true);
  
    const phoneField = document.createElement('input');
    phoneField.type = 'text';
    phoneField.value = phone;
    phoneField.setAttribute('readonly', true);
  
    const editButton = document.createElement('button');
    editButton.textContent = "Ändra";
    editButton.classList.add('button');
    editButton.onclick = () => editContact(contactItem, nameField, phoneField);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Radera";
    deleteButton.classList.add('button');
    deleteButton.onclick = () => deleteContact(contactItem);
  
    contactItem.appendChild(nameField);
    contactItem.appendChild(phoneField);
    contactItem.appendChild(editButton);
    contactItem.appendChild(deleteButton);
    contactList.appendChild(contactItem);
  }
  
  function editContact(contactItem, nameField, phoneField) {
    const isEditable = nameField.hasAttribute('readonly');
  
    if (isEditable) {
      // Allow editing
      nameField.removeAttribute('readonly');
      phoneField.removeAttribute('readonly');
    } else {
      const errorMessage = document.getElementById('error-message');
  
      if (!validateInput(nameField.value, phoneField.value)) {
        errorMessage.textContent = "Cannot save an empty contact.";
        return;
      }
  
      // Save changes
      nameField.setAttribute('readonly', true);
      phoneField.setAttribute('readonly', true);
      errorMessage.textContent = ""; // Clear error
    }
  }
  
  function deleteContact(contactItem) {
    const contactList = document.getElementById('contact-list');
    contactList.removeChild(contactItem);
  }
  
  function deleteAllContacts() {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = ''; // Clear all contacts
  }
  