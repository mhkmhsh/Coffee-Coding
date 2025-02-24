const websites = [
  {
    "Website": "CSS-Tricks",
    "Link": "https://css-tricks.com/",
    "iframe": "https://css-tricks.com/",
    "Title": "CSS Snippets and Utilities"
  },
  {
    "Website": "Smashing Magazine",
    "Link": "https://www.smashingmagazine.com/category/css/",
    "iframe": "https://www.smashingmagazine.com/category/css/",
    "Title": "CSS Snippets and Utilities"
  },
  {
    "Website": "CSS Deck",
    "Link": "https://cssdeck.com/",
    "iframe": "https://cssdeck.com/",
    "Title": "CSS Snippets and Utilities"
  },
  {
    "Website": "Bootstrap Hover Effects",
    "Link": "https://getbootstrap.com/",
    "iframe": "https://getbootstrap.com/",
    "Title": "CSS Snippets and Utilities"
  },
  {
    "Website": "Tutorial Republic",
    "Link": "https://www.tutorialrepublic.com/",
    "iframe": "https://www.tutorialrepublic.com/",
    "Title": "CSS Snippets and Utilities"
  },
  {
    "Website": "CodePen",
    "Link": "https://codepen.io/",
    "iframe": "https://codepen.io/",
    "Title": "CSS Snippets and Utilities"
  },
  {
    "Website": "CSS Grid Generator",
    "Link": "https://cssgrid-generator.netlify.app/",
    "iframe": "https://cssgrid-generator.netlify.app/",
    "Title": "CSS Snippets and Utilities"
  },
  {
    "Website": "CSS Reference",
    "Link": "https://cssreference.io/",
    "iframe": "https://cssreference.io/",
    "Title": "CSS Snippets and Utilities"
  },
  {
    "Website": "Navbar Gallery",
    "Link": "https://navbar.gallery/",
    "iframe": "https://navbar.gallery/",
    "Title": "CSS Snippets and Utilities"
  }
];

const gridContainer = document.getElementById("websiteGrid");

websites.forEach(website => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const iframe = document.createElement("iframe");
  iframe.src = website.iframe;

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = website.Website;

  const link = document.createElement("a");
  link.href = website.Link;
  link.target = "_blank"; // Open in new tab

  gridItem.appendChild(iframe);
  gridItem.appendChild(title);
  gridItem.appendChild(link);

  gridContainer.appendChild(gridItem);
});