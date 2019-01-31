class TabLink {
  constructor(element) {
    this.element = element
    this.data = element.dataset.tab
    this.itemElement = Array.from(document.querySelectorAll(".tabs-item")).find(
      e => e.dataset.tab === this.data
    )
    this.tabItem = new TabItem(this.itemElement)
    this.element.addEventListener("click", () => this.select())
  }
  static of(element) {
    return new TabLink(element)
  }

  select() {
    const links = document.querySelectorAll(".tabs-link")
    links.forEach(e => {
      e.classList.remove("tabs-link-selected")
    })
    this.element.classList.add("tabs-link-selected")
    this.tabItem.select()
  }
}

class TabItem {
  constructor(element) {
    this.element = element
  }

  select() {
    const items = document.querySelectorAll(".tabs-item")
    items.forEach(e => {
      e.classList.remove("tabs-item-selected")
    })
    this.element.classList.add("tabs-item-selected")
  }
}

const links = document.querySelectorAll(".tabs-link")
links.forEach(TabLink.of)
