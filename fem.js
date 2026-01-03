const extensionWrapper = document.querySelector(".js-extensions-wrapper");
const themeToggleBtn = document.querySelector(".toggle-theme-btn");
const image = document.querySelector(".image");
const body = document.querySelector(".body");
const delBtn = document.querySelector(".remove-btn");
const gridExtension = document.querySelector(".grid-extension");
const navBar = document.querySelector(".navbar");
const activeBtn = document.querySelector('.Active-btn');
const inactiveBtn = document.querySelector('.Inactive-btn');
const allBtn = document.querySelector('.all-btn');
const extensions = [
  {
    image: "./assets/images/logo-console-plus.svg",
    name: "Dev Lens",
    info: "Quickly inspect page layouts and visualize elements boundaries",
    active: false
  },
  {
    image: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    info: "Instantly analyze and copy CSS from any webpage element.",
    active: false
  },
  {
    image: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    info: "Optimizes browser resource usage to accelerate page loading.",
    active: false
  },
  {
    image: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    info: "Formats, validates and prettifies JSON responses in-browser.",
    active: false
  },
  {
    image: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    info: "Organizes browser tabs into groups and sessions.",
    active: false
  },
  {
    image: "./assets/images/logo-viewport-buddy.svg",
    name: "Viewport Buddy",
    info: "Simulates various screen resolutions directly within the browser.",
    active: false
  },
  {
    image: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    info: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    active: false
  },
  {
    image: "./assets/images/logo-console-plus.svg",
    name: "GridGuides",
    info: "Overlay cistomizable grids and alignment guides on any webpage",
    active: false
  },
  {
    image: "./assets/images/logo-console-plus.svg",
    name: "Palette Picker",
    info: "Instantly extracts color palettes from any webpage",
    active: false
  },
  {
    image: "./assets/images/logo-link-checker.svg",
    name: "LInkChecker",
    info: "Scans and highlights broken links on any page.",
    active: false
  },
  {
    image: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshots",
    info: "Capture and export DOM structures quickly.",
    active: false
  },
  {
    image: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    info: "Enhanced developer console with advanced filtering and logging.",
    active: false
  },
];

allBtn.addEventListener("click", () => {
  renderExtensions(extensions);
});


image.addEventListener("click", () => {
  if (image.src && image.src.includes("/assets/images/icon-sun.svg")) {
    image.src = "./assets/images/icon-moon.svg";
    body.classList.replace("dark-theme", "light-theme");
  } else {
    image.src = "./assets/images/icon-sun.svg";
    body.classList.replace("light-theme", "dark-theme");
  }
});

function renderExtensions(list = extensions) {
  if (list.length === 0) {
    extensionWrapper.innerHTML =
      `<div class="zero-extension">No available extensions</div>`;
    return;
  }

  extensionWrapper.innerHTML = list.map((extension, index) => `
    <div class="grid-extension">
      <div class="inner-grid-extension">
        <div>
          <img src="${extension.image}">
        </div>
        <div>
          <h3>${extension.name}</h3>
          <span>${extension.info}</span>
        </div>
      </div>

      <div class="bottom-grid-extension">
        <button type="button" class="remove-btn">Remove</button>
        <label class="switch">
          <input 
            type="checkbox"
            class="toggle"
            data-index="${index}"
            ${extension.active ? "checked" : ""}
          >
          <span class="slider"></span>
        </label>
      </div>
    </div>
  `).join("");
}

renderExtensions();
const checkboxes = document.querySelectorAll(".toggle");
const statusText = document.getElementById("statusText");

extensionWrapper.addEventListener("change", (e) => {
  if (!e.target.classList.contains("toggle")) return;

  const index = e.target.dataset.index;
  extensions[index].active = e.target.checked;
});

activeBtn.addEventListener("click", () => {
  const activeExtensions = extensions.filter(ext => ext.active);
  renderExtensions(activeExtensions);
});

inactiveBtn.addEventListener("click", () => {
  const inactiveExtensions = extensions.filter(ext => !ext.active);
  renderExtensions(inactiveExtensions);
});




extensionWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    extensions.splice(index, 1);
    e.stopPropagation();
    renderExtensions();
  }
});
