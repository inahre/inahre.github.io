const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.add('hidden'));

    button.classList.add('active');
    document.getElementById(button.dataset.target).classList.remove('hidden');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.add('hidden'));

      button.classList.add('active');
      document.getElementById(button.dataset.target).classList.remove('hidden');
    });
  });

  const thumbs = document.querySelectorAll(".thumb");
  const galleries = document.querySelectorAll(".ai-project, .sub-gallery");
  const thumbnailContainers = document.querySelectorAll(".ai-thumbnails");
  const returnButtons = document.querySelectorAll(".return-btn");

  // On thumbnail click
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project");
      const projectGallery = document.getElementById(projectId);

      thumbnailContainers.forEach(t => t.classList.add("hidden"));
      galleries.forEach(g => g.classList.add("hidden"));
      if (projectGallery) projectGallery.classList.remove("hidden");

      projectGallery.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // On return button click
  returnButtons.forEach(button => {
    button.addEventListener("click", () => {
      galleries.forEach(g => g.classList.add("hidden"));
      thumbnailContainers.forEach(t => t.classList.remove("hidden"));
    });
  });
});

