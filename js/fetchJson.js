fetch("./data.json")
  .then((response) => response.json())
  .then((extensions) => {
    const extensionsList = document.querySelector(".extensions-list");

    for (const extension of extensions) {
      const newExtensionCard = document.createElement("li"),
        extensionLogo = extension.logo,
        extensionName = extension.name,
        extensionDesc = extension.description,
        isActive = extension.isActive;

      newExtensionCard.classList.add("extensions-list-item");

      newExtensionCard.innerHTML = `
      <section class="card-content">
        <img src="${extensionLogo}" alt="logo">
        <div class="extension-info">
          <h2>${extensionName}</h2>
          <p>${extensionDesc}</p>
        </div>
      </section>

      <section class="flex-space-between">
        <button>
          Remove
        </button>
        <button class="button-toggle">
          
        </button>
      </section>
`;

      extensionsList.appendChild(newExtensionCard);
    }
  });
