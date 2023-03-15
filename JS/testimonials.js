let testimonialData = []

fetch("https://api.npoint.io/da6d0233ad5457091a77")
  .then((response) => response.json())
  .then((data) => {
    testimonialData = data;
    allTestimonials();
  })
  .catch((error) => console.error(error));

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach((item) => {
    testimonialHTML += `<div style="border: 1px #fff solid; width: 20rem; padding: 10px; margin: 10px; background-color: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
                     <img style="width:full; height:10rem; object-fit: cover;" src="${item.image}" class="profile" />
                     <p class="review">"${item.review}"</p>
                     <p class="author">- ${item.author}</p>
                     <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                 </div>`;
  });
  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter((item) => {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h1> Data not found! </h1>`;
  } else {
    testimonialFiltered.forEach((item) => {
      testimonialHTML += `<div style="border: 1px #fff solid; width: 20rem; padding: 10px; margin: 10px; background-color: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);"">
                <img style="width:full; height:10rem; object-fit: cover;" src="${item.image}" class="profile" src="${item.image}" class="profile" />
                <p class="review">"${item.review}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>`;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}