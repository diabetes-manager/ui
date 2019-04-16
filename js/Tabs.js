class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;

    if (this.data === 'all') {
      this.cards = document.querySelectorAll('.members .member');
    } else {
      this.cards = document.querySelectorAll(`.members .member[data-tab="${this.data}"]`);
    }

    this.cards = Array.from(this.cards).map((card) => new TabCard(card));
    this.element.addEventListener('click', () => this.selectTab());
  }

  selectTab() {
    document.querySelector('.tabs .role__tab--active').classList.remove('role__tab--active');

    const cards = document.querySelectorAll('.members .member:not(.member--hidden');
    cards.forEach((card) => card.classList.add('member--hidden'));

    this.element.classList.add('role__tab--active');
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(element) {
    this.element = element;
  }

  selectCard() {
    this.element.classList.remove('member--hidden');
  }
}

let tabs = document.querySelectorAll('.tabs .role__tab').forEach(tab => new TabLink(tab));