// Progressive enhancement only: the site works fully without this file.
(function () {
  // Click an article image to view it full size in an overlay.
  var dialog;
  document.addEventListener("click", function (e) {
    var link = e.target.closest("a[data-lightbox]");
    if (!link || e.metaKey || e.ctrlKey || e.shiftKey || !window.HTMLDialogElement) return;
    e.preventDefault();
    if (!dialog) {
      dialog = document.createElement("dialog");
      dialog.className = "lightbox";
      dialog.innerHTML = '<img alt="">';
      dialog.addEventListener("click", function () { dialog.close(); });
      document.body.appendChild(dialog);
    }
    var img = dialog.querySelector("img");
    img.src = link.href;
    img.alt = (link.querySelector("img") || {}).alt || "";
    dialog.showModal();
  });

  // Copy buttons on code blocks.
  if (!navigator.clipboard) return;
  document.querySelectorAll(".code").forEach(function (block) {
    var btn = document.createElement("button");
    btn.className = "code__copy";
    btn.type = "button";
    btn.textContent = "copy";
    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(block.querySelector("pre").innerText).then(function () {
        btn.textContent = "copied ✓";
        setTimeout(function () { btn.textContent = "copy"; }, 1600);
      });
    });
    block.querySelector(".code__bar").appendChild(btn);
  });
})();
