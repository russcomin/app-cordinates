let about_modal = document.createElement('div');
    about_modal.id = 'about';


    this.close = 'x';
    
    this.about_close = document.createElement('a');
    this.about_close.id = 'aboutclose';
    this.about_node = document.createTextNode(this.close);
    this.about_close.appendChild(this.about_node);
    

    about_modal.appendChild(this.about_close);

    this.header = document.createElement('h2');
    this.header_text = document.createTextNode('About');
    this.header.appendChild(this.header_text);

    this.desc = document.createElement('p');
    this.desc_text = document.createTextNode('This web app is made for educational purposes,App is made in pure javascript,without any framework or other tool,I used only Google Maps Api,If you have some problems with app you can contact us');
    this.desc.appendChild(this.desc_text);
    

    about_modal.appendChild(this.header);
    about_modal.appendChild(this.desc);



    const container = document.getElementById("container");
            container.appendChild(about_modal);
    