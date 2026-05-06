/* ====== 暗黑模式切换 ====== */
(function initTheme(){
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  if (toggle){
    const sync = () => {
      toggle.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    };
    sync();
    toggle.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      sync();
    });
  }

  /* ====== 简历技术栈筛选 ====== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skills = document.querySelectorAll('.skill');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      skills.forEach(s => {
        if (f === 'all' || s.dataset.category === f) s.classList.remove('hidden');
        else s.classList.add('hidden');
      });
    });
  });

  /* ====== 画廊模态框 ====== */
  const modal = document.getElementById('modal');
  if (modal){
    const modalImg = document.getElementById('modalImg');
    const cap = document.getElementById('modalCaption');
    const closeBtn = document.getElementById('modalClose');
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        cap.textContent = item.querySelector('figcaption').textContent;
        modal.classList.add('show');
      });
    });
    const close = () => modal.classList.remove('show');
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ====== 联系表单验证 ====== */
  const form = document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      const errName = document.getElementById('errName');
      const errEmail = document.getElementById('errEmail');
      const errMsg = document.getElementById('errMsg');
      const success = document.getElementById('formSuccess');
      errName.textContent = errEmail.textContent = errMsg.textContent = success.textContent = '';
      let ok = true;
      if (!name){ errName.textContent = '请输入姓名'; ok = false; }
      if (!email.includes('@')){ errEmail.textContent = '邮箱格式不正确（缺少 @）'; ok = false; }
      if (msg.length < 10){ errMsg.textContent = '消息至少 10 个字符'; ok = false; }
      if (ok){
        success.textContent = '✓ 消息已发送！感谢您的联系。';
        form.reset();
      }
    });
  }
});
