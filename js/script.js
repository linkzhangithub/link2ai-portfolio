// 确保DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
  // 滚动动画
  const fadeElements = document.querySelectorAll(".fade-up");
  
  // 为元素添加观察器，实现滚动淡入效果
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // 一旦显示，停止观察
        }
      });
    },
    { threshold: 0.1, rootMargin: "-30px 0px" }, // 调整阈值和根边距
  );
  
  // 观察所有元素
  fadeElements.forEach((el) => {
    observer.observe(el);
  });
  
  // 立即检查首屏元素是否在视口内
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    if (isVisible) {
      el.classList.add("visible");
      observer.unobserve(el);
    }
  });
  
  // 回到顶部按钮
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });
    
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});