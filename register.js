lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-dark/90', 'backdrop-blur-md', 'border-b', 'border-white/10');
            } else {
                navbar.classList.remove('bg-dark/90', 'backdrop-blur-md', 'border-b', 'border-white/10');
            }
        });

        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        const filterBtns = document.querySelectorAll('.filter-btn');
        const feedCards = document.querySelectorAll('.feed-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-neon', 'text-black');
                    b.classList.add('border', 'border-white/10', 'text-gray-400');
                });
                btn.classList.add('bg-neon', 'text-black');
                btn.classList.remove('border', 'border-white/10', 'text-gray-400');

                const filter = btn.dataset.filter;

                feedCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        requestAnimationFrame(() => {
                            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        });
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 400);
                    }
                });
            });
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });