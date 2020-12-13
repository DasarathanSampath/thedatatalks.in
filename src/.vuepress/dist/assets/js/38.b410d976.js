(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{481:function(e,t,n){"use strict";n.r(t);var s=n(43),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("altLang"),e._v(" "),n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),n("p",[n("i",{staticStyle:{"font-size":"0.75em"}},[e._v(" "+e._s(e.$frontmatter.author)+" "+e._s(e.$frontmatter.date)+" ")])]),e._v(" "),n("p",[e._v("The configurations & settings mentioned in this article were tested on Ubuntu operating system with"),n("br"),e._v("\nNode.js server. Nginx is used as a reverse proxy & PM2 is used as a production process manager.")]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("Install Node.js, Nginx & PM2 with the proper version."),n("br"),e._v("\nInstall two NuxtJs applications example1 & example2."),n("br"),e._v("\nAnd we have two domains "),n("code",[e._v("example1.com")]),e._v(" & "),n("code",[e._v("example2.com")]),e._v(" with one public IP xxx.xx.xxx.xx.")]),e._v(" "),n("h2",{attrs:{id:"nginx-server-blocks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-server-blocks"}},[e._v("#")]),e._v(" Nginx server blocks")]),e._v(" "),n("p",[n("strong",[e._v("Create two server block files")])]),e._v(" "),n("div",{staticClass:"codeBlocks"},[n("div",{staticClass:"language-linux extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# From any folder, go to \nNginx server block files location\n$ cd /etc/nginx/sites-available/\n\n# Create server block files & delete default file\n$ ls > example1.com\n$ ls > example2.com\n$ rm default\n\n")])])])]),e._v(" "),n("h2",{attrs:{id:"edit-server-block-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#edit-server-block-files"}},[e._v("#")]),e._v(" Edit server block files")]),e._v(" "),n("p",[e._v("Read "),n("a",{attrs:{href:"https://nuxtjs.org/faq/nginx-proxy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nuxtjs.org/faq/nginx-proxy/"),n("OutboundLink")],1),e._v(" for the latest changes on Nginx server block settings."),n("br"),e._v(" "),n("code",[e._v("example1.com")]),e._v(" will run on port   "),n("code",[e._v("http://127.0.0.1:3000")]),e._v(" & "),n("code",[e._v("example2.com")]),e._v(" will run on port "),n("code",[e._v("http://127.0.0.1:4000")]),e._v(".")]),e._v(" "),n("div",{staticClass:"codeBlocks"},[n("div",{staticClass:"language-linux extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\n# Open the file in the nano editor\n$sudo nano example1.com\n# Enter the below configurations inside the file\nmap $sent_http_content_type $expires {\n"text/html"                 epoch;\n"text/html; charset=utf-8"  epoch;\ndefault                     off;\n}\nserver {\nlisten          80;# the port nginx is listening on\nserver_name     example1.com www.example1.com;\n# setup your domain here\ngzip            on;\ngzip_types      text/plain application/xml \n                text/css application/javascript;\ngzip_min_length 1000;\nlocation / {\n expires $expires;\n proxy_redirect          off;\n proxy_set_header Host       $host;\n proxy_set_header X-Real-IP  $remote_addr;\n proxy_set_header X-Forwarded-For    \n                    $proxy_add_x_forwarded_for;\n proxy_set_header X-Forwarded-Proto  $scheme;\n proxy_read_timeout          1m;\n proxy_connect_timeout       1m;\n proxy_pass http://127.0.0.1:3000; \n    #set the address of the Node.js instance here\n}\n}\n# Save & close the file\n# Similary open example2.com file, \nenter the above configurations, \nsave & close the file.\n# Be sure to changes server_name & proxy_pass with \n"example2.com www.example2.com" \n& "http://127.0.0.1:4000" respectively\n\n# Create symbolic links for server blocks from \nsites-available folder to sites-enabled folder\n$ sudo ln -s /etc/nginx/sites-available/example1.com \n             /etc/nginx/sites-enabled/\n$ sudo ln -s /etc/nginx/sites-available/example2.com \n             /etc/nginx/sites-enabled/\n\n# Delete default file from sites-enabled folder\n$ sudo rm /etc/nginx/sites-enabled/default\n\n')])])])]),e._v(" "),n("h2",{attrs:{id:"start-nginx-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-nginx-server"}},[e._v("#")]),e._v(" Start Nginx server")]),e._v(" "),n("div",{staticClass:"codeBlocks"},[n("div",{staticClass:"language-linux extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# To start & stop nginx\n$ sudo service nginx start\n$ sudo service nginx stop\n\n# To test nginx for any errors\n$ sudo nginx -t\n\n# To restart nginx\n$ sudo systemctl restart nginx\n\n")])])])]),e._v(" "),n("h2",{attrs:{id:"pm2-configuarions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pm2-configuarions"}},[e._v("#")]),e._v(" PM2 configuarions")]),e._v(" "),n("p",[e._v("Assumed two nuxt application installed in the below folder location"),n("br"),e._v("\n/home/user/exapmle1/"),n("br"),e._v("\n/home/user/example2/")]),e._v(" "),n("div",{staticClass:"codeBlocks"},[n("div",{staticClass:"language-linux extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# Create PM2 ecosystem.config.js file. \n#\"PM2 init\" command creates ecosystem.config.js file\n$ cd /home/user/\n$ sudo PM2 init\n\n#Edit ecosystem.config.js file in nano editor\n$ sudo nano ecosystem.config.js\n# Enter the below settings\nmodule.exports = {\napps : [\n {\tname: 'example1',\n    port: 3000,\n\texec_mode:'cluster',\n\tscript: \"./node_modules/nuxt/bin/nuxt.js\",\n\tcwd:'./example1/',\n\targs: 'start',\n},\n{\tname: 'example2',\n    port: 4000,\n    exec_mode:'cluster',\n    script: \"./node_modules/nuxt/bin/nuxt.js\",\n    cwd:'./example2/',\n    args: 'start',\n}\n]\n}\n# Save & close the file\n")])])])]),e._v(" "),n("h2",{attrs:{id:"start-applications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-applications"}},[e._v("#")]),e._v(" Start applications")]),e._v(" "),n("p",[e._v("The below command will start example1 & example2 applications."),n("br"),e._v("\nYou have successfully configured and you can test"),n("br"),e._v("\nas "),n("code",[e._v("http://example1.com")]),e._v(" & "),n("code",[e._v("http://example2.com")]),e._v(" in the browser.")]),e._v(" "),n("div",{staticClass:"codeBlocks"},[n("div",{staticClass:"language-linux extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ PM2 start\n")])])])]),e._v(" "),n("p",[e._v("Reference for the above article:"),n("br"),e._v(" "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04"),n("OutboundLink")],1),n("br"),e._v(" "),n("a",{attrs:{href:"https://nuxtjs.org/faq/nginx-proxy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nuxtjs.org/faq/nginx-proxy/"),n("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=a.exports}}]);