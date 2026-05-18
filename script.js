const benefits = [
  {
    title: "Your Schedule, Your Rules",
    copy:
      "Depart when you want, not when the airline decides. Arrive minutes before departure and fly on your schedule - with total flexibility to adjust plans as needed.",
    icon: "assets/icon-schedule.png",
  },
  {
    title: "Safety First",
    copy:
      "We partner exclusively with operators that meet the industry's highest international safety standards, ensuring uncompromising safety and reliability.",
    icon: "assets/icon-safety.png",
  },
  {
    title: "Complete Privacy",
    copy:
      "Your aircraft is your personal space. Every flight ensures absolute comfort, confidentiality, and peace of mind from takeoff to landing.",
    icon: "assets/icon-privacy.png",
  },
  {
    title: "Tailored Experience",
    copy:
      "From aircraft selection and onboard catering to cabin configuration and special requests, your journey is designed around how you like to travel.",
    icon: "assets/icon-tailored.png",
  },
  {
    title: "Access Anywhere",
    copy:
      "Reach thousands of airports worldwide - including destinations inaccessible to commercial airlines. Land closer to your final destination and reduce travel time.",
    icon: "assets/icon-access.png",
  },
  {
    title: "Beyond Private Jets",
    copy:
      "We arrange helicopter transfers, seaplanes, and specialty aircraft solutions to create seamless door-to-destination journeys - no matter how unique the requirement.",
    icon: "assets/icon-beyond.png",
  },
];

const jetClasses = [
  {
    name: "Turboprop",
    image: "assets/jet-turboprop.png",
    flightTime: "2h 00m",
    passengers: "6-9",
    cabinHeight: "145 cm",
    suitcases: "6",
    hourlyRate: "from $4,350",
  },
  {
    name: "Entry Level",
    image: "assets/jet-entry-level.png",
    flightTime: "2h 00m",
    passengers: "4-6",
    cabinHeight: "147 cm",
    suitcases: "4",
    hourlyRate: "from $4,900",
  },
  {
    name: "Light",
    image: "assets/jet-light.png",
    flightTime: "3h 00m",
    passengers: "6-8",
    cabinHeight: "150 cm",
    suitcases: "5",
    hourlyRate: "from $5,450",
  },
  {
    name: "Super Light",
    image: "assets/jet-super-light.png",
    flightTime: "3h 30m",
    passengers: "6-8",
    cabinHeight: "175 cm",
    suitcases: "6",
    hourlyRate: "from $7,650",
  },
  {
    name: "Midsize",
    image: "assets/jet-midsize.png",
    flightTime: "4h 30m",
    passengers: "6-9",
    cabinHeight: "155 cm",
    suitcases: "7",
    hourlyRate: "from $10,900",
  },
  {
    name: "Super Midsize",
    image: "assets/jet-super-midsize.png",
    flightTime: "6h 00m",
    passengers: "8-10",
    cabinHeight: "188 cm",
    suitcases: "8",
    hourlyRate: "from $10,900",
  },
  {
    name: "Heavy",
    image: "assets/jet-heavy.png",
    flightTime: "7h 00m",
    passengers: "10-16",
    cabinHeight: "188 cm",
    suitcases: "10",
    hourlyRate: "from $14,150",
  },
  {
    name: "Ultra Long Range",
    image: "assets/jet-vip-airliner.png",
    flightTime: "12h 00m",
    passengers: "12-16",
    cabinHeight: "188 cm",
    suitcases: "12",
    hourlyRate: "from $16,350",
  },
  {
    name: "VIP Airliner",
    image: "assets/jet-ultra-long-range.png",
    flightTime: "12h 00m",
    passengers: "16-50",
    cabinHeight: "210 cm",
    suitcases: "30",
    hourlyRate: "from $27,250",
  },
];

const bookingSteps = [
  {
    title: "Submit route request",
    copy: "Choose your journey and share your preferred route, schedule, and passenger count.",
  },
  {
    title: "Speak with concierge",
    copy: "Tell us your cabin, catering, luggage, and transfer preferences so the trip is tailored.",
  },
  {
    title: "Get trip estimation",
    copy: "Receive curated aircraft options with indicative pricing and the best-fit itinerary.",
  },
  {
    title: "Ready to book?",
    copy: "Confirm the preferred aircraft and we coordinate the flight details from departure to arrival.",
  },
];

const routes = [
  {
    category: "Entry Level",
    fromCode: "EGKB",
    fromCity: "London",
    toCode: "LFPB",
    toCity: "Paris",
    flightTime: "0h 55m",
    price: "$6,500",
  },
  {
    category: "Light",
    fromCode: "LPPT",
    fromCity: "Lisbon",
    toCode: "LIRA",
    toCity: "Rome",
    flightTime: "2h 55m",
    price: "$17,600",
  },
  {
    category: "Midsize",
    fromCode: "LTBA",
    fromCity: "Istanbul",
    toCode: "EGCC",
    toCity: "Manchester",
    flightTime: "3h 50m",
    price: "$30,500",
  },
  {
    category: "Super Midsize",
    fromCode: "LIML",
    fromCity: "Milan",
    toCode: "OTBD",
    toCity: "Doha",
    flightTime: "5h 20m",
    price: "$51,000",
  },
  {
    category: "Heavy",
    fromCode: "EDDB",
    fromCity: "Berlin",
    toCode: "OOMS",
    toCity: "Muscat",
    flightTime: "6h 30m",
    price: "$62,700",
  },
  {
    category: "Ultra Long Range",
    fromCode: "LEMD",
    fromCity: "Madrid",
    toCode: "KVNY",
    toCity: "Los Angeles",
    flightTime: "13h 05m",
    price: "$147,000",
  },
];

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "Whenever possible, book a few days ahead to maximize aircraft choice. That said, we can also arrange many flights on short notice when availability allows.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Quotes depend on aircraft category, route, flight time, airport fees, repositioning, crew logistics, and any concierge or catering requests attached to the trip.",
  },
  {
    question: "Can I bring pets on board?",
    answer:
      "Yes. Many operators welcome pets, but requirements vary by aircraft, destination, and health documentation, so we confirm the details before departure.",
  },
  {
    question: "What about luggage?",
    answer:
      "Luggage capacity depends on the aircraft class and passenger count. We review baggage needs in advance so the selected aircraft fits the trip comfortably.",
  },
  {
    question: "Are empty legs available?",
    answer:
      "Yes. When suitable empty legs exist, we can share them as lower-cost opportunities. Availability is limited and timing is typically less flexible than a custom charter.",
  },
];

function renderBenefits() {
  const node = document.getElementById("benefits-grid");
  node.innerHTML = benefits
    .map(
      (benefit) => `
        <article class="benefit-card">
          <div class="benefit-icon">
            <img src="${benefit.icon}" alt="" loading="lazy">
          </div>
          <div>
            <h3>${benefit.title}</h3>
            <p>${benefit.copy}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderJets() {
  const node = document.getElementById("jet-list");
  node.innerHTML = jetClasses
    .map(
      (jet) => {
        const slug = jet.name.toLowerCase().replace(/\s+/g, "-");
        return `
        <article class="jet-card jet-card--${slug}">
          <div class="jet-card-image">
            <img src="${jet.image}" alt="${jet.name} jet illustration" loading="lazy">
          </div>
          <div class="jet-card-copy">
            <h3>${jet.name}</h3>
            <div class="jet-specs">
              <div class="jet-spec">
                <span class="jet-spec-label">Flight Time:</span>
                <span class="jet-spec-value">${jet.flightTime}</span>
              </div>
              <div class="jet-spec">
                <span class="jet-spec-label">Passengers:</span>
                <span class="jet-spec-value">${jet.passengers}</span>
              </div>
              <div class="jet-spec">
                <span class="jet-spec-label">Cabin Height:</span>
                <span class="jet-spec-value">${jet.cabinHeight}</span>
              </div>
              <div class="jet-spec">
                <span class="jet-spec-label">Suitcases:</span>
                <span class="jet-spec-value">${jet.suitcases}</span>
              </div>
              <div class="jet-spec">
                <span class="jet-spec-label">Average cost per hour:</span>
                <span class="jet-spec-value accent">${jet.hourlyRate}</span>
              </div>
            </div>
          </div>
        </article>
      `;
      },
    )
    .join("");
}

function renderBookingSteps() {
  const node = document.getElementById("booking-timeline");
  node.innerHTML = bookingSteps
    .map(
      (step, index) => `
        <article class="booking-step">
          <div class="booking-step-badge">${String(index + 1).padStart(2, "0")}</div>
          <div class="booking-step-card">
            <div class="booking-step-meta">
              <span class="booking-step-tag">Step ${index + 1}</span>
            </div>
            <p class="booking-step-title">${step.title}</p>
            <p class="booking-step-copy">${step.copy}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderRoutes() {
  const node = document.getElementById("routes-grid");
  node.innerHTML = routes
    .map(
      (route) => `
        <article class="route-card">
          <p class="route-card-category">${route.category}</p>
          <div class="route-card-top">
            <div class="route-airport">
              <small>From</small>
              <strong>${route.fromCode}</strong>
              <span>${route.fromCity}</span>
            </div>
            <div class="route-connector" aria-hidden="true">
              <div class="route-connector-line"></div>
            </div>
            <div class="route-airport to">
              <small>To</small>
              <strong>${route.toCode}</strong>
              <span>${route.toCity}</span>
            </div>
          </div>
          <div class="route-card-bottom">
            <div class="route-meta">
              <span class="route-meta-label">Flight Time</span>
              <span class="route-meta-value">${route.flightTime}</span>
            </div>
            <div class="route-price">
              <span class="route-meta-label">Estimated Price</span>
              <strong>${route.price}</strong>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFaqs() {
  const node = document.getElementById("faq-list");
  node.innerHTML = faqs
    .map(
      (faq, index) => `
        <article class="faq-item" data-open="false">
          <button class="faq-trigger" type="button" aria-expanded="false" aria-controls="faq-answer-${index}">
            <span>${faq.question}</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M3 5.5L7.5 10L12 5.5" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer" id="faq-answer-${index}">
            <div>
              <p>${faq.answer}</p>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  node.querySelectorAll(".faq-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".faq-item");
      const isOpen = item.dataset.open === "true";
      item.dataset.open = String(!isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

renderBenefits();
renderJets();
renderBookingSteps();
renderRoutes();
renderFaqs();
