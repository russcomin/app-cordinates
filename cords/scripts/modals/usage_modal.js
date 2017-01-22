let usage_modal = document.createElement('div');
    usage_modal.id = 'usage';

    this.close = 'x';
    
    this.usage_close = document.createElement('a');
    this.usage_close.id = 'usageclose';
    this.usage_node = document.createTextNode(this.close);
    this.usage_close.appendChild(this.usage_node);
    

    usage_modal.appendChild(this.usage_close);    

    this.usage_header = document.createElement('h2');
    this.usage_h_node = document.createTextNode('How to use app');
    this.usage_header.appendChild(this.usage_h_node);

    this.usage_text = document.createElement('p');
    this.usage_t_node = document.createTextNode('This app is very simple to use,its little pointless but it can be fun,actually you just need to enter latitude and longitude and hit search,then you will get that place on the map,how easy is that?');
    this.usage_text.appendChild(this.usage_t_node);

    usage_modal.appendChild(this.usage_header);
    usage_modal.appendChild(this.usage_text);
 
        container.appendChild(usage_modal);