// ===== Timeline Scroll Animation (รองรับหลาย section) =====
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.experience'); // ดึงทุก section experience
  
  sections.forEach(section => {
    const timelineLine = section.querySelector('.timeline-line');
    const items = section.querySelectorAll('.timeline-item');
    
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    
    // วาดเส้นตาม scroll
    let progress = windowHeight - sectionTop;
    let lineHeight = Math.min(progress, sectionHeight - 50); // เส้นหยุดก่อนสุด 50px
    if (lineHeight > 0) {
      timelineLine.style.height = lineHeight + 'px';
    }

    // ถ้าเลื่อนถึงสุด section แล้ว แสดงจุดปิดท้าย
    if (progress >= sectionHeight) {
      timelineLine.classList.add('complete');
    } else {
      timelineLine.classList.remove('complete');
    }

    // แสดงกล่องเมื่อเข้ามาใน viewport
    items.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < windowHeight - 100) {
        item.classList.add('show');
      }
    });
  });
});



//กดอ่านต่อ ย่อกลับ
document.querySelectorAll(".project-description").forEach((desc) => {
  const readMore = desc.querySelector(".read-more");
  const readLess = desc.querySelector(".read-less");
  const moreText = desc.querySelector(".more-text");

  readMore.addEventListener("click", (e) => {
    e.preventDefault();
    moreText.style.display = "inline";
    readMore.style.display = "none";
    readLess.style.display = "inline";
  });

  readLess.addEventListener("click", (e) => {
    e.preventDefault();
    moreText.style.display = "none";
    readLess.style.display = "none";
    readMore.style.display = "inline";
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".certificates-card img");
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = card.src;

      const scrollY = window.scrollY;
      modal.style.top = `${scrollY}px`;

      // ✅ ล็อกการเลื่อนหน้าเว็บ
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";

    // ✅ ปลดล็อกการเลื่อนหน้าเว็บ
    document.body.style.overflow = "auto";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const targetURL = card.dataset.url;
      
      // ถ้ามี URL ให้เปลี่ยนหน้า
      if (targetURL) {
        window.location.href = targetURL;
      } else {
        console.warn("❗ ไม่มี data-url ในการ์ดนี้:", card);
      }
    });
  });
});


