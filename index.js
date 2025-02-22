$(document).ready(function () {
  const allowedOrigins = [
    "http://localhost:5500",
    "http://localhost:8080",
    "https://auth.800ambi.com",
  ];

  let validParent = false;
  if (window.top !== window.self) {
    const parentUrl = new URL(document.referrer);
    if (allowedOrigins.includes(parentUrl.origin)) {
      validParent = true;
    }
  }

  if (!validParent) {
    $(".glass-card").html("<h1>Access Denied</h1>");
    return;
  }

  const testimonials = [
    {
      name: "John Doe",
      title: "Software Engineer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel orci eget quam aliquet cursus ut sed sapien.",
      image: "https://neel-raval.github.io/leftIframe/assets/arm.jpeg",
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel orci eget quam aliquet cursus ut sed sapien.",
      image: "https://neel-raval.github.io/leftIframe/assets/av.jpeg",
    },
    {
      name: "Michael Brown",
      title: "UX Designer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel orci eget quam aliquet cursus ut sed sapien.",
      image: "https://neel-raval.github.io/leftIframe/assets/nk.jpeg",
    },
  ];

  testimonials.forEach((testimonial, index) => {
    const activeClass = index === 0 ? "active" : "";
    const carouselItem = `
      <div class="carousel-item ${activeClass}">
        <div class="row mb-3 align-items-center">
          <div class="col-3 d-flex justify-content-center">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="avatar">
          </div>
          <div class="col-9">
            <h5>${testimonial.name}</h5>
            <p class="text-dark mb-0">${testimonial.title}</p>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <p>${testimonial.content}</p>
          </div>
        </div>
      </div>`;
    const indicatorItem = `<li data-target="#testimonial-carousel" data-slide-to="${index}" class="${activeClass}"></li>`;

    $(".carousel-inner").append(carouselItem);
    $(".carousel-indicators").append(indicatorItem);
  });

  $(".carousel").carousel({
    interval: 5000,
    ride: "carousel",
    wrap: true,
  });
});
