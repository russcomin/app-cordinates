const welcome_modal = document.createElement('div');
    welcome_modal.id = 'welcome';

    let welcome_header = document.createElement('h2');
    let welcome_header_node = document.createTextNode('Welcome');
        welcome_header.appendChild(welcome_header_node);
    
    let welcome_desc = document.createElement('p');
    let welcome_desc_node = document.createTextNode('Hello! Welcome to my app,you can start using it right now,if you have some questions or need help just click on menu and you will find help');
        welcome_desc.appendChild(welcome_desc_node);


    this.welcome_close = document.createElement('a');
    this.welcome_close.id = 'welcomeclose';
    this.welcome_node = document.createTextNode('x');
    this.welcome_close.appendChild(welcome_node);

    welcome_modal.appendChild(this.welcome_close);


    welcome_modal.appendChild(welcome_header);
    welcome_modal.appendChild(welcome_desc);


    container.appendChild(welcome_modal);