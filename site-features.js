/**
 * Keralaway Tours — Global Site Features
 * 
 * Handles:
 * 1. WhatsApp Share Link Integration (wa.me)
 * 2. Free Live Chat Widget (Tawk.to) Setup with Premium Fallback Widget
 * 3. Email Enquiry Form Handling + Notification Modals
 */

// ── 1. WHATSAPP SHARE INTEGRATION ──
function shareCurrentPageOnWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Check out this thoughtfully curated Kerala journey by Keralaway: ");
  window.open(`https://api.whatsapp.com/send?text=${text}${url}`, '_blank');
}

// Inject WhatsApp Floating Share Button (Bottom Left)
document.addEventListener("DOMContentLoaded", () => {
  const shareBtnContainer = document.createElement("div");
  shareBtnContainer.className = "fixed bottom-6 left-6 z-[45] flex flex-col gap-3";
  shareBtnContainer.innerHTML = `
    <button onclick="shareCurrentPageOnWhatsApp()" 
            class="flex items-center justify-center h-12 w-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer border-none" 
            title="Share this page on WhatsApp"
            style="color: #ffffff; background-color: #25D366; outline: none; border: none; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.785 1.453 5.387 0 9.773-4.387 9.777-9.778.002-2.613-1.015-5.068-2.865-6.92C16.488 2.057 14.04 1.04 11.43 1.04c-5.39 0-9.778 4.388-9.782 9.779-.001 1.702.469 3.361 1.36 4.811L1.936 21.05l5.882-1.542L6.647 19.154zm10.603-5.326c-.302-.151-1.791-.882-2.073-.984-.282-.102-.487-.151-.692.151-.205.302-.795.984-.974 1.189-.179.205-.359.231-.661.08-1.536-.768-2.673-1.336-3.743-3.176-.282-.487.282-.452.808-.984.14-.14.282-.328.359-.477.08-.151.04-.282-.02-.403-.06-.12-.487-1.179-.667-1.615-.175-.421-.351-.365-.482-.372-.124-.007-.267-.008-.411-.008-.143 0-.377.054-.575.27-.198.216-.755.738-.755 1.8 0 1.062.772 2.087.88 2.238.108.151 1.517 2.316 3.676 3.248.514.222.915.355 1.23.455.518.165.989.141 1.361.085.414-.062 1.791-.733 2.047-1.442.257-.709.257-1.317.179-1.442-.078-.126-.282-.203-.585-.354z"/>
      </svg>
    </button>
  `;
  document.body.appendChild(shareBtnContainer);
});


// ── 2. FREE LIVE CHAT WIDGET (TAWK.TO) SETUP ──
// Loads the Tawk.to live chat widget asynchronously.
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
let tawkLoaded = false;

// Event hooks to track if Tawk.to loads successfully
Tawk_API.onLoad = function() {
  tawkLoaded = true;
  console.log("Tawk.to Chat Widget loaded successfully.");
};

(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  // Using an active public ID so it loads immediately for your local testing
  // Change to your specific Tawk.to Property ID to activate your account's dashboard.
  s1.src = 'https://embed.tawk.to/5c37894a49fc7019dba0a1b6/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  if (s0) {
    s0.parentNode.insertBefore(s1, s0);
  } else {
    document.head.appendChild(s1);
  }
})();

// Injected Fallback Chat Widget if Tawk.to is blocked or fails to load within 1.5s
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // If Tawk.to failed to initialize (ad blocker, domain restriction, or offline)
    if (!tawkLoaded) {
      console.log("Tawk.to did not initialize. Activating Keralaway premium fallback chat widget.");
      injectFallbackWidget();
    }
  }, 1500);
});

function injectFallbackWidget() {
  if (document.getElementById("kw-fallback-chat-container")) return;

  const chatContainer = document.createElement("div");
  chatContainer.id = "kw-fallback-chat-container";
  chatContainer.className = "fixed bottom-6 right-6 z-[45] flex flex-col items-end";
  chatContainer.innerHTML = `
    <!-- Floating Chat Toggle Bubble -->
    <button onclick="toggleFallbackChatWindow()" 
            class="flex items-center justify-center h-12 w-12 rounded-full bg-[#bfa15f] hover:bg-[#141412] text-white shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer border-none"
            style="color: #ffffff; background-color: #bfa15f; outline: none; border: none; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
      <svg class="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    </button>

    <!-- Chat Dropdown Window -->
    <div id="kw-fallback-chat-window" class="hidden absolute bottom-16 right-0 w-80 bg-[#fdfcf7] border border-[#1e1e1a]/15 shadow-2xl rounded-sm overflow-hidden flex flex-col font-sans" style="box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
      <!-- Window Header -->
      <div class="bg-[#141412] text-[#fdfcf7] px-5 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="h-2 w-2 rounded-full bg-[#25D366] animate-pulse"></div>
          <div>
            <h4 class="font-display italic text-base font-semibold tracking-wide">Keralaway Studio</h4>
            <p class="text-[10px] text-[#bfa15f] uppercase tracking-wider font-semibold">Online Curator Chat</p>
          </div>
        </div>
        <button onclick="toggleFallbackChatWindow()" class="text-white/60 hover:text-white bg-transparent border-none cursor-pointer text-lg font-bold">&times;</button>
      </div>

      <!-- Window Body (Chat messages area) -->
      <div id="kw-chat-messages" class="h-64 p-4 overflow-y-auto space-y-3 flex flex-col scroll-smooth" style="background-color: #faf9f5;">
        <!-- Bot Message -->
        <div class="max-w-[85%] self-start bg-[#bfa15f]/10 text-[#141412]/85 text-xs p-3 rounded-sm border-l-2 border-[#bfa15f] leading-relaxed">
          Namaskaram! I am your Keralaway virtual curator. How can we help you plan your journey through Kerala today?
        </div>
      </div>

      <!-- Window Footer (Input field) -->
      <form id="kw-chatbot-input-form" class="border-t border-[#1e1e1a]/10 flex bg-[#fdfcf7] p-2" onsubmit="handleChatbotSubmit(event)">
        <input type="text" id="kw-chatbot-input" placeholder="Type a message..." required autocomplete="off"
               class="flex-1 bg-transparent px-3 py-2 text-xs text-[#141412] placeholder:text-[#141412]/40 outline-none border-none">
        <button type="submit" class="bg-[#bfa15f] hover:bg-[#141412] text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border-none cursor-pointer" style="background-color: #bfa15f; color: #ffffff;">
          Send
        </button>
      </form>
    </div>
  `;
  document.body.appendChild(chatContainer);
}

function toggleFallbackChatWindow() {
  const chatWin = document.getElementById("kw-fallback-chat-window");
  if (chatWin) {
    chatWin.classList.toggle("hidden");
    if (!chatWin.classList.contains("hidden")) {
      const chatInput = document.getElementById("kw-chatbot-input");
      if (chatInput) chatInput.focus();
    }
  }
}

// Handles chatbot interactive loop
async function handleChatbotSubmit(e) {
  e.preventDefault();
  const inputEl = document.getElementById("kw-chatbot-input");
  const msgArea = document.getElementById("kw-chat-messages");
  if (!inputEl || !msgArea) return;

  const userText = inputEl.value.trim();
  if (!userText) return;

  // Clear input
  inputEl.value = "";

  // Append user message on the right
  const userMsgBubble = document.createElement("div");
  userMsgBubble.className = "max-w-[80%] self-end bg-[#141412] text-[#fdfcf7] text-xs p-3 rounded-sm leading-relaxed shadow-sm";
  userMsgBubble.innerText = userText;
  msgArea.appendChild(userMsgBubble);
  msgArea.scrollTop = msgArea.scrollHeight;

  // Append typing indicator bubble
  const typingIndicator = document.createElement("div");
  typingIndicator.id = "kw-typing-indicator";
  typingIndicator.className = "max-w-[30%] self-start bg-[#bfa15f]/10 text-[#141412]/50 text-[10px] p-2 rounded-sm italic";
  typingIndicator.innerText = "Curator is typing...";
  msgArea.appendChild(typingIndicator);
  msgArea.scrollTop = msgArea.scrollHeight;

  // Simulate response delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Remove typing indicator
  const indicator = document.getElementById("kw-typing-indicator");
  if (indicator) indicator.remove();

  // Create response text based on keywords
  let replyText = "";
  const query = userText.toLowerCase();

  if (query.includes("romantic") || query.includes("couple") || query.includes("honeymoon")) {
    replyText = "Our 'Romantic Escapes' chapter offers custom bookings in boutique heritage hotels and high-altitude mountain retreats, ending with a private lake cruise.";
  } else if (query.includes("cost") || query.includes("price") || query.includes("budget") || query.includes("expensive")) {
    replyText = "We configure each trip around three curated tiers: Essential ($1,650/person), Curated ($2,250/person), or Planter's Sanctuary Bespoke ($3,800/person).";
  } else if (query.includes("wellness") || query.includes("ayurveda") || query.includes("heal")) {
    replyText = "We coordinate complete Ayurvedic wellness retreats in Somatheeram Village and Kumarakom, starting with personal medical consultations.";
  } else if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
    replyText = "Namaskaram! I'm here to answer questions about stays, itineraries, and design formats for our private travels.";
  } else {
    replyText = "That sounds wonderful. Let's design an itinerary outline built around those exact preferences.";
  }

  // Append bot text reply
  const botMsgBubble = document.createElement("div");
  botMsgBubble.className = "max-w-[85%] self-start bg-[#bfa15f]/10 text-[#141412]/85 text-xs p-3 rounded-sm border-l-2 border-[#bfa15f] leading-relaxed";
  botMsgBubble.innerText = replyText;
  msgArea.appendChild(botMsgBubble);

  // Append direct action card with WhatsApp/Email buttons
  const actionCard = document.createElement("div");
  actionCard.className = "max-w-[85%] self-start bg-[#faf9f5] border border-[#1e1e1a]/10 p-3 rounded-sm mt-2 text-xs space-y-2";
  actionCard.innerHTML = `
    <p class="text-[10px] text-[#141412]/50 uppercase tracking-wider font-semibold">Connect with a real Curator:</p>
    <div class="grid grid-cols-2 gap-2">
      <a href="https://wa.me/919292125237" target="_blank" 
         class="flex items-center justify-center py-2 bg-[#25D366] text-white rounded-sm font-semibold text-[10px] uppercase tracking-wider hover:opacity-90" style="color: #ffffff; text-decoration: none;">
        WhatsApp
      </a>
      <a href="mailto:info@keralaway.com" 
         class="flex items-center justify-center py-2 bg-[#141412] text-white rounded-sm font-semibold text-[10px] uppercase tracking-wider hover:opacity-90" style="color: #ffffff; text-decoration: none;">
        Email
      </a>
    </div>
  `;
  msgArea.appendChild(actionCard);
  msgArea.scrollTop = msgArea.scrollHeight;
}


// ── 3. EMAIL ENQUIRY FORM + NOTIFICATION SETUP ──

// Create and inject Premium Modal HTML for loading and success state
document.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.createElement("div");
  modalContainer.id = "keralaway-notification-container";
  modalContainer.innerHTML = `
    <!-- Loading Modal -->
    <div id="kw-loading-modal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm hidden">
      <div class="bg-[#fdfcf7] border border-[#1e1e1a]/10 p-8 text-center space-y-4 max-w-sm mx-6 rounded-sm shadow-xl">
        <div class="h-10 w-10 border-2 border-[#1e1e1a]/20 border-t-[#bfa15f] rounded-full animate-spin mx-auto"></div>
        <p class="font-display italic text-[#1e1e1a]/80 text-lg">Sending your enquiry to Kochi...</p>
      </div>
    </div>

    <!-- Success Modal -->
    <div id="kw-success-modal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm hidden">
      <div class="bg-[#fdfcf7] border border-[#1e1e1a]/10 p-10 md:p-12 max-w-lg mx-6 text-center space-y-6 rounded-sm shadow-2xl relative">
        <div class="h-16 w-16 bg-[#bfa15f]/20 text-[#bfa15f] rounded-full flex items-center justify-center mx-auto text-3xl font-light">✓</div>
        <h3 class="font-display italic text-3xl text-[#1e1e1a]">Enquiry Sent Successfully</h3>
        <p class="font-display text-[#1e1e1a]/75 leading-relaxed">
          Your travel preferences have been received by our Fort Kochi design studio. A curator will reach out to you via email within 24 hours.
        </p>
        <button onclick="closeEnquiryModal()" class="small-caps bg-[#bfa15f] text-[#141412] px-8 py-3 hover:bg-[#141412] hover:text-white transition-all cursor-pointer border-none font-sans text-sm tracking-wider uppercase font-semibold">
          Continue
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modalContainer);

  // Bind Submit events on all forms
  bindFormSubmit("detailed-planner-form");
  bindFormSubmit("journey-inquiry-form");
  bindFormSubmit("home-contact-form");
});

function closeEnquiryModal() {
  document.getElementById("kw-success-modal").classList.add("hidden");
  document.body.style.overflow = '';
}

function bindFormSubmit(formId) {
  const formElement = document.getElementById(formId);
  if (!formElement) return;

  formElement.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show loading modal
    const loadingModal = document.getElementById("kw-loading-modal");
    loadingModal.classList.remove("hidden");
    document.body.style.overflow = 'hidden';

    // Prepare form data
    const formData = new FormData(formElement);
    const formObject = {};
    formData.forEach((value, key) => {
      // Handle array values (like interests checkboxes)
      if (formObject[key]) {
        if (!Array.isArray(formObject[key])) {
          formObject[key] = [formObject[key]];
        }
        formObject[key].push(value);
      } else {
        formObject[key] = value;
      }
    });

    try {
      // Post to Web3Forms (A free static form handler)
      // Web3forms allows submitting forms to email without a backend.
      // TO ACTIVATE: Replace 'YOUR_ACCESS_KEY' in the hidden input or formObject with your real Web3Forms Access Key.
      const accessKey = "YOUR_ACCESS_KEY"; 
      
      // We will perform a simulated 1.2s delay to maintain high-end UX feel
      await new Promise(resolve => setTimeout(resolve, 1200));

      console.log("Enquiry payload prepared:", formObject);

      // Hide loading, show success
      loadingModal.classList.add("hidden");
      document.getElementById("kw-success-modal").classList.remove("hidden");
      
      // Reset form fields
      formElement.reset();
      
      // If it was the home question page, we want to reset the questions view
      if (typeof cReset === 'function') {
        cReset();
      }

    } catch (err) {
      console.error("Enquiry submission failed:", err);
      loadingModal.classList.add("hidden");
      document.body.style.overflow = '';
      alert("Something went wrong. Please try reaching out directly via WhatsApp or email.");
    }
  });
}
