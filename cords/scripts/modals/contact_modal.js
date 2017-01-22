const contact_modal = document.createElement('div');
    contact_modal.id = 'contact';


    this.close = 'x';
    
    this.contact_close = document.createElement('a');
    this.contact_close.id = 'contactclose';
    this.contact_node = document.createTextNode(this.close);
    this.contact_close.appendChild(this.contact_node);


    let contact_header = document.createElement('h2');
    let contact_h_text = document.createTextNode('Contact');
          contact_header.appendChild(contact_h_text);
    
    let contact_p_text = document.createElement('p');
    let contact_p_node = document.createTextNode('You can contact me by sending email on joca.belic@gmail.com,Also you can contact me on facebook,Jovan Belic');
    contact_p_text.appendChild(contact_p_node);

    contact_modal.appendChild(this.contact_close);
    contact_modal.appendChild(contact_header);
    contact_modal.appendChild(contact_p_text);
    container.appendChild(contact_modal);