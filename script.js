function appData() {
    return {
        mode: 'standard',
        darkMode: localStorage.getItem('theme') === 'dark',
        search: '',
        scrolled: false,
        toast: { visible: false, message: '' },
        init() {
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
        toggleTheme() {
            this.darkMode = !this.darkMode;
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        },
        toggleMode() {
            this.mode = this.mode === 'standard' ? 'ai' : 'standard';
            window.dispatchEvent(new CustomEvent('mode-change', { detail: this.mode }));
        },
        matchesSearch(text) {
            if (this.search === '') return true;
            return text.toLowerCase().includes(this.search.toLowerCase());
        },
        copyToClipboard(element, event) {
            const text = element.innerText;
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('Copied to clipboard!');
                if(event) this.createParticles(event.clientX, event.clientY);
            });
        },
        createParticles(x, y) {
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.width = '8px';
                particle.style.height = '8px';
                particle.style.backgroundColor = ['#ffb7b2', '#d946ef', '#8b5cf6', '#fcd34d'][Math.floor(Math.random() * 4)];
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9999';
                document.body.appendChild(particle);

                const angle = Math.random() * Math.PI * 2;
                const velocity = Math.random() * 100 + 50;
                const tx = Math.cos(angle) * velocity;
                const ty = Math.sin(angle) * velocity;

                particle.animate([
                    { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                    { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
                ], {
                    duration: 600,
                    easing: 'cubic-bezier(0, .9, .57, 1)',
                }).onfinish = () => particle.remove();
            }
        },
        showToast(msg) {
            this.toast.message = msg;
            this.toast.visible = true;
            setTimeout(() => { this.toast.visible = false; }, 3000);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('sakura-container');
    const petalCount = 30;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${Math.random() * 5 + 5}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petal.style.width = `${Math.random() * 10 + 10}px`;
        petal.style.height = `${Math.random() * 10 + 10}px`;
        container.appendChild(petal);
    }
});
