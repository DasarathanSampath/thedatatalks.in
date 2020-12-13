(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{546:function(e,n,t){"use strict";t.r(n);var s=t(43),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("altLang"),e._v(" "),t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),t("p",[t("i",{staticStyle:{"font-size":"0.75em"}},[e._v(" "+e._s(e.$frontmatter.author)+" "+e._s(e.$frontmatter.date)+" ")])]),e._v(" "),t("p",[e._v("இந்த கட்டுரையில் குறிப்பிடப்பட்டுள்ள வடிவமைப்புகள்(Configurations) மற்றும் செயற்பாடுகள்(settings) Ubuntu இயக்கதளத்தில்(Operating system) Node.js வழங்கியுடன்(Server) சோதிக்கப்பட்டவை."),t("br"),e._v("\nNginx மறுதலை பதிலியாக(reverse proxy) பயன்படுத்தப்படுகிறது மற்றும் PM2 உற்பத்தி செயல்முறை நிர்வாகியாக(production process manager) பயன்படுத்தப்படுகிறது.")]),e._v(" "),t("p",[t("strong",[e._v("முன்நிபந்தனைகள்")]),t("br"),e._v("\nசரியான பதிப்பில் (version) Node.js, Nginx & PM2 ஐ நிறுவவும் (Install)."),t("br"),e._v("\nஇரண்டு NuxtJs செயலியை (apps) (example1 & example2) நிறுவவும்."),t("br"),e._v("\nமற்றும் இரண்டு செயற்களங்களுடன் (Domain) ("),t("code",[e._v("example1.com")]),e._v(" &"),t("code",[e._v("example2.com")]),e._v(") ஒரு பொது IPயும் (xxx.xx.xxx.xx) (IP - Internet Protocol -"),t("br"),e._v("\nஇணைய நெறிமுறை) தேவைப்படுகின்றன.")]),e._v(" "),t("h2",{attrs:{id:"nginx-சேவையக-தொகுப்பு-தொகுதிகள்-server-blocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-சேவையக-தொகுப்பு-தொகுதிகள்-server-blocks"}},[e._v("#")]),e._v(" Nginx சேவையக தொகுப்பு தொகுதிகள் (server blocks)")]),e._v(" "),t("p",[t("strong",[e._v("இரண்டு சேவையக தொகுதி கோப்புகளை (files) உருவாக்கவும்")])]),e._v(" "),t("div",{staticClass:"language-linux extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# எந்த உறையிலிருந்தும்(folder), \nNginx சேவையக தொகுதி கோப்புகளின் இருப்பிடத்திற்குச் செல்லவும்\n$ cd /etc/nginx/sites-available/\n\n# சேவையக தொகுப்பு கோப்புகளை \nஉருவாக்கி default கோப்பை நீக்கவும் \n$ ls > example1.com\n$ ls > example2.com\n$ rm default\n")])])]),t("p",[t("strong",[e._v("சேவையக தொகுப்பு  கோப்புகளைத் திருத்துதல்")]),t("br"),e._v("\nNginx சேவையக தொகுதி அமைப்புகளில் சமீபத்திய மாற்றங்களுக்கு "),t("a",{attrs:{href:"https://nuxtjs.org/faq/nginx-proxy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nuxtjs.org/faq/nginx-proxy/"),t("OutboundLink")],1),e._v(" ஐப் படிக்கவும்."),t("br"),e._v(" "),t("code",[e._v("http://127.0.0.1:3000")]),e._v(" வலை வாசலில் (port) "),t("code",[e._v("example1.com")]),e._v(" இயங்கும்   & "),t("code",[e._v("http://127.0.0.1:4000")]),e._v(" வலை வாசலில் (port) "),t("code",[e._v("example2.com")]),e._v(" இயங்கும்.")]),e._v(" "),t("div",{staticClass:"language-linux extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# nano editorஇல் கோப்பைத் திறக்கவும்\n$sudo nano example1.com\n# கோப்புக்குள் கீழே உள்ள வடிவமைப்புகளை உள்ளிடவும்\nmap $sent_http_content_type $expires {\n"text/html"                 epoch;\n"text/html; charset=utf-8"  epoch;\ndefault                     off;\n}\nserver {\nlisten          80;# the port nginx is listening on\nserver_name     example1.com www.example1.com;\n# setup your domain here\ngzip            on;\ngzip_types      text/plain application/xml \n                text/css application/javascript;\ngzip_min_length 1000;\nlocation / {\n expires $expires;\n proxy_redirect          off;\n proxy_set_header Host       $host;\n proxy_set_header X-Real-IP  $remote_addr;\n proxy_set_header X-Forwarded-For    \n                    $proxy_add_x_forwarded_for;\n proxy_set_header X-Forwarded-Proto  $scheme;\n proxy_read_timeout          1m;\n proxy_connect_timeout       1m;\n proxy_pass http://127.0.0.1:3000; \n    #set the address of the Node.js instance here\n}\n}\n# கோப்பை சேமித்து மூடவும்\n# இதே போன்று example2.com கோப்பை திறந்து \nதேவையான வடிவமைப்புகளை சேர்த்து மூடவும்.\n# Server_name & proxy_pass ஐ முறையே \n"example2.com www.example2.com" & "http://127.0.0.1:4000" உடன் \nமாற்றுவதை உறுதிப்படுத்தவும்.\n\n# sites-available கோப்புறையிலிருந்து sites-enabled \nகோப்புறைக்கு சேவையக தொகுதிகளுக்கான குறியீட்டு இணைப்புகளை \nஉருவாக்கவும்\n$ sudo ln -s /etc/nginx/sites-available/example1.com \n             /etc/nginx/sites-enabled/\n$ sudo ln -s /etc/nginx/sites-available/example2.com \n             /etc/nginx/sites-enabled/\n\n# sites-enabled கோப்புறையிலிருந்து default கோப்பை நீக்கு\n$ sudo rm /etc/nginx/sites-enabled/default\n')])])]),t("p",[t("strong",[e._v("Nginx சேவையகத்தைத் தொடங்கவும்")])]),e._v(" "),t("div",{staticClass:"language-linux extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# தொடங்க மற்றும் நிறுத்த nginx\n$ sudo service nginx start\n$ sudo service nginx stop\n\n# ஏதேனும் பிழைகள் இருந்தால் nginx ஐ சோதிக்க\n$ sudo nginx -t\n\n# Nginx ஐ மறுதொடக்கம் செய்ய\n$ sudo systemctl restart nginx\n\n")])])]),t("p",[t("strong",[e._v("PM2 வடிவமைப்புகள்")]),t("br"),e._v("\nகீழேயுள்ள கோப்புறை இடத்தில் இரண்டு nuxt செயலிகள் நிறுவப்பட்டதாகக் கருதப்படுகிறது"),t("br"),e._v("\n/home/user/examle1/"),t("br"),e._v("\n/home/user/example2/")]),e._v(" "),t("div",{staticClass:"language-linux extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# PM2 ecosystem.config.js கோப்பை உருவாக்கவும். \n\"PM2 init\" கட்டளை ecosystem.config.js கோப்பை உருவாக்குகிறது\n$ cd /home/user/\n$ sudo PM2 init\n\n# nano எடிட்டரில் ecosystem.config.js கோப்பைத் திருத்தவும்\n$ sudo nano ecosystem.config.js\n# கீழே உள்ள அமைப்புகளை உள்ளிடவும்\nmodule.exports = {\napps : [\n {\tname: 'example1',\n    port: 3000,\n\texec_mode:'cluster',\n\tscript: \"./node_modules/nuxt/bin/nuxt.js\",\n\tcwd:'./example1/',\n\targs: 'start',\n},\n{\tname: 'example2',\n    port: 4000,\n    exec_mode:'cluster',\n    script: \"./node_modules/nuxt/bin/nuxt.js\",\n    cwd:'./example2/',\n    args: 'start',\n}\n]\n}\n# கோப்பை சேமித்து மூடவும்\n")])])]),t("p",[t("strong",[e._v("செயலிகளை தொடங்கவும்")])]),e._v(" "),t("p",[e._v("கீழேயுள்ள கட்டளை example1 & example2 செயலிகளைத் தொடங்க உதவும். வெற்றிகரமாக உள்ளமைத்துள்ள செயலிகளை, நீங்கள் உலாவியில் "),t("code",[e._v("http://example1.com")]),e._v(" &"),t("code",[e._v("http://example2.com")]),e._v(" என சோதிக்கலாம்.")]),e._v(" "),t("div",{staticClass:"language-linux extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ PM2 start\n")])])]),t("p",[e._v("மேலே உள்ள கட்டுரைக்கான குறிப்பு மூலம்:"),t("br"),e._v(" "),t("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"https://nuxtjs.org/faq/nginx-proxy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nuxtjs.org/faq/nginx-proxy/"),t("OutboundLink")],1)])],1)}),[],!1,null,null,null);n.default=a.exports}}]);