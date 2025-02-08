(function(phoneNumber, logo, name,cmsg,wabtn,triggermsg) {
  document.write(`<div class="whatsapp-widget" style="position:fixed;bottom:20px;right:20px;display:flex;flex-direction:column;align-items:flex-end;z-index:1000;">
    <div class="chat-box" style="display:none;background:white;width:280px;padding:10px;box-shadow:0px 4px 6px rgba(0, 0, 0, 0.1);border-radius:8px;margin-bottom:10px;">
      <h2 style="font-size:16px;margin:0;display:flex;justify-content:space-between;">
        ${name} <span class="close-btn" style="cursor:pointer;">&times;</span>
      </h2>
      <p style="font-size:14px;color:#555;">${cmsg}</p>
      <a id="whatsapp-link" href="#" target="_blank" style="display:block;text-align:center;background:#25D366;color:white;padding:8px;border-radius:5px;text-decoration:none;">${wabtn}</a>
    </div>
    <button class="whatsapp-button" style="background-color:#25D366;color:white;border:none;padding:12px;border-radius:50%;cursor:pointer;box-shadow:0px 4px 6px rgba(0, 0, 0, 0.1);">
      <img src="${logo}" alt="WhatsApp" style="width:24px;height:24px;">
    </button>
  </div>`);
  
  let message=${triggermsg},
  whatsappLink=`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  document.getElementById("whatsapp-link").href = whatsappLink;
  
  document.querySelector(".whatsapp-button").addEventListener("click", function() {
    let chatBox = document.querySelector(".chat-box");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  });

  document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".chat-box").style.display = "none";
  });
})(window.phoneNumber, window.logo, window.name, window.cmsg, window.wabtn, window.triggermsg);
